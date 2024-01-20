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
    <div className="flex flex-wrap gap-4 px-0 w-full justify-center py-10 items-center transition-all duration-500">
    {
      filteredPosts.length>0? (filteredPosts.map((post)=>(
        <PostCard className='h-[15rem] w-[30rem]' key={post._id} post={post} />
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