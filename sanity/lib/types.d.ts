import { File, Image, Reference } from "sanity";
import { Url } from "url";

type Base = {
  _id: string;
  _type: string;
  _rev: string;
  _updatedAt: string;
  _createdAt: string;
};

interface SPost extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
  views: number;
  audio: File;
  audioUrl: string;
}
interface SGallery extends Base {
  mainImage: Image;
  title: string;
  description: string;
  location: string;
  country: string;
  publishedAt: string;
  capturedAt;
}
interface SProject extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
  views: number;
  githubLink?: string; // GitHub repository URL
  liveLink?: string; // Live deployed project URL
  projectStatus: "active" | "completed" | "in-progress"; // Status of the project
}

interface Author extends Base {
  bio: Block[];
  name: string;
  image: Image;
  slug: Slug;
}

interface Category extends Base {
  title: string;
  description: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Slug {
  _type: "slug";
  current: string;
}
