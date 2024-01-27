'use client'
import { Category, SPost, SProject } from "fireup/lib/types";
import { useEffect, useState } from "react";

const SearchBar = ({ posts, onSearch }: { posts: SPost[] | SProject[]; onSearch: (filteredPosts: SPost[] | SProject[]) => void  }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({} as Category);
  const [searchText, setSearchText] = useState<string>("");
  const [searchCategory,setSearchCategory] = useState<Category>({} as Category)
  const category_map= new Map<Category,number>()

  for (const post of posts) {
    if (post.categories) {
        for (const categ of [...post.categories]) {
            category_map.set(categ, category_map.has(categ) ? (category_map.get(categ) as number) + 1 : 1);
        }
    }
}

  useEffect(() => {
    let result :SPost[]|SProject[]  =  posts
     if(searchCategory.title){
      const filtered= posts.filter((post) => {
        // Filter based on selected category
        if (selectedCategory && Object.keys(selectedCategory).length > 0) {
          return post.categories?.find((category) => category._id === selectedCategory._id);
        }
      });

      result  = filtered
     }

      // Filter based on search text
      if (searchText) {
        const lowerCaseSearchText = searchText.toLowerCase();
         const filtered = result.filter((post)=>{
          return post.title.includes(searchText) || post.description.includes(searchText)
        })
        // Perform your filtering logic here based on the search text and post attributes
        // Return true if the post should be included in the filtered list, otherwise false

          console.log(filtered.length,filtered)
          
          result = filtered
      }

      onSearch(result)


  }, [selectedCategory, searchText, posts, onSearch]);

  return (
    <div className="flex justify-center w-full my-3">
    <div className="w-full px-24">
      <div className="flex flex-col">
        <div className={`rounded-xl p-6 shadow-lg w-ful`}>
          <form className="flex gap-6 justify-between w-full"> {/* Change justify-center to justify-between */}
            <div className="relative w-full flex items-center rounded-md">
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
                className="h-12 w-full md:min-w-[24rem] max-w-[28rem] md: cursor-text rounded-md border-none border-none-gray-100 text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-900 py-4 p-10 shadow-sm outline-none focus:ring-red-700 focus:ring-opacity-50 pl-12 pr-6 md:rounded-[15px]"
                placeholder="Search by title, tag, description, etc"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className="flex gap-6 items-center w-full justify-end"> {/* Move justify-self-end to items-center */}
              <div className="flex gap-3 items-center">
                <label htmlFor="category" className="text-md font-bold text-stone-600">
                  categories
                </label>

                <select
                  id="category"
                  onChange={() => setSearchCategory(searchCategory)}
                  className="block w-full rounded-md border-none border-none-gray-100 bg-stone-100 text-stone-900 dark:text-stone-100 dark:bg-stone-950 px-2 py-2 shadow-sm outline-none focus:border-none-zinc-500 focus:ring focus:ring-zinc-100 dark:focus:ring-zinc-800 focus:ring-opacity-50 md:px-6 md:rounded-[15px]"
                >
                  <option onSelect={(e) => setSearchCategory({} as Category)}>all</option>
                  {
                    [...category_map.keys()].map((categ: Category, ind: number) => (
                      <option className="" key={ind} onSelect={(e) => setSearchCategory(categ)}>
                        <div className="flex flex-row gap-2 w-full px-2 justify-around bg-green-600">
                          <li>{categ.title}</li>
                          <li className="p-1 rounded-3xl bg-stone-700">{category_map.get(categ)}</li>
                        </div>
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="flex gap-2 items-center">
                {/* Add any additional elements here */}
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