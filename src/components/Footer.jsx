import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Logo from '../assets/Logo.svg'

function Footer() {
  
  const { handleScroolSmooth } = useContext(Context)
  
  const year = new Date().getFullYear()
  
  return (
    <footer id='footer' className='bg-[--third] w-full h-[50vh] p-8 sm:h-[41vh] xl:h-[38vh]'>
      <div className='sm:flex md:justify-between'>
        <img src={Logo} alt="Logo" width={100} height={100} />
        <ul className='w-full flex justify-evenly items-center flex-wrap gap-4 md:w-[800px]'>
          <li>
            <a onClick={() => handleScroolSmooth('home')}>Inicio</a>
          </li>
          <li>
            <a onClick={() => handleScroolSmooth('about')}>Sobre Mí</a>
          </li>
          <li>
            <a onClick={() => handleScroolSmooth('projects')}>Proyetos</a>
          </li>
          <li>
            <a onClick={() => handleScroolSmooth('skills')}>Habilidades</a>
          </li>
          <li>
            <a onClick={() => handleScroolSmooth('contact')}>Contacto</a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50"></hr>
      <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-center font-normal">© {year} Miguel Ángel Medina Ramírez</p>
    </footer>
  )
}

export default Footer