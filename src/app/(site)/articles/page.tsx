"use client";
import Featured from "fireup/app/_components/shared/cards/Featured";
import Newsletter from "fireup/app/_components/shared/cards/Newsletter";
import PostCard from "fireup/app/_components/shared/cards/PostCard";
import PostsList from "fireup/app/_components/shared/contents/postsList";
import { sanityFetch } from "fireup/lib/client";
import { SPost } from "fireup/lib/types";
import { groq } from "next-sanity";
import { useState, useEffect } from "react";

const Articles = () => {
  const [posts, setPosts] = useState<SPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const fetchPosts = async () => {
      const postQuery = groq`*[_type == "post"] | order(_createdAt desc, _updatedAt desc) {
        ...,
        author->,
        categories[]->
      }`;
      const fetchedPosts = await sanityFetch({ query: postQuery, tags: ["post", "articles"] });
      setPosts(fetchedPosts as SPost[]);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setPostsPerPage(newWidth < 768 ? 6 : 9);
      setCurrentPage(1); // Reset to the first page when screen size changes
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to determine which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = windowWidth < 640 ? 3 : 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages are less than max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show limited pages with ellipsis
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisiblePages - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="border-b border-b-gray-900">
        <div className="container flex flex-col gap-3 items-center mx-auto px-4 py-8 mt-24">
          <h1 className="text-4xl md:text-6xl font-light text-white">Articles</h1>
          <p className="w-[90%] md:w-[60%] text-center text-sm md:text-base">
            Partake in this enriching journey of exploration with me, where we delve into diverse topics,
            uncover fresh perspectives, and ignite curiosity to inspire and inform every step of the way.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-4 py-8">
          {currentPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 py-8 px-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
        >
          Previous
        </button>

        {getPageNumbers().map((number, index) =>
          number === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2 text-white">
              {number}
            </span>
          ) : (
            <button
              key={number}
              onClick={() => typeof number === "number" && paginate(number)}
              className={`px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md ${
                currentPage === number
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              } transition-colors`}
            >
              {number}
            </button>
          )
        )}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      </div>

      {/* Posts count indicator */}
      <div className="text-center text-sm text-gray-400 pb-8">
        Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length} posts
      </div>
    </div>
  );
};

export default Articles;
