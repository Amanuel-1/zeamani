"use client"
import { client } from "fireup/lib/client";
import { SPost } from "fireup/lib/types";
import { groq } from "next-sanity";
import Link from "next/link";
import { useState, useEffect } from "react";
import PostCard from "../shared/cards/PostCard";

export function ArticleSection() {

    const [posts, setPosts] = useState<SPost[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const projectQuery = groq`*[_type == "project"] {
          ...,
          author->,
          categories[]->
        }`;
  
        const postQuery = groq`*[_type == "post"]| order(_createdAt desc, _updatedAt desc) {
          ...,
          author->,
          categories[]->
        }`;
  
        try {
          
  
          const fetchedPosts: SPost[] = await client.fetch(postQuery, {
            next: {
              tags: ["post"],
            },
          });
  
        
          setPosts(fetchedPosts);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <>
              {/* Articles Section */}
      <section
        id="articles"
        className="relative my-6 flex min-h-screen flex-col gap-3 md:px-24 py-10 text-white px-2 sm:px-6"
      >
        <div className="mb-6 w-full px-20 text-center text-xl sm:px-6 sm:text-lg">
          my recent articles
        </div>
        <div className="flex flex-col gap-3 px-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
          <Link
            href="/articles"
            className="flex group justify-center items-center space-x-2 text-sm font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300 "
          >
            <span>Read More Articles</span>
            <svg
              className="h-4 w-4 rotate-90 transform transition-transform duration-300 group-hover:translate-y-1"
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
      </section>
      </>
    )
}