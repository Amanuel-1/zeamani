'use server'

import { sanityFetch, client } from "fireup/lib/client"
import { SPost } from "fireup/lib/types"
import { groq } from "next-sanity"


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
