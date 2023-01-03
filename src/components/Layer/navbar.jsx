import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='fixed z-50 top-0 inset-x-0 mt-5 bg-dark text-primary font-extrabold uppercase flex flex-col sm:flex-row justify-center  items-center py-4  sm:px-24'>

      <h1 className='text-2xl text-white flex-shrink-0 mb-2'>xgulag</h1>

      <div className='flex justify-around sm:justify-start sm:gap-8 sm:mx-20 items-center w-full'>

        <a href='#home'>home</a>
        <a href='#contact'>contact</a>
        <a href='#skills'>skills</a>
        <a href='#projects'>projects</a>
        <a href='#nocode'>nocode</a>
        <a href='#tools'>tools</a>

      </div>
    </nav>
    </>

  )
}
