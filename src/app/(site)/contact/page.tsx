'use client'

import Link from "next/link";
import { FormEvent, ChangeEvent } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleguestSignatureChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section className='grid grid-cols-2 md:grid-cols-4 min-h-screen mt-0 justify-center items-center w-full p-8 md:p-24'>
        <div className="info col-span-2 h-full flex flex-col md:gap-4">
            <h1 className="font-thin mt-10 md:mt-1 md:mb-1 text-stone-800 dark:text-stone-300">Contact Me</h1>
            <p className="md:w-[70%] font-Linkght">
                 Feel free to call, email, or fill out the contact form.
                 Excited to discuss how I can assist you. Looking forward to your message! 😉
            </p>
            <div className="emails flex flex-col text-sm">
                <i className="px-1 ">amanuelgaromsa@gmail.com</i>
                <i className="px-1">zeamani@gmail.com</i>
                <i className="px-1">amanapps.inc@gmail.com</i>
            </div>
            <div className="phones text-sm">
                <i className="px-1">+251 935 046 969</i>
            </div>


            <div className="division justify-self-center w-[90%] px-2 border-t border-stone-400 dark:stroke-neutral-950" />
            

            <ul className="socials flex gap-3 md:gap-6 w-full justify-center md:justify-normal px-2 md:px-4 py-2 md:py-0 text-xl md:text-3xl text-stone-700 dark:text-stone-300 ">
                <Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500" href={""}><FaDiscord/></Link>
                <Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500" href={""}><FaLinkedinIn/></Link>
                <Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500" href={""}><FaTelegramPlane/></Link>
                <Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500" href={""}><FaYoutube/></Link>
                <Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500" href={""}><FaFacebookF/></Link>
                
            </ul>

        </div>
        <div className="contact-form col-span-2 h-full">
            <form  onSubmit={handleSubmit} className="space-y-2 md:space-y-4 rounded-lg flex flex-col justify-center text-stone-900 dark:text-stone-100  border border-stone-700 dark:border-none  dark:bg-[rgba(14,12,11,1)] p-2  md:p-4 mt-8 md:mt-0 ">
                  {/* Your form fields go here */}
                    <h1 className="text-3xl text-stone-800 dark:text-stone-300">Get In Touch</h1>
                    <div className="contact-card w-full h-full">
                      <div className="flex  w-full flex-col md:flex-row gap-3 md:gap-6">

                      <div className="name flex flex-col">
                        <label className="text-[12px] py-1 px-1" htmlFor="name">First Name</label>
                              <input type="text" id='name' name='guestName' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' onChange={handleguestSignatureChange} />
                      </div>
                        <div className="profile flex flex-col w-full">
                          <label className="text-[12px] py-1 px-1" htmlFor="profileUrl">Last Name</label>
                            <input type="text" id='profileUrl' name='profileUrl' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' onChange={handleguestSignatureChange} />
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-6  flex-col md:flex-row">      
                          <div className="flex flex-col w-full">
                              <label className="text-[12px] py-1 px-1" htmlFor="avatarUrl">email</label>
                              <input type="text" id='avatarUrl' name='avatar' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' onChange={handleguestSignatureChange} />
                          </div>                        
                      </div>
                      <div className="flex gap-3 md:gap-6  flex-col md:flex-row">      
                          <div className="flex flex-col w-full">
                              <label className="text-[12px] py-1 px-1" htmlFor="avatarUrl">phone number</label>
                              <input type="text" id='avatarUrl' name='avatar' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' onChange={handleguestSignatureChange} />
                          </div>                        
                      </div>
                        <label className="text-[12px] py-1 px-1" htmlFor="content">content</label>
                        <textarea  id='avatarUrl' name='content' placeholder="how can I help?" className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                    </div>

                    <button type='submit'  className='px-6 py-3 bg-stone-700 text-stone-300 dark:bg-stone-950 w-[80%] self-center border dark:border-amber-700 hover:bg-stone-800 dark:hover:bg-[rgb(12,11,11)] rounded-[15px] transition-all duration-500'>submit</button>
                  
                  {/* Add more form fields as needed */}
                  </form>
        </div>
        

    </section>
    
  )
}

export default Contact