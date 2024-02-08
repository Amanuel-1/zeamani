import { sanityFetch } from 'fireup/lib/client'
import { urlForImage } from 'fireup/lib/image'
import { SGallery, SPost } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'

const Gallery = async() => {
  const query  = groq`*[_type=="gallery"]{
    ...,

}`

const gallery:SGallery[]  = await sanityFetch({query:query,tags:["post","articles"]})
 gallery.map((img)=>gallery.push(img))
  return (
  <div className="p-5 sm:p-8">
    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        
      {gallery.length && gallery.map((item:SGallery, index:number) => (
        <div key={index} className="grid gap-4">

            <img
              className="h-auto cursor-pointer hover:brightness-75 max-w-full py-2 rounded-lg object-cover object-center transition-all duration-700"
              src={urlForImage(item.mainImage).url()}
              alt={ 'galley-photo'}
            />
          </div>

      ))}
    </div>
</div>
  )

      
  
}

export default Gallery