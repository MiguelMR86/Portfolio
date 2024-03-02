import React, { useContext } from "react";
import { Context } from "../context/Context";
import Photo from "./others/Photo";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../assets/CV-Miguel-Medina.pdf";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Header() {
  const { handleContactWithGithub, handleContactWithLinkedin } =
    useContext(Context);

  return (
    <header id="home" className="w-full h-[100vh]">
      <div className="flex h-full flex-col items-center w-full p-4 gap-y-8 md:flex-row-reverse md:gap-x-10">
        <div className="md:w-2/5 md:mb-16">
          <Photo />
        </div>

        <div className="flex flex-col items-center text-center gap-4 md:w-3/5 md:mt-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl">
            ¡Hola! Soy{" "}
            <span className="font-bold text-[--second]">Miguel Medina</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-300">
            Desarrollador Full Stack
          </p>
          <p className="text-gray-500">
            Transformo ideas creativas en código en sólido
          </p>
          <div>
            <a
              href={CV}
              download="CV-Miguel-Medina.pdf"
              className="w-full bg-[--fourth] p-4 mt-2 rounded-md flex justify-center items-center hover:bg-[--fourth-blur] transition-all"
            >
              <p>Descargar CV</p>
              <AiOutlineDownload className="ml-2" size={25} />
            </a>
            <ul className="w-full flex justify-center items-center gap-4 mt-4">
              <li>
                <button
                  onClick={handleContactWithGithub}
                  className="w-[140px] bg-[#adbac7] p-4 rounded-md flex justify-center items-center transition-all hover:bg-[#798086]"
                >
                  GitHub
                  <AiFillGithub className="ml-2" size={25} />
                </button>
              </li>
              <li>
                <button
                  onClick={handleContactWithLinkedin}
                  className="w-[140px] bg-[#0a66c2] p-4 rounded-md flex justify-center items-center transition-all hover:bg-[#03478b]"
                >
                  Linkedin
                  <AiFillLinkedin className="ml-2" size={25} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
