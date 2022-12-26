import React from 'react'

import Bg1 from './bg/bg1'

export default function projects() {
  return (
    <section className='bg-dark    ' >

      <h1 className='text-primary text-[4rem] text-center leading-10 mb-24'>Projectos</h1>

      <div className='flex flex-col gap-20  '>

        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32 relative cursor-pointer group'>
            <img className='group-hover:opacity-10 transition1' src="projects/onliners.png" alt="" />
            <div className='group-hover:opacity-100 opacity-0 text-center absolute inset-0 transition1'>Es la creación de un nuevo ecosistema en torno al movimiento existente en el mundo de la transmisión en vivo y creación de contenido , es una iniciativa creada por y para streamers donde se fomenta el apoyo y el crecimiento entre los mismos mediante un sistema de obtención de puntos por tiempo de visualización en los streams, una vez obtenidos estos puntos podrás publicitarte en la plataforma y garantiza un feedback de visualización inmediato del resto de streamers que quieran obtener puntos para publicar su contenido posteriormente.
            </div>
          </div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>

        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32 relative cursor-pointer group'>
            <img className='group-hover:opacity-10 transition1' src="projects/kingcord.png" alt="" />
            <div className='group-hover:opacity-100 opacity-0 text-center absolute inset-0 transition1'>A través de una sencilla e intuitiva página web podrás adquirir una serie de plantillas diseñadas para todo tipo de estilos a gusto del consumidor, incluyendo banners y normas base, pero eso no es todo, gracias a Kingbot tu servidor estará totalmente gestionado y administrado con las tareas que necesite desempeñar.


            </div>
          </div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32 relative cursor-pointer group'>
            <img className='group-hover:opacity-10 transition1' src="projects/turing.png" alt="" />
            <div className='group-hover:opacity-100 opacity-0 text-center absolute inset-0 transition1'>Es la centralización de diversas inteligencias artificiales en una sola App donde los usuarios pueden interactuar con ellas .
            </div>
          </div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='w-full flex justify-center h-32 relative cursor-pointer group'>
            <img className='group-hover:opacity-10 transition1' src="projects/loickteam.png" alt="" />
            <div className='group-hover:opacity-100 opacity-0 text-center absolute inset-0 transition1'>Es una organizaciónde de Freelancers con mentalidad disruptiva, que vive para aprender cualquier cosa dentro del campo social y tecnológico , que en su tiempo libre se dedica a lanzar proyectos digitales en su mayoría Startups . 
            </div>
          </div>
          <div className='font-extrabold text-primary text-7xl'>1</div>
        </div>
           
      </div>

    </section>
  )
}
