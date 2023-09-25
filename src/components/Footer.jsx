import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Logo from '../assets/Logo.svg'

function Footer() {
  const { handleScroolSmooth } = useContext(Context)
  return (
    <footer id='footer' className='bg-[--third] w-full h-[35vh]  p-8'>
      <img src={Logo} alt="Logo" width={100} height={100} />
      <ul className='flex justify-evenly items-center'>
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
          <a onClick={() => handleScroolSmooth('contact')}>Contacto</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer