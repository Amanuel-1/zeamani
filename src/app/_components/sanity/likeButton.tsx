'use client'
import { client } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'

type LikePostProps  = {
    slug :string
}


// const updateLikesCount  = async(slug:string)=>{
    
//     const query = groq`*[_type =="post" && slug.current ==$slug]`

//     try{
//         const post:SPost =  await client.fetch(query,{slug:slug})
//         const result =await client.patch(post._id).set({likes:post.likes+1}).commit()
//         if(result){
//             console.log("yeeey the likes count is updates successfully ",result)
//         }
        
//     }
//     catch(e){
//         console.log(e)
//     }
// }


const LikeButton = ({slug}:LikePostProps) => {
  return (
    <button className='z-20 px-6 py-3 m-5 bg-stone-950 text-stone-50' > like</button>
  )
}

export default LikeButton