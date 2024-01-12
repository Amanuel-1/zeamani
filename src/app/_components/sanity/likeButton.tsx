'use client'
import { client, sanityFetch } from 'fireup/lib/client'
import { SPost, SProject } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import { revalidateTag } from 'next/cache'
import { IoIosHeart } from "react-icons/io";
import { FaThumbsDown } from "react-icons/fa";
import React from 'react'

type LikePostProps  = {
    post :SPost | SProject,
    type:'like'| 'dislike'
}


const updateLikesCount  = async(slug:string,type:'like'| 'dislike')=>{
    
    const query = groq`*[_type =="post" && slug.current ==$slug][0]`

    try{
        const post:SPost =  await sanityFetch({query:query,params:{slug},tags:["post","articles"]})
        let result; 
        if(type=='like'){
            result =await client.patch(post._id).set({likes:post.likes+1}).commit()
        }
        else{
            result =await client.patch(post._id).set({dislikes:post.dislikes+1}).commit()
        }
        if(result){
            console.log("yeeey the likes count is updates successfully ",result)
            
        }
        
    }
    catch(e){
        console.log(e)
    }
}


const LikeButton = ({post,type}:LikePostProps) => {
  return (
    <button onClick={()=>updateLikesCount(post.slug.current,type)} className='z-20 px-3 text-stone-50 font-bold' >{
        type=='like'?(
            <div className="flex flex-row gap-2 w-full justify-center items-center text-center text-stone-200 bg-stone-800 rounded-l-full px-3">
                <p className='h-full'>{post.likes}</p>
                <IoIosHeart/>
            </div>
        ):(
            (
                <div className="flex flex-row gap-2 w-full justify-center items-center text-stone-200 bg-stone-800 rounded-r-full px-3">
                    <p className='h-full'>{post.dislikes}</p>
                    <FaThumbsDown/>
                </div>
            )
        )
    }</button>
  )
}

export default LikeButton