import React, { useRef, useContext } from 'react'
import { Context } from '../../context/Context'
import { AiOutlineWhatsApp } from 'react-icons/ai'

function Contact() {
    const { status, handleSubmit, handleContactWithWhatsapp } = useContext(Context)

    const form = useRef()

    return (
        <div id='contact' className='relative w-full min-h-screen flex flex-col gap-y-4 p-4 text-center'>
            <h2 className='font-bold text-3xl py-4 text-[--second]'>Contacto</h2>
            <article className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-10 w-full h-full flex flex-col justify-center items-center gap-y-7 text-left">
                <div id='status' className='w-[320px] p-6 rounded-md bg-cyan-500 absolute top-[6em] hidden animate-fade-out'>
                    {status}
                </div>
                <div className='w-[320px]'>
                    <button onClick={handleContactWithWhatsapp} className='w-full bg-[--fourth] p-4 mb-8 rounded-md flex justify-center items-center'>
                        WhatsApp
                        <AiOutlineWhatsApp className='ml-2' size={25} />
                    </button>
                </div>
                <form
                    ref={form}
                    onSubmit={(e) => { handleSubmit(e, form) }} className='flex flex-col gap-4 justify-center items-center w-[320px]'>
                    <input placeholder='Nombre completo' type="text" name="name" id="name" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <input placeholder='Correo elctrónico' type="email" name="email" id="email" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <textarea placeholder='Mensaje' name="message" id="message" className="w-full p-4 h-[150px] min-h-[150px] max-h-[300px] pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none"></textarea>
                    <input id='submitBtn' type="submit" value="Enviar" className="w-[140px] p-4 mt-4 bg-[--fourth] rounded-md transition-all hover:bg-[--fourth-blur] cursor-pointer" />
                </form>
            </article>
            
        </div>

    )
}

export default Contact