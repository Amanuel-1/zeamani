"use client"
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Category, SProject } from 'fireup/lib/types';
import Card from '../shared/cards/card';
import Image from 'next/image'
import { urlForImage } from 'fireup/lib/image';
import { shortener } from 'fireup/lib/utils';
import PortableTextEditor from '../sanity/portableText';

const ProjectDialog = ({ project }: { project: SProject }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className='relative cursor-pointer flex flex-col justify-start items-start align-top h-full group text-sm text-stone-900'>
        <div className="image relative w-full p-2 h-[14rem] md:h-[8rem] lg:h-[12rem] xl:h-[8rem] overflow-hidden rounded-[12px]  md:rounded-[20px] transition-all duration-700 ">
          <Image
            className="hover:scale-105  overflow-hidden bg-inherit"
            src={urlForImage(project.mainImage).url()}
            alt={"Image Alt"}
            objectFit="cover"
            layout="fill"
          />
          <div className="absolute inset-0 backdrop-brightness-[65%] hover:brightness-100 backdrop-contrast-125 group-hover:brightness-100 text-stone-950 dark:text-stone-100"></div>
        </div>

        <div className="title text-md px-2 pt-1 font-bold dark:text-stone-200 dark:group-hover:text-white group-hover:text-stone-600 transition-all duration-700">{project.title}</div>
        <div className="description dark:text-stone-300 py-2 px-2 dark:group-hover:text-white group-hover:text-stone-600 transition-all duration-700">{shortener(project.description, 100)}</div>
        <div className="categories w-full p-3 flex flex-wrap gap-4 text-xs group-hover:text-stone-100  transition-all duration-700">
          {project.categories &&
            project.categories.map((category: Category) => (
              <small key={category._id} className="tags bg-stone-400 dark:bg-stone-900 hover:bg-zinc-500 dark:hover:bg-zinc-950 text-stone-900 dark:text-stone-50 px-2 hover:hue-rotate-15 rounded-[4px]">
                {category.title}
              </small>
            ))}
        </div>
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className=" data-[state=open]:animate-overlayShow fixed inset-0 h-fit rounded-lg overflow-clip z-50 " />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] min-w-[80vw] max-w-[95vw] max-h-[85vh] overflow-y-scroll w-[95vh] bg-zinc-100 dark:bg-zinc-950 md:bg-[rgba(220,209,204,0.73)] dark:md:bg-[rgba(0,0,0,0.78)] backdrop-blur-md  translate-x-[-50%] translate-y-[-50%] rounded-[16px]  border-2 border-stone-400 dark:border-stone-900 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
        <Dialog.Title className="text-mauve12 m-0  w-full text-center pt-10">
              <h1> {project.title}</h1>
         </Dialog.Title>
        <div className="w-full h-full flex flex-col md:px-16">
          <PortableTextEditor body={project.body} />
        </div>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className=" text-stone-800 dark:text-stone-300 border-2 border-stone-500  dark:border-stone-900 hover:bg-stone-500 hover:text-stone-300 dark:hover:bg-stone-900 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none transition-all duration-700">
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

export default ProjectDialog;

// import { urlForImage } from 'fireup/lib/image'
// import { SProject } from 'fireup/lib/types'
// import project from 'fireup/schemas/project'
// import React from 'react'
// import LikeButton from '../sanity/likeButton'
// import PortableTextEditor from '../sanity/portableText'
// import ShareBar from '../sanity/shareBar'
// import Image from 'next/image'

// type projectDialogProps={
//     project:SProject
//     children:React.ReactNode

// }
// const ProjectDialog = ({project,children}:projectDialogProps) => {

  
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

// export default ProjectDialog



