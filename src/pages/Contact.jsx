import React, { useRef, useContext } from "react"
import { Context } from "../context/Context"
import { AiOutlineWhatsApp } from "react-icons/ai"
import SectionTitle from "../components/SectionTitle"

function Contact() {
  const { status, handleSubmit, handleContactWithWhatsapp } =
    useContext(Context)

  const width = "w-full max-w-[350px] md:max-w-full"
  const height = "h-[calc(100%-152px)] md:h-[calc(100%-270px)] md:max-h-[650px]"

  const formRef = useRef()

  return (
    <div
      className={`w-full bg-primary relative rounded-xl mt-5 md:mt-0 p-10 ${width} ${height}`}
    >
      <SectionTitle title="Contact" />
      <div
        id="status"
        className="w-[320px] p-6 rounded-md bg-cyan-500 absolute -top-20 left-1/2 -translate-x-1/2 hidden animate-fade-out"
      >
        {status}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[320px]">
          <button
            onClick={handleContactWithWhatsapp}
            className="w-full bg-[#76e260] p-4 mb-4 rounded-md flex justify-center items-center"
          >
            WhatsApp
            <AiOutlineWhatsApp className="ml-2" size={25} />
          </button>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => {
            handleSubmit(e, formRef)
          }}
          className="flex flex-col gap-4 justify-center items-center w-[320px]"
        >
          <input
            placeholder="Nombre completo"
            type="text"
            name="name"
            id="name"
            className="w-full p-4 pl-5 border-2 transition-all duration-300 ease-in-out rounded-md px-2 outline-none"
          />
          <input
            placeholder="Correo elctrónico"
            type="email"
            name="email"
            id="email"
            className="w-full p-4 pl-5 border-2 transition-all duration-300 ease-in-out rounded-md px-2 outline-none"
          />
          <textarea
            placeholder="Mensaje"
            name="message"
            id="message"
            className="w-full p-4 max-h-[150px] min-h-[150px] pl-5 border-2 transition-all duration-300 ease-in-out rounded-md px-2 outline-none"
          ></textarea>
          <input
            id="submitBtn"
            type="submit"
            value="Enviar"
            className="w-[140px] p-4 mt-4 bg-button-focus text-focus rounded-md transition-all cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
