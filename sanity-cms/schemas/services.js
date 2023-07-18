import {StarIcon} from '@sanity/icons'

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    icon: StarIcon,
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The unique identifier for this service, used for tabs',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of this service',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description for this service',
      },
      {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'image',
        description: 'The image for this service',
        options: {
            hotspot: true,
          },
          fields: [
              {
                name: 'caption',
                title: 'Caption',
                type: 'string',
              },
              {
                  name: 'attribution',
                  title: 'Attribution',
                  type: 'string',
              }
          ]
      },
    ],
  };
  