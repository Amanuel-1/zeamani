
import { api } from 'fireup/trpc/server'
import React from 'react'

const metadataInput =async () => {
    const data  =await api.post.getAll.query()
  return (
    <div>{data.length}</div>
  )
}

export default metadataInput