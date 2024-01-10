import { twitterPreview } from 'fireup/app/_components/sanity/twitterPreview'
import { YouTubePreview } from 'fireup/app/_components/sanity/youtubePreview'
import {defineField, defineType} from 'sanity'




export const twitter = defineType({
  name: 'twitter',
  title: 'TwitterPost',
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
    preview:twitterPreview
  }

  
  
})