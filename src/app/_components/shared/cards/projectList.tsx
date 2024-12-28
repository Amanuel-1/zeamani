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
          <Experience key={ind} data={project} isProject />
        ))}
      </div>
    </div>
  );
}