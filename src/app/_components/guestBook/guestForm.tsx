
"use client"

  // import { ChangeEvent, FormEvent, useRef, useState } from 'react';
  import { motion, AnimatePresence, useScroll } from 'framer-motion';
  import Image from 'next/image'
  import { FaMap } from "react-icons/fa";
  import { useRouter } from "next/router";
  import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
  import { api } from "fireup/trpc/react";
  import { Tilt } from "react-tilt";
  import toast from "react-hot-toast";
  import { Images } from 'fireup/app/resources';

  
  interface Guestbook {
    guestName:string,
    avatar:string,
    profileUrl:string,
    country:string,
    content:string
  }
  
  const initialSignature: Guestbook = {
    guestName:"anonymous",
    avatar:"",
    profileUrl:"",
    country:"",
    content:""
  
  };
  
  export default function GuestForm() {
    const [isOpen, setIsOpen] = useState(false);
    const ref  = useRef<HTMLDivElement>(null)
    const toggleAccordion = () => {
      setIsOpen((prev) => !prev);
    };
    const [guestSignature, setGuestSignature] = useState<Guestbook>(initialSignature); 
    const [newTag, setNewTag] = useState<string>("");
    const[signatures,setSignatures] = useState<Guestbook[]>([])
   

    

 
    
    // console.log("so here are the signed :::::::::",data)

    const createguestSignature = api.guests.create.useMutation({
      onSuccess: () => {
        setGuestSignature(initialSignature);
      },
    });
  
  
    function handleguestSignatureChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
      const { name, value } = e.target;
      setGuestSignature((prevState) => ({ ...prevState, [name]: value }));
    }
  
    function handleTagChange(e: ChangeEvent<HTMLInputElement>): void {
      setNewTag(e.target.value);
    }
  
    // function handleTagAdd(e:any): void {
    //     if(e.key ===" "){
    //       if (newTag.trim() !== "") {
    //         setGuestSignature((prevState) => ({
    //           ...prevState,
    //           tags: [...prevState.tags, newTag.trim()],
    //         }));
    //         setNewTag("");
    //       }
    //     }
    // }
  
  
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      console.log("the data submitted is ", JSON.stringify(guestSignature))
      createguestSignature.mutate(guestSignature);
      if(createguestSignature.isSuccess){
        toast.success(`yey!! the guestSignature is added ${guestSignature.guestName} successfully !!`,{icon:'🎉',style:{background:'rgba(10,2550,20,1)'}})
        console.log("yes , guestSignature added !!")
      }
      else if(createguestSignature.isError){
        toast.error(`oops! an unable to add the guestSignature, ${guestSignature.content}`,{icon:'😧',style:{background:'rgba(255,30,10,1)'}})
      }
    }
  
    return (
      <div className="w-full md:w-[60%] mb-6">
        
            {/* ///////////////////////////////// */}
            <div className="container my-8 rounded-md overflow-hidden">
                <button
                onClick={toggleAccordion}
                className="bg-zinc-900 text-white md:px-4 py-2 rounded-md focus:outline-none w-full"
                >
                How about signing my guestbook?
                </button>
                <AnimatePresence>
                {isOpen && (
                <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden mt-4"
                >
                <form  onSubmit={handleSubmit} className="space-y-4 rounded-lg flex flex-col justify-center">
                {/* Your form fields go here */}
                  <div className="sign-card w-full h-full bg-[rgba(14,12,11,1)]  p-4 ">
                   <div className="flex  w-full flex-col md:flex-row gap-6">
      
                    <div className="name flex flex-col">
                      <label className="text-sm" htmlFor="name">name</label>
                            <input type="text" id='name' name='guestName' className='w-full p-1 md:p-2 rounded-[15px] bg-neutral-950' onChange={handleguestSignatureChange} value={guestSignature.guestName} />
                    </div>
                      <div className="profile flex flex-col w-full">
                        <label className="text-sm" htmlFor="profileUrl">profile url</label>
                          <input type="text" id='profileUrl' name='profileUrl' className='w-full p-1 md:p-2 rounded-[15px] bg-neutral-950' onChange={handleguestSignatureChange} value={guestSignature.profileUrl} />
                      </div>
                   </div>
                     <div className="flex gap-6  flex-col md:flex-row">
                        <div className="flex flex-col">
                            <label className="text-sm" htmlFor="country">country</label>
                            <input type="text" id='country' name='country' className='w-full p-1 md:p-2 rounded-[15px] bg-neutral-950' onChange={handleguestSignatureChange} value={guestSignature.country} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-sm" htmlFor="avatarUrl">avatar url</label>
                            <input type="text" id='avatarUrl' name='avatar' className='w-full p-1 md:p-2 rounded-[15px] bg-neutral-950' onChange={handleguestSignatureChange} value={guestSignature.avatar} />
                        </div>
                      
                     </div>
                      <label className="text-sm" htmlFor="content">content</label>
                      <textarea  id='avatarUrl' name='content' className='w-full p-1 md:p-2 rounded-[15px] focus:border focus:border-stone-800 bg-neutral-950' onChange={handleguestSignatureChange} value={guestSignature.content} />
                  </div>
      
                  <button type='submit' disabled={createguestSignature.isLoading} className='px-6 py-3 bg-stone-950 w-[80%] self-center rounded-md  border border-amber-700'>{createguestSignature.isLoading ? "Signing..." : "Sign"}</button>
               
                {/* Add more form fields as needed */}
                </form>
                </motion.div>
                )}
                </AnimatePresence>
            </div>
      {/* ///////////////////////////////////////// */}
        {/* <div className="signlist flex flex-col gap-6 mt-16 px-3 justify-center self-center items-center">
          {
            [1,2,3,4,5,6].map((num,ind)=>(
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
      
               key={ind} className="relative w-full min-h-[8rem] pt-14 pb-3 px-3 dark:bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] dark:hover:bg-[rgb(12,11,11)] text-stone-900 dark:text-stone-200 cursor-pointer transition-all duration-700">
                <div  className="guestAvatar absolute top-1 left-1 p-2 flex flex-row gap-3 justify-center items-center">
                  <Image src={Images.bolt} alt='' className='h-[40px] w-[40px] rounded-full  border-2 border-stone-400'/>
                  <p className='p-0 m-0 h-full font-bold hover:underline'>Amanuel-1</p>
                  <span>•</span>
                  <small>on January 2nd 2024</small>
                </div>
                <div className="message m-0 p-0">
                  <small>Do you ever look around your home and want to freshen up the interior designs and aesthetics? Follow these simple tips and you can make major improvements to your home that guests will notice! These tips apply to any space - a house, an apartment, or townhome!</small>
                </div>
                <div className="location m-0 w-full px-2 pt-3">
                  <small className='flex gap-4 items-center justify-start'><FaMap/> Ethiopia</small>
                </div>
              </motion.div>
            ))
          }
        </div> */}


      
      </div>
    
    );
  }
  
  
  
  
  


  // <motion.div 
  // initial={{ opacity: 0, y: 20 }}
  // animate={{ opacity: 1, y: 0 }}
  // transition={{ duration: 1, ease: 'easeInOut' }}

  //  key={ind} className="relative w-full min-h-[8rem] pt-14 pb-3 px-3 bg-[rgb(14,12,11)] border border-stone-900 rounded-[18px] hover:bg-[rgb(12,11,11)] cursor-pointer transition-all duration-700">
  //   <div  className="guestAvatar absolute top-1 left-1 p-2 flex flex-row gap-3 justify-center items-center">
  //     <Image src={Images.bolt} alt='' className='h-[40px] w-[40px] rounded-full  border-2 border-stone-400'/>
  //     <p className='p-0 m-0 h-full font-bold hover:underline'>Amanuel-1</p>
  //     <span>•</span>
  //     <small>on January 2nd 2024</small>
  //   </div>
  //   <div className="message m-0 p-0">
  //     <small>Do you ever look around your home and want to freshen up the interior designs and aesthetics? Follow these simple tips and you can make major improvements to your home that guests will notice! These tips apply to any space - a house, an apartment, or townhome!</small>
  //   </div>
  //   <div className="location m-0 w-full px-2 pt-3">
  //     <small className='flex gap-4 items-center justify-start'><FaMap/> Ethiopia</small>
  //   </div>
  // </motion.div>