
import { GuestBook } from '@prisma/client'
import GuestForm from 'fireup/app/_components/guestBook/guestForm'
import GuestsList from 'fireup/app/_components/guestBook/guestsList'
import { api } from 'fireup/trpc/server'
import React from 'react'

const GuestsBook = async() => {
  const guestslist:GuestBook[] = await api.guests.getAll.query()
  return (
    <section className='min-h-screen mt-0 flex flex-col justify-center items-center w-full'>
      <GuestForm/>
      <GuestsList guests={guestslist}/>
    </section>
    
  )
}

export default GuestsBook