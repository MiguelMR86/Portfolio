import React from 'react'
import MenuBtn from './MenuBtn'
import Logo from '../../assets/Logo.svg'

function Header() {
  return (
    <nav className='w-full h-[100px] bg-[#2f2f2f] flex justify-between items-center px-4'>
        <div className='flex items-center'>
            <img src={Logo} alt="logo" className='w-[80px] absolute left-0' />
            <h1 className='text-white text-3xl ml-[1.4em]'>iguel Medina</h1>
        </div>
        <MenuBtn/>
    </nav>
  )
}

export default Header