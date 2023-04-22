import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
}
export const client = createClient({
    projectId: clientConfig.projectId,
    dataset: clientConfig.dataset,
    apiVersion: '2023-04-09',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)