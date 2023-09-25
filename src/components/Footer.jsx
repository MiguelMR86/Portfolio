import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Logo from '../assets/Logo.svg'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Footer() {

  const { handleContactWithGithub, handleContactWithLinkedin } = useContext(Context)

  const year = new Date().getFullYear()

  return (
    <footer id='footer' className='bg-[--third] w-full h-[48vh] p-8 sm:h-[41vh] xl:h-[38vh]'>
      <div className='sm:flex md:justify-between'>
        <img src={Logo} alt="Logo" width={100} height={100} />
        <ul className='w-full flex justify-center items-center sm:justify-end flex-wrap gap-8 md:w-[800px]'>
          <li>
            <button onClick={handleContactWithGithub} className='w-[140px] bg-[#adbac7] p-4 rounded-md flex justify-center items-center'>
              GitHub
              <AiFillGithub className='ml-2' size={25} />
            </button>
          </li>
          <li>
            <button onClick={handleContactWithLinkedin} className='w-[140px] bg-[#0a66c2] p-4 rounded-md flex justify-center items-center'>
              Linkedin
              <AiFillLinkedin className='ml-2' size={25} />
            </button>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50"></hr>
      <p className="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 text-center font-normal">© {year} Miguel Ángel Medina Ramírez</p>
    </footer>
  )
}

export default Footer