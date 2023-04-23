import {defineField, defineType} from 'sanity'
export default defineType({
    name: 'photo',
    title: 'Photo',
    type: 'document',

    fields: [
      defineField({
        name: 'meta_title',
        title: 'Meta Title',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'meta_description',
        title: 'Meta Description',
        type: 'text',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Keep titles short and sweet. 50 characters or less.',
      }),
      defineField({
        name: 'publishedDate',
        type: 'date',
        title: 'Published Date',
        validation: Rule => Rule.required(),
    }), 
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: Rule => Rule.required(),
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
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
        },
      }),
      defineField({
        name: 'body',
        title: 'Body content',
        type: 'array',
        validation: Rule => Rule.required(),
        of: [
            {
                type: 'image',
            }
        ]
      }),
    ],
  })