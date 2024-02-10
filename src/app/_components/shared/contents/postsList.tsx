'use client'
import { SPost } from 'fireup/lib/types'
import React, { useState } from 'react'
import PostCard from '../cards/PostCard'
import SearchBar from './SearchBar'
import Image from 'next/image'
import { Images } from 'fireup/app/resources'

const PostsList = ({posts}:{posts:SPost[]}) => {
    const [filteredPosts,setFilteredPosts] =  useState<SPost[]>(posts)
  return (
    <div className="">
        <SearchBar posts={posts} onSearch={setFilteredPosts}/>
    <div className="flex flex-wrap px-24">
    {
      filteredPosts.length>0? (filteredPosts.map((post)=>(
        <PostCard className='h-[12rem] px-4' key={post._id} post={post} />
      ))):(
        <div className="notfound relative flex flex-col gap-2 text-center justify-center items-center">
            <Image src={Images.dataNotFound} alt='notFound' className='h-[5rem] w-[5rem] brightness-75' />
            <h4 className="text-xl text-stone-500 w-full text-center">no results found</h4>
        </div>
      )
    }
  </div>
    </div>
  )
}

export default PostsList