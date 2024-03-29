import React from 'react'
import Logo from '../assets/Logo.svg'

function Footer() {


  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='bg-[--third] w-full h-[48vh] p-8 sm:h-[41vh] xl:h-[38vh]'>
      <div className='sm:flex md:justify-between'>
        <img src={Logo} alt="Logo" width={100} height={100} />
        
      </div>
      <hr className="my-8 border-blue-gray-50"></hr>
      <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-center font-normal">© {year} Miguel Ángel Medina Ramírez</p>
    </footer>
  )
}

export default Footer