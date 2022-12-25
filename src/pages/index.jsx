import { Inter } from '@next/font/google'
import About from 'src/components/about'
import Projects from 'src/components/projects'
import Descripcion from 'src/components/description'

import Layer from '../components/Layer/Index'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layer>
      
      <div className='bg-light h-32 flex'> <div className='h-32'></div></div>

    <About/>
    <Projects/>
    <Descripcion/>

  
    
    </Layer>
  )
}
