import React, { Fragment, useContext } from 'react'
import { Context } from '../context/Context'
import MenuBtn from './others/MenuBtn'
import Logo from '../assets/Logo.svg'
import Menu from './others/Menu'

function Header() {
  const { openMenu } = useContext(Context)
  return (
    <Fragment>
      <nav className='relative z-10 w-full h-[10vh] bg-[--first] flex justify-between items-center px-4'>
        <div className='flex items-center'>
          <img src={Logo} alt="logo" className='w-[80px] absolute left-0' />
          <h1 className='text-white text-3xl ml-[1.4em]'>iguel Medina</h1>
        </div>
        <MenuBtn />
      </nav>
      <div className={`absolute top-[10%] z-0 left-0 bg-[--first] text-white w-full transition-all duration-300 ease-in-out border-b-4 border-[--second] 
          ${openMenu ? 'translate-y-0' : '-translate-y-[93%]'}
        `}>
        <Menu />
      </div>
    </Fragment>
  )
}

export default Header