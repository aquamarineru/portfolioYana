import { FcSpeaker } from "react-icons/fc";
export default {
    name: 'feedback',
    type: 'document',
    title: 'Feedback',
    icon: FcSpeaker,
    fields: [
      {
        name: 'feedback_items',
        title: 'Feedback Items',
        type: 'array',
        of: [
            { 
                type: 'image' 
            },
            {
                type: 'block'
            }
        ],
        validation: Rule => Rule.min(1).error('At least one feedback item is required'),
      }
    ],
    types: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
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
        }
      ],
  };