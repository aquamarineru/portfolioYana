import { FcBusinesswoman } from "react-icons/fc";
const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Bullet', value: 'bullet' },
    { title: 'Numbered', value: 'number' },
    { title: 'Quote', value: 'blockquote' },
];

export default {
    name: 'about',
    title: 'About',
    type: 'document',
    icon: FcBusinesswoman,
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Main title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            description: 'Subtitle',
            type: 'text',
            rows: 2,
        },
        {
            name: 'image',
            title: 'Image',
            description: 'Main image',
            type: 'image',
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
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: textEditorStyles,
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                title: 'Link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url',
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'attribution',
                            title: 'Attribution',
                            type: 'string',
                        }
                    ]
                },
            ],
        },
        
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
    },
};