import Featured from "fireup/app/_components/shared/cards/Featured";
import Newsletter from "fireup/app/_components/shared/cards/Newsletter";
import PostCard from "fireup/app/_components/shared/cards/PostCard";
import PostsList from "fireup/app/_components/shared/contents/postsList";
import { sanityFetch } from "fireup/lib/client";
import { SPost } from "fireup/lib/types";
import { groq } from "next-sanity";

const Articles = async () => {
  const postQuery = groq`*[_type == "post"] | order(_createdAt desc, _updatedAt desc) {
    ...,
    author->,
    categories[]->
  }`;
  const posts: SPost[] = await sanityFetch({ query: postQuery, tags: ['post', 'articles'] });

  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="border-b border-b-gray-900"> 
        <div className="container flex flex-col gap-3 items-center mx-auto px-4 py-8 mt-24">
          <h1 className="text-6xl font-light text-white ">Articles</h1>
          <p className="w-[90%] md:w-[60%] text-center">Partake in this enriching journey of exploration with me, where we delve into diverse topics, uncover fresh perspectives, and ignite curiosity to inspire and inform every step of the way. </p>
        </div>
      </section>
      <section className="">
        <div className="grid grid-cols-3 gap-3 mx-auto px-4 py-8">
          {
            posts.map((post)=>(
              <PostCard key={post._id} post={post} />
            ))
          }
        </div>
      </section>

    </div>
  );
};

export default Articles;
