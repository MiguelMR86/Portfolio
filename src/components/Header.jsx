import React from 'react'
import Photo from './others/Photo'
import { AiOutlineDownload } from 'react-icons/ai';
import CV from '../assets/CV-Miguel-Medina.pdf'


function Header() {
  return (
    <header id='home' className='w-full h-[100vh]'>
      <div className='flex h-full flex-col items-center w-full p-4 gap-y-8 md:flex-row-reverse md:gap-x-10'>
        <div className='md:w-2/5 md:mb-16'>
          <Photo />
        </div>
        <div className='flex flex-col items-center text-center gap-4 md:w-3/5 md:mt-10 md:mb-16'>
          <p className='text-4xl '>
          ¡Hola! Soy <span className='font-bold text-[--second]'>Miguel Medina</span>
          </p>
          <h1 className='text-3xl'>Desarrollador Full Stack</h1>
          <p className='text-gray-400'>
            Transformo ideas creativas en código en sólido.
          </p>
          <a href={CV} download="CV-Miguel-Medina.pdf" className='w-[160px] bg-[--fourth] p-4 mt-2 rounded-md flex justify-center items-center hover:bg-[--fourth-blur] transition-all
          '>
              Descargar CV
              <AiOutlineDownload className='ml-2' size={25} />
            </a>
        </div>
      </div>
    </header>
  )
}

export default Header