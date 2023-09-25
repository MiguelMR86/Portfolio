import React from 'react'
import LogoSrc from '../../assets/Logo.svg'

function Logo() {
  return (
      <img width={300} height={300} src={LogoSrc} alt="Logo" className='bg-[--third] rounded-full overflow-hidden shadow-[0px_0px_15px_rgba(141,141,141,.6)] my-[8em] mx-auto md:my-0'/>
  )
}

export default Logo