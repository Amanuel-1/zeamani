import { Me } from "fireup/lib/constants";
import React from "react";

// Mock data for the About Me section
const aboutMeData = {
  name: "Amanuel Garomsa",
  title: "AI Developer + Full Stack Engineer",
  description:
    "Passionate about building modern web applications. Experienced in React, Node.js, and Python. I enjoy tackling challenging problems and continuously learning new technologies.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Pytorch",
    "Docker",
    "Git",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "tensorflow",
    "java",
  ],
  socialLinks: {
    github: Me.socials.github,
    linkedin: Me.socials.linkedIn,
    twitter: Me.socials.twitter,
    yebuna: Me.socials.yebuna,
    BuyMeCoffe: Me.socials.buyMeCoffe,
  },
};

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-me my-12 px-4 sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        {/* Name and Title */}
        <h2 className="text-3xl font-semibold text-white">
          {aboutMeData.name}
        </h2>
        <p className="text-center text-lg text-gray-400">{aboutMeData.title}</p>
        <div className="flex w-full justify-center gap-4">
          <button className="rounded-[5px] border-2 border-gray-800/50 px-2 py-1 transition-all duration-700 hover:bg-gray-700/50">
            Resume(ML)
          </button>
          <button className="rounded-[5px] border-2 border-gray-800/50 px-2 py-1 transition-all duration-700 hover:bg-gray-700/50">
            Resume(Fullstack)
          </button>
        </div>
        {/* Description */}
        <p className="mx-auto my-4 max-w-2xl text-center text-gray-300">
          {aboutMeData.description}
        </p>

        {/* Skills Section */}
        <div className="skills mb-8 flex flex-wrap justify-center gap-4">
          {aboutMeData.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-md bg-gray-950/10 px-3 py-1 text-sm text-stone-100"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="social-links flex justify-center gap-6 font-semibold">
          <a
            href={aboutMeData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href={aboutMeData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-200"
          >
            LinkedIn
          </a>
          <a
            href={aboutMeData.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-200"
          >
            Twitter
          </a>
          <a
            href={aboutMeData.socialLinks.yebuna}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-200"
          >
            Yebuna
          </a>
          <a
            href={aboutMeData.socialLinks.BuyMeCoffe}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-200"
          >
            BuyMeCoffe
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
