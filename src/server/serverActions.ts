'use server'

import { sanityFetch, client } from "fireup/lib/client"
import { SPost } from "fireup/lib/types"
import { groq } from "next-sanity"
import toast from "react-hot-toast"
import nodemailer from "nodemailer"


export async function like({slug}:{slug:string}){
    
    const query = groq`*[_type =="post" && slug.current ==$slug][0]`

    try{
        const post:SPost =  await sanityFetch({query:query,params:{slug},tags:["post","articles"]})
        const result =await client.patch(post._id).set({likes:post.likes+1}).commit()
        if(result){
            console.log("yeeey the likes count is updates successfully ",result)
            
        }
        
    }
    catch(e){
        console.log(e)
    }
}


export const sendEmail  =  async (form:FormData)=>{
    "use server"
    const email = process.env.EMAIL!
    const password = process.env.EMAIL_PASS!
    const senderName = `${form.get("firstName")} ${form.get("lastName")}`
    const senderEmail = form.get("email") as string
    const content = form.get("content") as string
    const messageSubject=form.get("subject") as string
      const transposter  = nodemailer.createTransport({

        host:'mail.zeamani.com',
        port:465,
        secure:true,
        auth:{
            user:email,
            pass:password
        }
      })

      const mailOptions ={
        from:`${senderName}<${email}>`,
        to:email,
        subject:messageSubject,
        text:content,
        html:`
            <h1 style="background:transparent;">mail from ${senderEmail}</h1>
            <p>${content}</p>

        
                `
      }


      try{
        const result =await transposter.sendMail(mailOptions)

        return {success:true}
      }
      catch(error){
        console.log(error)
        return {error:true}
      }
    //   if (error) {
    //     console.log(error)
    //     return {error:JSON.stringify(error)};
    //   }
    
    //   return {success:true};
  
  }
  