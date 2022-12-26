import React from 'react'

export default function projects() {
  return (
    <section className='bg-dark -mt-32   pt-32' >

      <h1 className='text-primary text-[4rem] text-center leading-10 mb-24'>Projectos</h1>

      <div className='flex flex-col gap-20  '>

        <div className='flex items-center justify-between w-full'>
          <div><img src="projects/kingbot.png" alt="" /></div>
          <div className='font-bold text-primary text-6xl'>1</div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div><img src="projects/wgg.png" alt="" /></div>

          <div className='font-bold text-primary text-6xl'>2</div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div><img src="projects/loickteam.png" alt="" /></div>

          <div className='font-bold text-primary text-6xl'>3</div>
        </div>
      </div>

    </section>
  )
}
