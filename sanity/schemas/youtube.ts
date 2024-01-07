import { YouTubePreview } from 'fireup/app/_components/sanity/youtubePreview'
import {defineField, defineType} from 'sanity'




export const youtube = defineType({
  name: 'youtube',
  title: 'Youtube',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  

  },

  components:{
    preview:YouTubePreview
  }

  
  
})