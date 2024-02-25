import { EmbedPreview } from 'fireup/app/_components/sanity/embedPreview'
import { YouTubePreview } from 'fireup/app/_components/sanity/youtubePreview'
import {defineField, defineType} from 'sanity'




export const embed = defineType({
  name: 'embed',
  title: 'Embed Url',
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
    preview:EmbedPreview
  }

  
  
})