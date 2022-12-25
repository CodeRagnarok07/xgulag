import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className='fixed z-50 top-0 inset-x-0 mt-5 bg-dark text-primary font-extrabold uppercase flex flex-col sm:flex-row justify-center px-5 items-center py-2'>

      <h1 className='text-2xl text-white flex-shrink-0 mb-2'>xgulag</h1>

      <div className='flex justify-around items-center w-full'>

        <a>home</a>
        <a>projects</a>
        <a>contact</a>

      </div>
    </nav>
    <div className='h-5 invisible'></div>
    </>

  )
}
