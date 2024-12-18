
'use client'


import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "fireup/trpc/react";
import { Tilt } from "react-tilt";
import toast from "react-hot-toast";

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
  // const [project, setProject] = useState<Project>(initialproject); 
  // const [newTag, setNewTag] = useState<string>("");

  // const createproject = api.project.create.useMutation({
  //   onSuccess: () => {
  //     setProject(initialproject);
  //   },
  // });


  // function handleprojectChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
  //   const { name, value } = e.target;
  //   setProject((prevState) => ({ ...prevState, [name]: value }));
  // }

  // function handleTagChange(e: ChangeEvent<HTMLInputElement>): void {
  //   setNewTag(e.target.value);
  // }

  // // function handleTagAdd(e:any): void {
  // //     if(e.key ===" "){
  // //       if (newTag.trim() !== "") {
  // //         setProject((prevState) => ({
  // //           ...prevState,
  // //           tags: [...prevState.tags, newTag.trim()],
  // //         }));
  // //         setNewTag("");
  // //       }
  // //     }
  // // }
  // function handleTagAdd(e: React.KeyboardEvent<HTMLInputElement>): void {
  //   if (e.key === " " && newTag.trim() !== "" && newTag.trim() !== ",") {
  //     setProject((prevState) => ({
  //       ...prevState,
  //       tags: [...prevState.tags, newTag.trim()],
  //     })); 
  //     setNewTag("");
  //   }
  // }
  // function handleTagRemove(tag: string): void {
  //   setProject((prevState) => ({
  //     ...prevState,
  //     tags: prevState.tags.filter((t) => t !== tag),
  //   }));
  // }

  // function handleSubmit(e: FormEvent<HTMLFormElement>): void {
  //   e.preventDefault();
  //   console.log("the data submitted is ", JSON.stringify(project))
  //   createproject.mutate(project);
  //   if(createproject.isSuccess){
  //     toast.success(`yey!! the project is added ${project.title} successfully !!`,{icon:'🎉',style:{background:'rgba(10,2550,20,1)'}})
  //     console.log("yes , project added !!")
  //   }
  //   else if(createproject.isError){
  //     toast.error(`oops! an unable to add the project, ${project.title}`,{icon:'😧',style:{background:'rgba(255,30,10,1)'}})
  //   }
  // }

  return (
  <section className="z-0 container w-full flex justify-center">

   {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-[60%]">
      <label htmlFor="title">title</label>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={project.title}
        onChange={handleprojectChange}
        className="w-full  px-4 py-2 text-stone-50"
      />

      <label htmlFor="slug">slug</label>
      <input
        type="text"
        placeholder="Slug"
        name="slug"
        value={project.slug}
        onChange={handleprojectChange}
        className="w-full  px-4 py-2 text-stone-50"
      />
      <label htmlFor="demoLink">demo Link</label>
      <input
        type="text"
        placeholder="zeamani.vercel.app"
        name="demoLink"
        value={project.demoLink}
        onChange={handleprojectChange}
        className="w-full  px-4 py-2 text-stone-50"
      />
      <label htmlFor="githubLink">Github Link</label>
      <input
        type="text"
        placeholder="github.com/amanuel-1/echoflect"
        name="githubLink"
        value={project.githubLink}
        onChange={handleprojectChange}
        className="w-full  px-4 py-2 text-stone-50"
      />
      <label htmlFor="description">description</label>
      <textarea
        placeholder="Description"
        name="description"
        value={project.description}
        onChange={handleprojectChange}
        className="w-full min-h-[10rem]  px-4 py-2 text-stone-50"
      />
      <label htmlFor="coverImage">cover Image</label>
      <input
        type="text"
        placeholder="Cover Image"
        name="coverImage"
        value={project.coverImage}
        onChange={handleprojectChange}
        className="w-full  px-4 py-2 text-stone-50"
      />
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="source Link"
          value={newTag}
          onKeyDown={handleTagAdd}
          onChange={handleTagChange}
          className="w-full  px-4 py-2 text-stone-50"
        />
        <button
  type="button"
  className=" bg-white/10 px-4 py-2 font-semibold transition hover:bg-white/20"
  disabled={newTag.trim() === ""}
>
  Add
</button>
      </div>
      <div className="">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block text-amber-500  px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            #{tag}
            <button
              type="button"
              onClick={() => handleTagRemove(tag)}
              className="ml-2 px-2 text-red-500 "
            >
              &times;
            </button>
          </span>
        ))}
      </div>
      <button
        type="submit"
        className=" bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createproject.isLoading}
      >
        {createproject.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form> */}

  </section>
    
  );
}

