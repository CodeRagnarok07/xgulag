import { Inter } from '@next/font/google'
import About from 'src/components/about'
import Projects from 'src/components/projects'

import Layer from '../components/Layer/Index'


import Skills from 'src/components/skills'
import Nocode from 'src/components/nocode'
import Tools from 'src/components/tools'
import Contact from 'src/components/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layer>

      {/* <div className='bg-light h-32 flex'> <div className='h-32'></div></div> */}

      <div className="grid lg:grid-cols-3 mx-auto w-full">

        <About />
        <Contact />
        <Skills />
        <Projects />
        <Nocode />
        <Tools />
      </div>



    </Layer>
  )
}
