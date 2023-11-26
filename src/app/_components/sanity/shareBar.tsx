'use client'
import { SPost } from "fireup/lib/types"
import { getDomain } from "fireup/lib/utils"
import { FaFacebookF, FaLinkedin, FaPinterest, FaTelegram, FaTwitter } from "react-icons/fa"
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton } from "react-share"

type shareBarProps ={
    post:SPost
}
const ShareBar = ({post}:shareBarProps) => {
  return (
    <ul className="social-card  flex flex-row justify-center items-center w-full lg:max-w-fit lg:flex-col gap-5 px-4 py-8 bg-transparent lg:bg-stone-900 rounded-r-[10px] text-stone-100">
        <li className="text-2xl text-center hover:scale-105 hover:text-amber-600 cursor-pointer transition-all duration-700"><FacebookShareButton url={`https://amanapps.vercel.app/${post.slug.current}`} hashtag={post?.categories?.length?post.categories[0]?.title : ""}><FaFacebookF/></FacebookShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-amber-600 cursor-pointer transition-all duration-700"><TwitterShareButton title={post.title} hashtags={post?.categories?.map((categ,ind)=>(categ.title))}  url={`https://amanapps.vercel.app/${post.slug.current}`}><FaTwitter/></TwitterShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-amber-600 cursor-pointer transition-all duration-700"><LinkedinShareButton title={post.title}   url={`https://amanapps.vercel.app/${post.slug.current}`}><FaLinkedin/></LinkedinShareButton></li>
        <li className="text-2xl text-center hover:scale-105 hover:text-amber-600 cursor-pointer transition-all duration-700"><TelegramShareButton title={post.title}   url={`https://amanapps.vercel.app/${post.slug.current}`}><FaTelegram/></TelegramShareButton></li>
    </ul>
  )
}

export default ShareBar