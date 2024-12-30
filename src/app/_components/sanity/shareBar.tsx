'use client'
import { Category } from "@prisma/client"
import { SPost, SProject } from "fireup/lib/types"
import { getDomain } from "fireup/lib/utils"
import { FaFacebookF, FaLinkedin, FaPinterest, FaTelegram, FaTwitter } from "react-icons/fa"
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton } from "react-share"

type shareBarProps ={
    content:SPost | SProject
}
const ShareBar = ({content}:shareBarProps) => {
  return (
    <ul className="social-card  flex flex-row justify-center items-center w-full lg:max-w-fit lg:flex-col gap-5 px-4 py-8 lg rounded-r-[10px]text-stone-100 dark:text-stone-100  pointer-events-auto bg-black/10 rounded-md border border-gray-800/50 list-none">
        <li className="text-2xl text-center hover:scale-105 hover:text-blue-600 cursor-pointer transition-all duration-700"><FacebookShareButton url={`${getDomain()}/articles/${content.slug.current}`} hashtag={content?.categories?.length?content.categories[0]?.title : ""}><FaFacebookF/></FacebookShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-blue-600 cursor-pointer transition-all duration-700"><TwitterShareButton title={content.title} hashtags={content?.categories?.map((categ,ind)=>(categ.title))}  url={`${getDomain()}/articles/${content.slug.current}`}><FaTwitter/></TwitterShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-blue-600 cursor-pointer transition-all duration-700"><LinkedinShareButton title={content.title}   url={`${getDomain()}/articles/${content.slug.current}`}><FaLinkedin/></LinkedinShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-blue-600 cursor-pointer transition-all duration-700"><TelegramShareButton title={content.title}   url={`${getDomain()}/articles/${content.slug.current}`}><FaTelegram/></TelegramShareButton></li>
    </ul>
  )
}

export default ShareBar