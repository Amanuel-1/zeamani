"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Category, SGallery, SProject } from 'fireup/lib/types';
import Card from '../shared/cards/card';
import Image from 'next/image'
import { urlForImage } from 'fireup/lib/image';
import { shortener } from 'fireup/lib/utils';
import PortableTextEditor from '../sanity/portableText';
import moment from 'moment';
import { FaLocationDot,FaStopwatch } from "react-icons/fa6";

const GalleryDialog = ({ item }: { item: SGallery }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
    <div key={item._id} className="grid gap-4 Image">
              <div className="relative w-full z-0">
              <img
                className="h-auto cursor-pointer hover:brightness-75 max-w-full py-2 rounded-lg object-cover object-center transition-all duration-700 z-0"
                src={urlForImage(item.mainImage).url()}
                alt={'gallery-photo'}
              />
              <ul className="absolute bottom-[8px] left-0 px-2 bg-[rgba(1,2,3,0.5)] backdrop-blur-sm flex justify-around rounded-tr-[15px] z-0">
                  <li className=" text-white text-[10px] font-extrabold">{item.location.toUpperCase().substring(0,3)},{moment(item._createdAt).format("h:mm a")}</li>
              </ul>
              </div>
            </div>
    </Dialog.Trigger>
    <Dialog.Portal >
      <Dialog.Overlay className=" data-[state=open]:animate-overlayShow fixed inset-0 h-fit rounded-lg overflow-clip z-50 " />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] min-w-[80vw] max-w-[95vw] max-h-[85vh] overflow-y-scroll w-[95vh] bg-zinc-100 dark:bg-zinc-950 md:bg-[rgba(220,209,204,0.73)] dark:md:bg-[rgba(0,0,0,0.78)] backdrop-blur-md  translate-x-[-50%] translate-y-[-50%] rounded-[16px]  border-2 border-stone-400 dark:border-stone-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50">
        
            <section className='w-full h-full grid grid-cols-1 md:grid-cols-2 z-50 justify-center items-center'>
                <img
                    className="col-span-1 h-auto cursor-pointer hover:brightness-75 max-w-full py-2 rounded-lg object-cover object-center transition-all duration-700"
                    src={urlForImage(item.mainImage).url()}
                    alt={'gallery-photo'}
                />
               <div className="col-span-1 flex flex-col justify-center items-center w-full h-full  text-stone-900 dark:text-stone-300 py-[10%] px-2 md:px-4 text-justify">
                    <article className="py-4">{
                          item.description
                      }</article>

                      <div className="flex flex-col md:flex-row gap-4  border-t border-stone-500 dark:border-stone-800 text-sm font-extralight italic w-full py-10 ">
                      <div className="flex gap-2 items-center justify-center text-[15px]"><FaStopwatch/>{moment(item.capturedAt).format("dddd MMM yyyy hh:mm a")}</div>
                      <div className="flex gap-2 items-center justify-center text-[15px]"><FaLocationDot/>{item.location}</div>
                      </div>

               </div>
            </section>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className=" text-stone-800 dark:text-stone-300 border-2 border-stone-500  dark:border-stone-900  hover:text-stone-300 dark: focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-700">
              Close
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default GalleryDialog;

// import { urlForImage } from 'fireup/lib/image'
// import { SProject } from 'fireup/lib/types'
// import project from 'fireup/schemas/project'
// import React from 'react'
// import LikeButton from '../sanity/likeButton'
// import PortableTextEditor from '../sanity/portableText'
// import ShareBar from '../sanity/shareBar'
// import Image from 'next/image'

// type GalleryDialogProps={
//     project:SProject
//     children:React.ReactNode

// }
// const GalleryDialog = ({project,children}:GalleryDialogProps) => {

  
//   return (
// //     <>
// //         <div className="" onClick={() => {
// //         const modalElement = document.getElementById('my_modal_4') as any; // Assert the type as HTMLDivElement
// //         if (modalElement) {
// //         modalElement.showModal();
// //         } else {
// //         console.error('Modal element with ID "my_modal_4" not found.'); // Handle the case where the element is not found
// //         }
// //         }}>
// //         {children}
// //         </div> 
// //         <dialog id="my_modal_4" className="modal backdrop-blur-sm bg-[rgba(20,15,7,0.5)] pointer-events-none">
// //   <div className="modal-box w-11/12 max-w-5xl bg-black rounded-[20px] overflow-y-scroll cursor-auto">
// // <>

