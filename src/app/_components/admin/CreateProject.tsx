
'use client'


import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "fireup/trpc/react";
import { Tilt } from "react-tilt";

interface Project {
  title: string;
  description: string;
  slug: string;
  githubLink:string;
  demoLink:string;
  coverImage: string;
  tags: string[];
  categories:string[]
}

const initialproject: Project = {
  title: "",
  description: "",
  slug: "",
  githubLink:"",
  demoLink:"",
  coverImage: "",
  tags: [],
  categories:[]
  

};

export function CreateProject() {
  const [project, setProject] = useState<Project>(initialproject); 
  const [newTag, setNewTag] = useState<string>("");

  const createproject = api.project.create.useMutation({
    onSuccess: () => {
      setProject(initialproject);
    },
  });

  function handleprojectChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setProject((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleTagChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewTag(e.target.value);
  }

  function handleTagAdd(): void {
    if (newTag.trim() !== "") {
      setProject((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  }

  function handleTagRemove(tag: string): void {
    setProject((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((t) => t !== tag),
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    createproject.mutate(project);
  }

  return (
  <section className="z-0 container w-full">

   <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full md:w-[60%]">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={project.title}
        onChange={handleprojectChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Slug"
        name="slug"
        value={project.slug}
        onChange={handleprojectChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="amanapps.vercel.app"
        name="demoLink"
        value={project.slug}
        onChange={handleprojectChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <textarea
        placeholder="Description"
        name="description"
        value={project.description}
        onChange={handleprojectChange}
        className="w-[20rem] rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Cover Image"
        name="coverImage"
        value={project.coverImage}
        onChange={handleprojectChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="source Link"
          value={newTag}
          onChange={handleTagChange}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="button"
          onClick={handleTagAdd}
          className="rounded-full bg-white/10 px-4 py-2 font-semibold transition hover:bg-white/20"
          disabled={newTag.trim() === ""}
        >
          Add
        </button>
      </div>
      <div>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleTagRemove(tag)}
              className="ml-2 text-red-500"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createproject.isLoading}
      >
        {createproject.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>

  </section>
    
  );
}

