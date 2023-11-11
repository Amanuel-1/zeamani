'use client'
import { client } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import React from 'react'

type LikePostProps  = {
    post :SPost
}


const updateLikesCount  = async(post:SPost)=>{
    
    const query  = groq`*[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->
    }[0]`


    post = await client.fetch(query,{slug:post.slug.current})
    console.log("yeeeeeeeeyyy this is the current post from the like button",post)
    
    const _id  =  post._id;
    const currentLikes  =  post.likes


    try{
        const result =await client.patch(_id).set({likes:currentLikes+1}).commit()
        if(result){
            console.log("yeeey the likes count is updates successfully ",result)
        }
        
    }
    catch(e){
        console.log(e)
    }
}


const LikeButton = ({post}:LikePostProps) => {
  return (
    <button className='z-20 px-6 py-3 m-5 bg-stone-950 text-stone-50' onClick={async()=>await updateLikesCount(post)}>{post.likes} like</button>
  )
}

export default LikeButton