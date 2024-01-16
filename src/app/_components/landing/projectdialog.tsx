"use client"
import { urlForImage } from 'fireup/lib/image'
import { SProject } from 'fireup/lib/types'
import project from 'fireup/schemas/project'
import React from 'react'
import LikeButton from '../sanity/likeButton'
import PortableTextEditor from '../sanity/portableText'
import ShareBar from '../sanity/shareBar'
import Image from 'next/image'

type projectDialogProps={
    project:SProject
    children:React.ReactNode

}
const ProjectDialog = ({project,children}:projectDialogProps) => {
  return (
//     <>
//         <div className="" onClick={() => {
//         const modalElement = document.getElementById('my_modal_4') as any; // Assert the type as HTMLDivElement
//         if (modalElement) {
//         modalElement.showModal();
//         } else {
//         console.error('Modal element with ID "my_modal_4" not found.'); // Handle the case where the element is not found
//         }
//         }}>
//         {children}
//         </div> 
//         <dialog id="my_modal_4" className="modal backdrop-blur-sm bg-[rgba(20,15,7,0.5)] pointer-events-none">
//   <div className="modal-box w-11/12 max-w-5xl bg-black rounded-[20px] overflow-y-scroll cursor-auto">
// <>

// <section className=' z-20 flex container px-1 md:px-12 lg:px-20 flex-col gap-4  items-center min-h-screen w-full pointer-events-none  cursor-auto'>
//         <div className="image container w-full ">
//             <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
//                 <Image src={urlForImage(project.mainImage).url()} alt={project.title} objectFit="cover" layout="fill" />
//             </div>
//         </div>
//        <div className="pointer-events-auto">
//        <div className="content px-10 flex flex-col gap-4 justify-center w-full ">
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
// <div className="relative lg:fixed  flex top-0 left-0 justify-center lg:justify-start xl:w-[100%] items-center lg:min-h-screen w-full lg:w-[6rem] z-10 pointer-events-none">
//             <ShareBar content={project}/>
// </div>
// </>
//     <div className="modal-action">
//     <form method="dialog" className="modal-backdrop">
//     <button>close</button>
//   </form>
//     </div>
//   </div>
// </dialog>
//     </>
<>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={() => {
  const modal = document.getElementById('my_modal_2');
  if (modal) {
    (modal as HTMLDialogElement).showModal();
  }
}}>open modal</button>

<dialog id="my_modal_2" className="modal z-0">
  <div className="modal-box w-11/12 max-w-5xl bg-zinc-950">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
    
    <section className=' z-20 flex container px-1 md:px-12 lg:px-20 flex-col gap-4  items-center min-h-screen w-full pointer-events-none  cursor-auto'>
    <dialog data-modal-target="modal" className="p-0">
 ...
 <h1 className="p-4">Reset your password</h1>

 <form className="p-4 space-y-4">
   ...
 </form>
</dialog>
        <div className="image container w-full ">
            <div className="imageContainer relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
                <Image src={urlForImage(project.mainImage).url()} alt={project.title} objectFit="cover" layout="fill" />
            </div>
        </div>
       <div className="pointer-events-none">
       <div className="content px-10 flex flex-col gap-4 justify-center w-full pointer-events-auto hidden">
       <h1 className="title w-full  text-center">{project.title + "  "+ project.likes+ " likes"}</h1>
        <div className="authorInfo flex flex-row gap-4 justify-start items-center">
                <div className="authorAvatar relative h-12 w-12 p-3 ">
                    <Image  className="rounded-full border-4 border-neutral-700  cursor-pointer hover:border-stone-900 hover:drop-shadow-xl hover:shadow-amber-500 transition-all" src={urlForImage(project.author.image).url()} alt={project.title} objectFit="cover" layout="fill" />
                </div>
                <div className="authorName font-semibold cursor-pointer text-stone-500 hover:text-stone-50 transition-all ">
                    {project.author.name}
                </div>
        </div>
        <div className="body cursor-not-allowed w-full rounded-[20px] z-50">{project.description}</div>
       
        <PortableTextEditor  body={project.body}/>
       </div>
       </div>
        <LikeButton type='like' post={project}/>
       {/* this is a social media share button  */}
        
      

        {/* this is a social media share button  */}
    
    
</section>
  </div>
  
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</>
  )
}

export default ProjectDialog



