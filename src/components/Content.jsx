import React from 'react'
import { clientConfig } from '../../lib/client'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  types: {
    mainImage: (props) => (
      <div className="">
        <img
          src={props.node.asset.url}
          alt={props.node.alt}
          className="w-full h-auto"
        />
      </div>
    ),
  },
};


const Content = ({body}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
        serializers={serializers}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full"
      />
  </div>
  )
}
export default Content
