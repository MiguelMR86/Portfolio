import React from 'react'
import Photo from './others/Photo'
function Header() {
  return (
    <header id='home' className='w-full h-[100vh]'>
      <div className='flex h-full flex-col items-center w-full p-4 gap-y-8 md:flex-row-reverse md:gap-x-10'>
        <div className='md:w-2/5 md:mb-16'>
          <Photo />
        </div>
        <div className='flex flex-col text-center gap-4 md:w-3/5 md:mt-10 md:mb-16'>
          <p className=' text-gray-400'>
          ¡Hola! Soy <span className='font-bold text-[--second]'>Miguel</span>, 
          </p>
          <h1 className='text-3xl'>Desarrollador Full Stack</h1>
          <p className='text-gray-400'>
            Transformo ideas en código, y código en productos.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header