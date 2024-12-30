"use client"

import { client } from "fireup/lib/client";
import { SProject, SPost } from "fireup/lib/types";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { ProjectList } from "../shared/cards/projectList";

export function ProjectSection(){

    const [projects, setProjects] = useState<SProject[]>([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const projectQuery = groq`*[_type == "project"] {
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
  
        
  
          setProjects(fetchedProjects);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    
    return (

      <section
        id="projects"
        className="relative my-6 mt-[20%] min-h-screen py-10 text-white"
      >
        
        <div className="mb-6 w-full text-center text-xl">
          my recent projects
        </div>
        <ProjectList projects={projects} />
      </section>


    )
}