import React from 'react'

import Bg1 from './bg/bg1'

export default function projects() {
  return (
    <section className='bg-dark    ' >

      <h1 className='text-primary text-[4rem] text-center leading-10 mb-24'>Projectos</h1>

      <div className='flex flex-col gap-20  '>

        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32'><img src="projects/onliners.png" alt="" /></div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32'><img src="projects/kingcord.png" alt="" /></div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-24'><img src="projects/turing.png" alt="" /></div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32'><img src="projects/loickteam.png" alt="" /></div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>

        {/* <div className='flex items-center justify-between w-full'>
          <div className='flex justify-center w-full'><img className='mx-auto' src="projects/wgg-.png" alt="" /></div>

          <div className='font-bold text-primary text-6xl'>2</div>
        </div> */}

      </div>
      <Bg1/>

    </section>
  )
}
