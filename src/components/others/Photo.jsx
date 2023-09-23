import React from 'react'
import PhotoSrc from '../../assets/Photo.png'

function Photo() {
  return (
    <div className='w-[300px] h-[300px] mt-14 grid place-items-center bg-[--third] rounded-full overflow-hidden shadow-[0px_0px_15px_rgba(141,141,141,.6)]'>
        <img src={PhotoSrc} alt="photo" className='h-[280px] mt-8 object-cover'
        />
      </div>
  )
}

export default Photo