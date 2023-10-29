import React from 'react'

const Navbar = () => {
  return (
    <section className='min-w-screen w-full'>
        <nav className="w-full flex gap-4">
            <ul className='flex flex-row gap-4 text-stone-800 font-bold'>
                <li>Sweet Home</li>
                <li>Know Me</li>
                <li>Talk with Me</li>
                <li>Enough about Me</li>
                </ul>
        </nav>
    </section>
  )
}

export default Navbar