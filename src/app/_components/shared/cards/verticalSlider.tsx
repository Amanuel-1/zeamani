import { Project } from "@prisma/client"
import { SProject } from "fireup/lib/types"
import * as React from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import { GiForklift } from "react-icons/gi"




export function ProjectList({projects}:{projects:SProject[]}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid gap-8">
        {projects.map((project, ind) => (
          <div
            key={ind}
            className="p-6 border border-gray-800/50 rounded-lg transition-all duration-200 hover:border-gray-700/50"
          >
            <h2 className="text-xl font-medium mb-3">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.description}</p>

            <div className="flex gap-3 mb-4">
              <FaGithub className="w-5 h-5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" />
              <GiForklift className="w-5 h-5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" />
              <FaLink className="w-5 h-5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer" />
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {project.techStacks.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-700 border border-gray-700/50 rounded-full hover:border-gray-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}