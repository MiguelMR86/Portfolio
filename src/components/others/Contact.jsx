import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'
function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        window.open('mailto:test@example.com')
    }

    const handleContactWithWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=34645957229')
    }
    return (
        <div id='contact' className='relative w-full                 min-h-screen flex flex-col gap-y-4 p-4 text-center'>
            <h2 className='font-bold text-3xl py-4 text-[--second]'>Contacto</h2>
            <article className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full h-full flex flex-col justify-center items-center gap-y-8 text-left">
                <button onClick={handleContactWithWhatsapp} className='bg-[#47c756] p-4 rounded-md flex justify-center items-center'>
                    WhatsApp
                    <AiOutlineWhatsApp className='ml-2' size={25}/>
                </button>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center w-[320px]'>
                    <input placeholder='Nombre completo' type="text" name="name" id="name" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <input placeholder='Correo elctrónico' type="email" name="email" id="email" className="w-full p-4 pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none" />
                    <textarea placeholder='Mensaje' name="message" id="message" className="w-full p-4 h-[150px] min-h-[150px] max-h-[300px] pl-5 bg-[--third] border-transparent border-2 focus:border-[--second] transition-all duration-300 ease-in-out rounded-md px-2 outline-none"></textarea>
                    <input type="submit" value="Enviar" className="w-[100px] mt-8 text-[--third] h-10 bg-[--second] rounded-md" />
                </form>
            </article>
        </div>

    )
}

export default Contact