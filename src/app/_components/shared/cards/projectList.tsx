import { urlForImage } from "fireup/lib/image";
import { SProject } from "fireup/lib/types";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { GiForklift } from "react-icons/gi";
import { Experience } from "./listout";

export function ProjectList({ projects }: { projects: SProject[] }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-24">
      <h1 className="text-2xl font-bold mb-6">Side Projects</h1>
      <div className="grid  gap-6">
        {projects.map((project, ind) => (
          // <div
          //   key={ind}
          //   className="flex items-start gap-4 rounded-lg border border-gray-800/50 p-4 transition-all duration-200 hover:border-gray-700/50"
          // >
          //   {/* Image Container */}
          //   <div className="relative h-[70px] w-[70px] overflow-hidden rounded-lg">
          //     <Image
          //       src={urlForImage(project.mainImage).url()}
          //       alt={project.title}
          //       layout="fill"
          //       objectFit="cover"
          //       className="brightness-75 transition-all duration-300 group-hover:brightness-100"
          //     />
          //   </div>

          //   {/* Content Section */}
          //   <div className="flex-1">
          //     <h2 className="text-lg font-medium">{project.title}</h2>
          //     <p className="text-gray-500">a small simplistic description for a particular project</p>
          //     <div className="mt-2 flex gap-3">
          //       <FaGithub className="h-5 w-5 cursor-pointer text-gray-500 transition-colors hover:text-gray-900" />
          //       <GiForklift className="h-5 w-5 cursor-pointer text-gray-500 transition-colors hover:text-gray-900" />
          //       <FaLink className="h-5 w-5 cursor-pointer text-gray-500 transition-colors hover:text-gray-900" />
          //     </div>
          //   </div>
          // </div>
          <Experience data={project} isProject />
        ))}
      </div>
    </div>
  );
}