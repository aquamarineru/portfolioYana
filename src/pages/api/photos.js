// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '../../../lib/client'

export default async function photos(req, res) {
  const { start, end } = req.query

  if(isNaN(Number(start)) || isNaN(Number(end))) {
    res.status(400).end().json({ error: 'Invalid query' })
  }

  const { photos, total } = await loadPhotos(start, end)
  res.status(200).json({photos, total})
}
export async function loadPhotos (start, end) {
const query = `
{
  "photos": *[_type == "photo" && hideFromWebsite != true] | order(coalesce(orderRank, "zzzzzz") asc, publishedDate desc) [${start}...${end}] {
    _id,
    title,
    publishedDate,
    slug,
    orderRank,
    hideFromWebsite,
    image{
      ...,
      asset->{
        _id,
        metadata{
          lqip
        }
      }
    }
  },
  "total": count(*[_type == "photo" && hideFromWebsite != true])
}
`
  const { photos, total } = await client.fetch(query)

  return {
    photos,
    total
   }
  
}
