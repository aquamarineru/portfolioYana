import { FcSlrBackSide } from "react-icons/fc";

export default {
    name: 'carousel',
    type: 'document',
    title: 'Carousel',
    icon: FcSlrBackSide,
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: Rule => Rule.required(),
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
      {
        name: 'meta_title',
        title: 'Meta Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
    ],
  };

  
  
  
  
  
  