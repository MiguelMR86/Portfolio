import React, { useRef, useState, useContext } from 'react'
import { Context } from '../../context/Context'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

function Contact() {
    const { status, handleSubmit, handleContactWithWhatsapp } = useContext(Context)

    const form = useRef()

    return (
        <div id='contact' className='relative w-full min-h-screen flex flex-col gap-y-4 p-4 text-center'>
            <h2 className='font-bold text-3xl py-4 text-[--second]'>Contacto</h2>
            <article className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full h-full flex flex-col justify-center items-center gap-y-8 text-left">
                <div id='status' className='w-[320px] p-6 rounded-md bg-cyan-500 absolute top-[5em] hidden animate-fade-out'>
                    {status}
                </div>
                <div className='flex w-[320px] justify-between'>
                    <button onClick={handleContactWithWhatsapp} className=' w-[140px] bg-[#47c756] p-4 rounded-md flex justify-center items-center'>
                        WhatsApp
                        <AiOutlineWhatsApp className='ml-2' size={25}/>
                    </button>
                    <button
                        onClick={() => window.open('mailto:')}
                        className=' w-[140px] bg-[#47c756] p-4 rounded-md flex justify-center items-center'>
                        Gmail
                        <BiLogoGmail className='ml-2' size={25}/>
                    </button>
                </div>
                <form
                    ref={form} 
                    onSubmit={(e) => { handleSubmit(e, form) }} className='flex flex-col gap-4 justify-center items-center w-[320px]'>
                    <input placeholder='Nombre completo' type="text" name="name" id="name" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <input placeholder='Correo elctrónico' type="email" name="email" id="email" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <textarea placeholder='Mensaje' name="message" id="message" className="w-full p-4 h-[150px] min-h-[150px] max-h-[300px] pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none"></textarea>
                    <input id='submitBtn' type="submit" value="Enviar" className="w-[140px] p-4 mt-8 bg-[#47c756] rounded-md" />
                </form>
            </article>
        </div>

    )
}

export default Contact