import { getServerAuthSession } from "fireup/server/auth"
import { redirect } from "next/dist/server/api-utils"
import { GetServerSideProps } from "next"



import React from 'react'
import { CreateProject } from "fireup/app/_components/admin/CreateProject"


const Admin = async() => {

    return (
      <div className="min-h-screen">
        <CreateProject/>
      </div>
    )


}

export default Admin