import React from 'react'

export default function Rfc() {
  return (
    <section className='bg-light  py-32' >

      {/* <h1 className='font-extrabold text-[3rem] text-right leading-10 mb-14'>cursos</h1> */}

      {/* 
      <div className='w-auto ml-auto flex items-start justify-around '>
        <div><div className='h-5 w-5 mt-3 ml-2 bg-dark rounded-full'></div></div> 
      </div>
        */}



      <h1 className='text-[4rem] text-center leading-[3.5rem] mb-24'>fuertes habilidades en</h1>
      {/* 
      <div className='w-auto ml-auto flex items-start justify-around '>
        <p className='uppercase font-extrabold text-[3rem]  leading-10 text-right'>fuertes habilidades en </p>
        <div><div className='h-5 w-5 mt-3 ml-2 bg-dark rounded-full'></div></div> 
      </div>
        */}

      <div className='flex flex-col items-center w-full justify-center   gap-16 mt-20 mb-32 '>
        <div className='uppercase font-extrabold text-[5rem] leading-10 '>no code </div>

        <img className='h-32' src="edu/wix.png" alt="" />
        <img className='h-32' src="edu/webflow.png" alt="" />

      </div>



      <p className='uppercase font-extrabold text-[3rem]  leading-10 text-right'>+ de 50 titulos en </p>
      <div className='flex w-full justify-end mb-32 mt-5'><img src="edu/platz.png" alt="" /></div>



    </section>
  )
}
