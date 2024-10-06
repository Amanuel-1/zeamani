'use client'

import { Me } from "fireup/lib/constants";
import { sendEmail } from "fireup/server/serverActions";
import Link from "next/link";
import { FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



const Contact = () => {

  const handleSend  = async (data:FormData)=>{
    const result  = await sendEmail(data)
    if(result?.error){
      toast.error("Ooapsi!! an error occured while sending the email",{position:'bottom-right'})
    }
    else if(result?.success){
      toast.success("your mail is successfully sent!",{position:'bottom-right'})
    }
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
                <i className="px-1">• contact@zeamani.com</i>
                <i className="px-1 ">• amanuelgaromsa@gmail.com</i>
                <i className="px-1">• amanapps.inc@gmail.com</i>
                
            </div>
            <div className="phones text-sm">
                <i className="px-1">+251 935 046 969</i>
            </div>


            <div className="division justify-self-center w-[90%] px-2 border-t border-stone-400 dark:border-stone-900" />
            

            <ul className="socials flex gap-3 md:gap-6 w-full justify-center md:justify-normal px-2 md:px-4 py-2 md:py-0 text-xl md:text-3xl  ">
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.discord}><FaDiscord/></Link></li>
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.linkedIn}><FaLinkedinIn/></Link></li>
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.telegram}><FaTelegramPlane/></Link></li>
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.youtube}><FaYoutube/></Link></li>
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.facebook}><FaFacebookF/></Link></li>
                <li className="" ><Link className="hover:text-amber-700 cursor-pointer hover:scale-90 transition-all duration-500 text-stone-700 dark:text-stone-500" href={Me.socials.twitter}><FaTwitter/></Link></li>
                
            </ul>

        </div>
        <div className="contact-form col-span-2 h-full">
            <form action={handleSend} className="space-y-2 md:space-y-4 rounded-lg flex flex-col justify-center text-stone-900 dark:text-stone-100  border border-stone-700 dark:border-none  dark:bg-[rgba(14,12,11,1)] p-2  md:p-4 mt-8 md:mt-0 ">
                  {/* Your form fields go here */}
                    <h1 className="text-2xl md:text-3xl text-stone-800 dark:text-stone-300">Get In Touch</h1>
                    <div className="contact-card w-full h-full">
                      <div className="flex  w-full flex-col md:flex-row gap-3 md:gap-6">

                      <div className="name flex flex-col">
                        <label className="text-[12px] py-1 px-1" htmlFor="firstName">First Name</label>
                              <input type="text" id='firstName' name='firstName' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                      </div>
                        <div className="profile flex flex-col w-full">
                          <label className="text-[12px] py-1 px-1" htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' name='lastName' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                        </div>
                      </div>
                      <div className="flex gap-3 md:gap-6  flex-col md:flex-row">      
                          <div className="flex flex-col w-full">
                              <label className="text-[12px] py-1 px-1" htmlFor="email">email</label>
                              <input type="text" id='email' name='email' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                          </div>                        
                      </div>
                      <div className="flex gap-3 md:gap-6  flex-col md:flex-row">      
                          <div className="flex flex-col w-full">
                              <label className="text-[12px] py-1 px-1" htmlFor="phoneNumber">phone number</label>
                              <input type="text" id='phoneNumber' name='phoneNumber' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950'/>
                          </div>                        
                      </div>
                      <div className="flex gap-3 md:gap-6  flex-col md:flex-row">      
                          <div className="flex flex-col w-full">
                              <label className="text-[12px] py-1 px-1" htmlFor="subject">subject</label>
                              <input type="text" id='subject' name='subject' className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                          </div>                        
                      </div>
                        <label className="text-[12px] py-1 px-1" htmlFor="content">content</label>
                        <textarea  id='content' name='content' placeholder="how can I help?" className='w-full p-1 md:p-2 rounded-[15px] bg-transparent border border-stone-800 bg-neutral-950' />
                    </div>

                    <button type='submit'  className='px-6 py-3  text-stone-300  w-[80%] self-center border dark:border-amber-700  dark:hover:bg-[rgb(12,11,11)] rounded-[15px] transition-all duration-500'>submit</button>
                  
                  {/* Add more form fields as needed */}
                  </form>
        </div>
        

    </section>
    
  )
}

export default Contact