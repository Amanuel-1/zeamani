import Image from 'next/image';
import React from 'react';
import { SPost } from 'fireup/lib/types';
import { urlForImage } from 'fireup/lib/image';
import Link from 'next/link';
import moment from 'moment';
import { shortener } from 'fireup/lib/utils';

const PostCard = ({ post, className }: { post: SPost; className?: string }) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl bg-transparent backdrop-blur-sm border border-gray-700/10 hover:border-gray-500/20 transition-all duration-500 cursor-pointer hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-gray-600/10`}
    >
      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      {/* Futuristic Accent Line */}
      <div className="absolute top-0 left-0 w-purple[2px] h-full bg-gradient-to-b from-gray-500/50 via-cyan-500/50 to-gray-500/50 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="flex flex-col justify-between p-6 space-y-4 ">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-100 line-clamp-2 tracking-tight">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400/90 line-clamp-3 leading-relaxed">
          {shortener(post.description,300)}
        </p>

        {/* Post Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/20">
          {/* Date */}
          <div className="flex items-center space-x-2">
            <svg 
              className="w-4 h-4 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-xs text-gray-500">
              {moment(post._createdAt).format('MMM DD, YYYY')}
            </span>
          </div>

          {/* Likes */}
          <div className="flex items-center space-x-2">
            <svg 
              className="w-4 h-4 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span className="text-xs text-gray-500">{post.likes}</span>
          </div>
        </div>

        {/* Read More Button */}
        <Link
          href={`/articles/${post.slug.current}`}
          className="inline-flex items-center space-x-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group z-50"
        >
          <span>Read More</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </Link>
      </div>
      
    </div>
  );
};

export default PostCard;