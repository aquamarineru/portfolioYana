import { FcHome } from "react-icons/fc"; 
export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: FcHome,
    fields: [
        {
            name: 'seoTitle',
            title: 'SEO Заголовок',
            description: 'SEO Title должен быть менее 50 символов',
            type: 'string',
            validation: (Rule) =>
                Rule.max(50).warning('All titles should be under 50 characters'),
        },
        {
            name: 'seoDescription',
            title: 'SΕΟ Описание',
            description: 'SEO Description должен быть менее 150 символов',
            type: 'text',
            rows: 2,
            validation: (Rule) =>
                Rule.max(150).warning('All descriptions should be under 150 characters'),
        },
        {
            name: 'seoImage',
            title: 'SEO Image',
            description: 'Изображение для соцсетей',
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
            name: 'seoKeywords',
            title: 'SEO Ключевые слова',
            description: 'Ключевые слова для поисковых систем',
            type: 'array',
            of: [{ type: 'string' }],
        },
        // Content
        {
            name: 'title',
            title: 'Заголовок',
            description: 'Главный заголовок',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Подзаголовок',
            description: 'Подзаголовок',
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
            title: 'Button',
            type: 'string',
        },
    ],
    /* preview: {
        prepare() {
          return {
            media: 'FcHome',
            title: 'Home',
          }
        },
      }, */
}