'use client'
import { Category, SPost, SProject } from "fireup/lib/types";
import { useEffect, useState } from "react";

const SearchBar = ({ posts, onSearch }: { posts: SPost[] | SProject[]; onSearch: (filteredPosts: SPost[] | SProject[]) => void  }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({} as Category);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    
    // var filtered = posts.filter((post) => {
    //   // Filter based on selected category
    //   if (selectedCategory && Object.keys(selectedCategory).length > 0) {
    //     return post.categories?.find((category) => category._id === selectedCategory._id);
    //   }



    // });

      // Filter based on search text
      if (searchText) {
        const lowerCaseSearchText = searchText.toLowerCase();
        const filtered = posts.filter((post)=>{
          return post.title.includes(searchText) || post.description.includes(searchText)
        })
        // Perform your filtering logic here based on the search text and post attributes
        // Return true if the post should be included in the filtered list, otherwise false

          console.log(filtered.length,filtered)
          onSearch(filtered);
      }

  }, [selectedCategory, searchText, posts, onSearch]);

  return (
    <div className="flex justify-center w-full my-3">
      <div className="">
        <div className="flex flex-col">
          <div className={`rounded-xl p-6 shadow-lg`}>
            <form className="flex gap-6">
              <div className="relative w-full flex items-center justify-between rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                </svg>
                <input
                  type="name"
                  name="search"
                  className="h-12 w-full cursor-text rounded-md border-none border-none-gray-100 bg-stone-900 py-4 pr-40 pl-12 shadow-sm outline-none  focus:ring-red-700  focus:ring-opacity-50"
                  placeholder="Search by name, type, manufacturer, etc"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>

              <div className="flex gap-6 items-center">
                <div className="flex gap-3 w-[20vw] items-center">
                  <label htmlFor="manufacturer" className="text-sm font-medium text-stone-600">
                    Manufacturer
                  </label>

                  <select
                    id="manufacturer"
                    className="block w-full rounded-md border-none border-none-gray-100 bg-stone-950 px-2 py-2 shadow-sm outline-none focus:border-none-zinc-500 focus:ring focus:ring-zinc-800 focus:ring-opacity-50"
                  >
                    <option>Cadbury</option>
                    <option>Starbucks</option>
                    <option>Hilti</option>
                  </select>
                </div>
                <div className="flex gap-2 w-[20vw] items-center">
                  <label htmlFor="status" className="text-sm font-medium text-stone-600">
                    Status
                  </label>

                  <select
                    id="status"
                    className="block w-full cursor-pointer rounded-md border-none border-none-gray-100 bg-stone-950 px-2 py-2 shadow-sm outline-none focus:border-none-zinc-500 focus:ring focus:ring-zinc-800 focus:ring-opacity-50"
                  >
                    <option>Dispatched Out</option>
                    <option>In Warehouse</option>
                    <option>Being Brought In</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;