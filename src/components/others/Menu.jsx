import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { BsPerson, BsHouse } from 'react-icons/bs'
import { AiOutlineFolderOpen, AiOutlineMessage } from 'react-icons/ai'

function Menu() {
  
  const { handleScroolSmooth, currentSection } = useContext(Context)
  
  return (
    <ul className='flex w-[300px] justify-evenly items-center p-4 fixed bottom-10 left-[50%] transform translate-x-[-50%] z-10 h-[60px] rounded-full bg-gray-700/50 backdrop-blur-md text-white transition-all duration-300 ease-in-out'>
      <li>
        <a onClick={() => handleScroolSmooth('home')}>
          <BsHouse size={25} className='cursor-pointer text-[--second] hover:scale-125 transition-all duration-300 ease-in-out' />
        </a>
      </li>
      <li>
        <a onClick={() => handleScroolSmooth('about')}>
          <BsPerson size={28} className='cursor-pointer text-[--second] hover:scale-125 transition-all duration-300 ease-in-out' />
        </a>
      </li>
      <li>
        <a onClick={() => handleScroolSmooth('projects')}>
          <AiOutlineFolderOpen size={27} className='cursor-pointer text-[--second] hover:scale-125 transition-all duration-300 ease-in-out' />
        </a>
      </li>
      <li>
        <a onClick={() => handleScroolSmooth('contact')}>
          <AiOutlineMessage size={24} className='cursor-pointer text-[--second] hover:scale-125 transition-all duration-300 ease-in-out' />
        </a>
      </li>
    </ul>
  )
}

export default Menu