"use client";

import { ProjectList } from "fireup/app/_components/shared/cards/verticalSlider";
import { client } from "fireup/lib/client";
import { SProject, SPost } from "fireup/lib/types";
import { groq } from "next-sanity";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { GiForklift } from "react-icons/gi";
import { useEffect, useState } from "react";

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
      {/* Hero Section */}
      <section className="box-border flex h-screen items-center justify-center p-6">
        <div className="flex flex-col gap-0 text-center">
          <p className="w-full px-4 text-start text-lg font-light tracking-widest text-gray-500">
            I AM
          </p>
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-gray-300 md:text-8xl">
            AMANUEL
          </h1>
          <div className="flex justify-end">
            <div className="text-sm font-light leading-relaxed text-gray-500 md:text-lg ">
              <p className="w-full text-start">AI DEVELOPER</p>
              <p className="w-full text-start">BACKEND DEVELOPER</p>
              <p className="w-full text-start">FULL STACK ENGINEER</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="fixed bottom-4 left-4 flex flex-col gap-3">
          <Link href="#" className="transition hover:text-blue-500">
            <FaFacebookF size={18} />
          </Link>
          <Link href="#" className="transition hover:text-blue-400">
            <FaLinkedinIn size={18} />
          </Link>
          <Link href="#" className="transition hover:text-blue-300">
            <FaTwitter size={18} />
          </Link>
        </div>

        {/* Timeline Marker */}
        <div className="fixed bottom-4 right-12 rotate-90 text-sm tracking-wide">
          <span>2025 GC</span>
          <div className="ml-2 h-16 border-l-2 border-gray-600"></div>
        </div>

        {/* Top Right Links */}
        <div className="fixed right-4 top-4 flex gap-6 text-sm">
          <Link href="#projects" className="transition hover:text-gray-400">
            PROJECTS
          </Link>
          <Link href="#contact" className="transition hover:text-gray-400">
            CONNECT
          </Link>
        </div>

        {/* Logo */}
        <div className="fixed left-4 top-4 text-xs font-bold leading-tight">
          <p>AMA</p>
          <p>NUE</p>
          <p>L</p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative my-6 mt-[20%] min-h-screen text-white"
      >
        <div className="mb-6 w-full text-center text-xl">my recent projects</div>
        <ProjectList projects={projects} />
      </section>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold">Address</p>
                <p>Khartoum, Borgoessa ST. 44</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+250-901-101-33</p>
              </div>
              <div>
                <p className="font-semibold">E-mail</p>
                <p>tura@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-gray-800/50 p-6 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">CONTACT FORM</h3>
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

