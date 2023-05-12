import React from 'react'
import { clientConfig } from '../../lib/client'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'

const serializers = {
  types: {
    mainImage: (props) => (
      <div className="">
        <Image
          src={props.node.asset.url}
          alt={props.node.alt}
          className="w-full h-auto"
          width={props.node.asset.metadata.dimensions.width}
          height={props.node.asset.metadata.dimensions.height}
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
        imageOptions={{ w: 1920, h: 2880, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
        serializers={serializers}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full"
      />
  </div>
  )
}
export default Content
