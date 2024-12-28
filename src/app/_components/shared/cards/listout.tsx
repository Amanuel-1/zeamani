import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SProject } from "fireup/lib/types";
import { urlForImage } from "fireup/lib/image";

interface ExperienceProps {
  data: SProject | {
    startYear: number | string;
    endYear: number | string;
    organization: string;
    position: string;
    description: string;
  };
  isProject?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ data, isProject = false }) => {
  if (isProject) {
    // Render for project data
    const project = data as SProject;
    return (
      <div className="grid grid-cols-4 gap-1 mb-10">
        {/* Side Section */}
        <div className="col-span-4 sm:col-span-1">
          <p className="text-white opacity-50">{project.projectStatus}</p> {/* Display project status */}
        </div>

        {/* Content Section */}
        <div className="col-span-4 sm:col-span-3">
          {project.mainImage && (
            <img
              src={urlForImage(project.mainImage).url()}
              alt={project.title}
              className="w-14 h-12 mb-4 border-2 border-gray-800/50"
            />
          )}
          <h3 className="flex items-center text-md font-semibold">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 items-center hover:text-blue-400 transition-colors"
              >
                {project.title}
                <FaExternalLinkAlt />
              </a>
            ) : (
              project.title
            )}
          </h3>

          {project.description && (
            <p className="my-2 text-gray-300">{project.description}</p>
          )}
          <div className="categories text-sm w-full p-3 flex flex-wrap gap-4 group-hover:text-stone-100 transition-all duration-700">
            {project.categories &&
              project.categories.map((category) => (
                <small
                  key={category._id}
                  className="tags flex gap-6 rounded-[10px] border border-gray-800/50 bg-black/5 px-2 text-sm text-gray-300 backdrop-blur-sm sm:gap-3"
                >
                  {category.title}
                </small>
              ))}
          </div>

          {/* Links section */}
          <div className="mt-2 flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-gray-500 transition-colors hover:text-gray-900"
              >
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-gray-500 transition-colors hover:text-gray-900"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    // Render for experience data
    const experience = data as {
      startYear: number | string;
      endYear: number | string;
      organization: string;
      position: string;
      description: string;
    };
    return (
      <div className="grid grid-cols-4 gap-1 mb-10">
        {/* Side Section */}
        <div className="col-span-4 sm:col-span-1">
          <p className="text-white opacity-50">{experience.position}</p> {/* Display position as subtitle */}
        </div>

        {/* Content Section */}
        <div className="col-span-4 sm:col-span-3">
          <h3 className="flex items-center text-xl font-semibold text-white">{experience.organization}</h3> {/* Display organization as title */}
          <p className="text-sm text-gray-500">
            {experience.startYear} - {experience.endYear}
          </p>

          {experience.description && (
            <p className="my-2 text-gray-300">{experience.description + experience.organization}</p>
          )}
        </div>
      </div>
    );
  }
};
