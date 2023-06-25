import {HomeIcon} from '@sanity/icons'
export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: HomeIcon,
    groups: [
        {
            name: 'editorial',
            title: 'Editorial',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        //Seo
        {
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            validation: (Rule) =>
                Rule.max(50).warning('All titles should be under 50 characters'),
            group: "seo"
        },
        {
            name: 'seoDescription',
            title: 'SΕΟ Description',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
                Rule.max(150).warning('All descriptions should be under 150 characters'),
            group: "seo"
        },
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'image',
            group: "seo"
        },
        // Content
        {
            name: 'content',
            title: 'Content',
            type: 'object',
            group: "editorial",
            fields: [
                {
                    name: 'banner',
                    title: 'Banner',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    rows: 2,
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
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
                {
                    name: 'video',
                    title: 'Video URL',
                    type: 'url',
                },
                {
                    name: 'videoAnimation',
                    title: 'Video Animation',
                    type: 'videoAnimation',
                },
                
                {
                    name: 'button',
                    title: 'Κείμενο πλήκτρου',
                    type: 'string',
                },
            ],
        }
    ],
    preview: {
        prepare() {
          return {
            // media: icon,
            subtitle: 'Index',
            title: 'Home',
          }
        },
      },
}