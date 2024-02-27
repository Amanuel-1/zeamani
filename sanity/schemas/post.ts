import metadataInput from 'fireup/app/_components/sanity/metadataInput'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
  
    defineField(
      {
        name: 'likes',
        title: 'Likes',
        type: 'number',
        initialValue: 0,
      }
    ),
    defineField(
      {
        name: 'dislikes',
        title: 'Dislikes',
        type: 'number',
        initialValue: 0,
      }
    ),
    defineField(
      {
        name: 'views',
        title: 'Views',
        type: 'number',
        initialValue: 0,
      }
    ),
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'audio',
      title: 'Podcast media file',
      description:
        'Most podcatchers support .mp3, but other audio-formats may work as well',
      type: 'file'
    }),
    defineField({
      name: 'fileUrl',
      title: 'External location for podcast media file',
      description: 'For when you host your podcast media file elsewhere',
      type: 'url'
    }),
  ],
    
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