// // <section className=' z-20 flex container px-1 md:px-12 lg:px-20 flex-col gap-4  items-center min-h-screen w-full pointer-events-none  cursor-auto'>
// //         <div className="image container w-full ">
// //             <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
// //                 <Image src={urlForImage(project.mainImage).url()} alt={project.title} objectFit="cover" layout="fill" />
// //             </div>
// //         </div>
// //        <div className="pointer-events-auto">
// //        <div className="content px-10 flex flex-col gap-4 justify-center w-full ">
// //        <h1 className="title w-full  text-center">{project.title + "  "+ project.likes+ " likes"}</h1>
// //         <div className="authorInfo flex flex-row gap-4 justify-start items-center">
// //                 <div className="authorAvatar relative h-12 w-12 p-3 ">
// //                     <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(project.author.image).url()} alt={project.title} objectFit="cover" layout="fill" />
// //                 </div>
// //                 <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
// //                     {project.author.name}
// //                 </div>
// //         </div>
// //         <div className="body cursor-not-allowed w-full rounded-[20px] z-50">{project.description}</div>
       
// //         <PortableTextEditor  body={project.body}/>
// //        </div>
// //        </div>
// //         <LikeButton type='like' post={project}/>
// //        {/* this is a social media share button  */}
        
      

// //         {/* this is a social media share button  */}
    
    
// // </section>
// // <div className="relative lg:fixed  flex top-0 left-0 justify-center lg:justify-start xl:w-[100%] items-center lg:min-h-screen w-full lg:w-[6rem] z-10 pointer-events-none">
// //             <ShareBar content={project}/>
// // </div>
// // </>
// //     <div className="modal-action">
// //     <form method="dialog" className="modal-backdrop">
// //     <button>close</button>
// //   </form>
// //     </div>
// //   </div>
// // </dialog>
// //     </>
// <>
// {/* Open the modal using document.getElementById('ID').showModal() method */}
// <div className="" onClick={() => {
//   const modal = document.getElementById('my_modal_2');
//   if (modal) {
//     (modal as HTMLDialogElement).showModal();
//   }
// }}>{children}</div>
// <dialog id="my_modal_2" className="modal">
//   <div className="modal-box w-11/12 max-w-5xl h-11/12 bg-zinc-950">
//     <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click outside to close</p>
//     <section className=' z-20 flex container px-1 md:px-12 lg:px-20 flex-col gap-4  items-center min-h-screen w-full pointer-events-none  cursor-auto'>
//         <div className="image container w-full ">
//             <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
//                 <Image src={urlForImage(project.mainImage).url()} alt={project.title} objectFit="cover" layout="fill" />
//             </div>
//         </div>
//        <div className="pointer-events-none">
//        <div className="content px-10 flex flex-col gap-4 justify-center w-full pointer-events-none -z-50">
//        <h1 className="title w-full  text-center">{project.title + "  "+ project.likes+ " likes"}</h1>
//         <div className="authorInfo flex flex-row gap-4 justify-start items-center">
//                 <div className="authorAvatar relative h-12 w-12 p-3 ">
//                     <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(project.author.image).url()} alt={project.title} objectFit="cover" layout="fill" />
//                 </div>
//                 <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
//                     {project.author.name}
//                 </div>
//         </div>
//         <div className="body cursor-not-allowed w-full rounded-[20px] z-50">{project.description}</div>
       
//         <PortableTextEditor  body={project.body}/>
//        </div>
//        </div>
//         <LikeButton type='like' post={project}/>
//        {/* this is a social media share button  */}
        
      

//         {/* this is a social media share button  */}
    
    
// </section>
//   </div>
  
//   <form method="dialog" className="modal-backdrop">
//     <button>close</button>
//   </form>
// </dialog>
// </>
//   )
// }

// export default GalleryDialog



