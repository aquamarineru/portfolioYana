import { FcMultipleSmartphones } from "react-icons/fc";

export default {
    name: 'contact',
    type: 'document',
    title: 'Contact',
    icon: FcMultipleSmartphones,
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of this contact page',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description for this contact page',
        },
        {
        name: 'imageSrc',
        title: 'Image Source',
        type: 'image',
        description: 'The image for this contact page',
        options: {
            hotspot: true,
            },
            fields: [
                
                {
                    name: 'attribution',
                    title: 'Attribution',
                    type: 'string',
                }
            ]
        },
    ],
    };
