import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'quickSummary',
      title: 'Quick Summary',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }),
    defineField({
      name: 'category',
      title: 'category',
      type: 'reference',
      to: {type: 'category'},
    }),
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'ftp', 'ftps'],
          allowRelative: false,
        }),
    },
    defineField({
      name: 'info',
      title: 'Information',
      type: 'text',
    }),
    defineField({
      name: 'summaryText',
      title: 'Summary Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'fullTranscript',
      title: 'Full Transcript',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {category} = selection
      return {...selection, subtitle: category ?? 'No Category'}
    },
  },
})
