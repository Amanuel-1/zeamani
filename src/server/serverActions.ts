'use server'

import { sanityFetch, client } from "fireup/lib/client"
import { SPost } from "fireup/lib/types"
import { groq } from "next-sanity"
import toast from "react-hot-toast"
import { Resend } from "resend"


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
    const resend = new Resend(process.env.RESEND_API_KEY!);
    
    const { data, error } = await resend.emails.send({
        from: 'Zeamani <amanuelgaromsa@gmail.com>',
        to: ['amanapps.inc@gmail.com'],
        subject: 'hi there , how is everything rolling',
        text:'this is a test',
      });
    
      if (error) {
        console.log(error)
        return {error:JSON.stringify(error)};
      }
    
      return {success:true};
  
  }
  