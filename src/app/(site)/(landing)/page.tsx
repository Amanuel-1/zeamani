"use client";

import { ProjectList } from "fireup/app/_components/shared/cards/projectList";
import { client } from "fireup/lib/client";
import { SProject, SPost } from "fireup/lib/types";
import { groq } from "next-sanity";
import Link from "next/link";
import {
  FaCoffee,
  FaFacebookF,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { GiForklift } from "react-icons/gi";
import { useEffect, useState } from "react";
import { ExperienceList } from "fireup/app/_components/shared/cards/experienceList";
import AboutMe from "fireup/app/_components/shared/cards/aboutme";
import PostCard from "fireup/app/_components/shared/cards/PostCard";
import { Me } from "fireup/lib/constants";
import Navbar from "fireup/app/_components/shared/navbar/Navbar";

export default function Home() {
  const [projects, setProjects] = useState<SProject[]>([]);
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
        const fetchedProjects: SProject[] = await client.fetch(projectQuery, {
          next: {
            tags: ["project"],
          },
        });

        const fetchedPosts: SPost[] = await client.fetch(postQuery, {
          next: {
            tags: ["post"],
          },
        });

        setProjects(fetchedProjects);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-y-auto scroll-smooth bg-gradient-to-br from-gray-900 to-black text-white">
      {/* fixeds */}
      <div className="relative z-[100]">
        {/* Social Media Icons */}
        <div className="fixed bottom-4 left-4 flex flex-col gap-3">
          <Link
            href={Me.socials.github}
            className="transition hover:text-blue-500"
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href={Me.socials.linkedIn}
            className="transition hover:text-blue-400"
          >
            <FaLinkedinIn size={18} />
          </Link>
          <Link
            href={Me.socials.twitter}
            className="transition hover:text-blue-300"
          >
            <FaTwitter size={18} />
          </Link>
        </div>

        {/* Timeline Marker */}
        <div className="fixed bottom-4 right-12 rotate-90 text-sm tracking-wide">
          <span>2025 GC</span>
          <div className="ml-2 h-16 border-l-2 border-gray-600"></div>
        </div>

       <Navbar/>

       
      </div>

      {/* Hero Section */}
      <section className="box-border flex h-screen items-center justify-center p-6">
        <div className="flex flex-col gap-0 text-center">
          <p className="w-full px-4 m-0 text-start text-lg font-light tracking-widest text-gray-500">
            I AM
          </p>
          <h1 className="mb-4 mt-0 p-0 text-6xl font-bold tracking-tight text-gray-300 md:text-8xl">
            AMANU-EL
          </h1>
          <div className="flex justify-end">
            <div className="text-sm font-light leading-relaxed text-gray-500 md:text-lg ">
              <p className="w-full p-0 m-0 text-start">AI DEVELOPER</p>
              <p className="w-full p-0 m-0 text-start">BACKEND DEVELOPER</p>
              <p className="w-full p-0 m-0 text-start">FULL STACK ENGINEER</p>
            </div>
          </div>
        </div>
      </section>

      <ExperienceList />

      {/* Projects Section */}
      <section
        id="projects"
        className="relative my-6 mt-[20%] min-h-screen py-10 text-white"
      >
        
        <div className="mb-6 w-full text-center text-xl">
          my recent projects
        </div>
        <ProjectList projects={projects} />
      </section>

      {/* Articles Section */}
      <section
        id="articles"
        className="relative my-6 flex min-h-screen flex-col gap-3 px-24 py-10 text-white sm:px-6"
      >
        <div className="mb-6 w-full px-20 text-center text-xl sm:px-6 sm:text-lg">
          my recent articles
        </div>
        <div className="flex flex-col gap-3 px-6">
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

      <AboutMe />

      {/* Contact Section */}
      <section
        id="contact"
        className="myI-[10%] flex h-screen items-center justify-center p-6"
      >
        <div className="box-border grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div className="mb-8 flex flex-col justify-center md:mb-0">
            <h2 className="mb-6 text-4xl font-bold">CONTACT</h2>
            <p className="mb-6 text-gray-300">
              If you have any questions or want to work together, feel free to
              contact me.
            </p>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold">Address</p>
                <p>German St, Addis Ababa, Ethiopia </p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+250-935-046-969</p>
              </div>
              <div>
                <p className="font-semibold">E-mail</p>
                <p>amanuelgaromsa@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-gray-800/50 p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Get in touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded border border-gray-900/50 bg-gray-950/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-800/50"
              />
              <input
                type="text"
                placeholder="Your phone"
                className="w-full rounded border border-gray-900/50 bg-gray-950/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-800/50"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded border border-gray-900/50 bg-gray-950/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-800/50"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded border border-gray-900/50 bg-gray-950/5 p-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-800/50"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded bg-gray-600 px-6 py-3 font-bold text-white hover:bg-gray-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
