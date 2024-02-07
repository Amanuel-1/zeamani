import { defineField, defineType } from "sanity";


export default defineType({
    name:'gallery',
    title:'Gallery',
    type:'document',
    
    fields:[
        defineField({
            name:'description',
            title:'Description',
            type:'string'
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
            name:'location',
            title:"Location",
            type:'string'
          }),
          defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          }),
    ]

})