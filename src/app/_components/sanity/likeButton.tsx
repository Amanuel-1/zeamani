'use client'
import { client } from 'fireup/lib/client'
import { SPost } from 'fireup/lib/types'
import React from 'react'

type LikePostProps  = {
    post :SPost
}


const updateLikesCount  = async(post:SPost)=>{
    const _id  =  post._id
    const currentLikes  = post.likes as number

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