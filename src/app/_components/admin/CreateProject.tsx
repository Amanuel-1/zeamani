
'use client'


import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "fireup/trpc/react";
import { Tilt } from "react-tilt";

interface Post {
  title: string;
  description: string;
  slug: string;
  content: string;
  coverImage: string;
  tags: string[];
  authorId: string;
}

const initialPost: Post = {
  title: "",
  description: "",
  slug: "",
  content: "",
  coverImage: "",
  tags: [],
  authorId: "",
};

export function CreateProject() {
  const [post, setPost] = useState<Post>(initialPost); 
  const [newTag, setNewTag] = useState<string>("");

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      setPost(initialPost);
    },
  });

  function handlePostChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = e.target;
    setPost((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleTagChange(e: ChangeEvent<HTMLInputElement>): void {
    setNewTag(e.target.value);
  }

  function handleTagAdd(): void {
    if (newTag.trim() !== "") {
      setPost((prevState) => ({
        ...prevState,
        tags: [...prevState.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  }

  function handleTagRemove(tag: string): void {
    setPost((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter((t) => t !== tag),
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    createPost.mutate(post);
  }

  return (
  <section className="z-0 container mx-auto">
   <Tilt options={{
            max: 50,// tilt axis
            speed: 1000, // tilt speed
          }}>
       <div className="my-24 w-full h-[20rem] py-24 bg-gradient-to-tr from-stone-700 via-amber-500 to-zinc-600">
          
          <div className="w-full">
            <h1>Tilting Card</h1>
            <p>With CSS only</p>
          </div>
        </div>
   </Tilt>

   <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={post.title}
        onChange={handlePostChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Slug"
        name="slug"
        value={post.slug}
        onChange={handlePostChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <textarea
        placeholder="Description"
        name="description"
        value={post.description}
        onChange={handlePostChange}
        className="w-[20rem] rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Cover Image"
        name="coverImage"
        value={post.coverImage}
        onChange={handlePostChange}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add Tag"
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
        {post.tags.map((tag) => (
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
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>

  </section>
    
  );
}

