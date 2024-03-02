import React from 'react'
import PhotoSrc from '../../assets/Photo.png'

function Photo() {
  return (
    <figure className='w-[300px] h-[300px] mt-14 grid place-items-center rounded-full overflow-hidden bg-[--third] shadow-[0px_0px_15px_rgba(60,60,60,.4)]'>
      <img src={PhotoSrc} alt="photo" className='h-[280px] mt-8 object-cover'/>
    </figure>
  )
}

export default Photo