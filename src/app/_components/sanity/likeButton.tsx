'use client'
import { client, sanityFetch } from 'fireup/lib/client'
import { SPost, SProject } from 'fireup/lib/types'
import { groq } from 'next-sanity'
import { revalidateTag } from 'next/cache'
import { IoIosHeart } from "react-icons/io";
import { FaThumbsDown } from "react-icons/fa";
import React from 'react'
import { Button, ButtonGroup, IconButton } from '@material-tailwind/react'
import { RiEmotionHappyLine } from "react-icons/ri";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";

type LikePostProps  = {
    post :SPost | SProject,
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


const LikeButton = ({post}:LikePostProps) => {
  return (
        <ButtonGroup className=''>
            <Button className='rounded-l-[25px] text-xl md:text-3xl  bg-stone-700 dark:bg-[rgb(14,12,11)] dark:border-l dark:border-y dark:border-stone-900 text-amber-500'><RiEmotionHappyLine/></Button>
            <Button className='text-xl md:text-3xl  bg-stone-700 dark:bg-[rgb(14,12,11)] dark:border-y border-stone-900 text-amber-500'><RiEmotionNormalLine/></Button>
            <Button className='rounded-r-[25px] text-xl md:text-3xl  bg-stone-700 dark:bg-[rgb(14,12,11)] dark:border-y dark:border-r dark:border-stone-900 text-amber-500'><RiEmotionUnhappyLine/></Button>
        </ButtonGroup>
  )
}

export default LikeButton