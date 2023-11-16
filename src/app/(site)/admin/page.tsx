import { getServerAuthSession } from "fireup/server/auth"
import { redirect } from "next/dist/server/api-utils"
import { GetServerSideProps } from "next"



import React from 'react'
import { CreateProject } from "fireup/app/_components/admin/CreateProject"


const Admin = async() => {
  const session =  await getServerAuthSession()
  const user  = session?.user
  console.log("this is the user from getserversession",session)

  if(user?.email == process.env.ADMIN_EMAIL){
    console.log("here si the email",user?.email,"sdfasdfAS " ,process.env.ADMIN_EMAIL)
    return (
      <div className="min-h-screen">
        <CreateProject/>
      </div>
    )

  }
  else{
    console.log("here si the email",user?.email,"sdfasdfAS " ,process.env.ADMIN_EMAIL)
    return (
      <div className="min-h-screen">Error</div>
    )
  }
}

export default Admin