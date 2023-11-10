import type { Image } from 'sanity'
type Base ={
    _id:string,
    _type:string
    _rev:string,
    _updatedAt:string,
    _createdAt:string

}

interface SPost extends Base{
    author:Author;
    body:Block[];
    categories:Category[];
    mainImage:Image;
    slug:Slug;
    title:string;
    description:string;

}


interface Author extends Base {
    bio:Block[];
    name:string;
    image:Image;
    slug:Slug;
}

interface Category extends Base {
    title:string;
    description:string;
}

interface Block {
    _key :string;
    _type:'block';
    children :Span[];
    markDefs:any[];
    style:'normal'|'h1'|'h2'|'h3'|'h4'|'blockquote';
}

interface Span {
    _key:string;
    _type:'span';
    maks:string[];
    text:string;
}

interface Image{
    _type:'image';
    asset:Reference;
}

interface Slug {
    _type:'slug';
    current:string;
}


interface MainImage {
    _type:'image';
    asset:Reference;
}

interface Title {
    _type:'string';
    current:string;
}

interface Reference{
    _ref:string;
    _type:'reference'
}