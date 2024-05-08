import SectionTitle from "../components/SectionTitle"
import Card from "../components/cards/Card"
import { LuGraduationCap } from "react-icons/lu"
import { IoBriefcaseOutline } from "react-icons/io5"
import ExpressLogo from "../assets/icon/express-logo.svg"
import NodeLogo from "../assets/icon/nodejs-logo.svg"
import JavaScriptLogo from "../assets/icon/JavaScript-logo.png"
import PHPLogo from "../assets/icon/PHP-logo.png"
import ReactLogo from "../assets/icon/react-logo.svg"
import TypeScriptLogo from "../assets/icon/typescript-logo.svg"
import TailwindLogo from "../assets/icon/tailwind-logo.png"
import PythonLogo from "../assets/icon/python-logo.svg"
import DjangoLogo from "../assets/icon/django-logo.png"
import HTMLLogo from "../assets/icon/html-logo.png"
import CSSLogo from "../assets/icon/css-logo.png"
import LaravelLogo from "../assets/icon/laravel-logo.png"
import MysqlsqlLogo from "../assets/icon/mysql-logo.svg"
import BootstrapLogo from "../assets/icon/bootstrap-logo.svg"

const Resume = () => {
  const width = "w-full max-w-[350px] md:max-w-full"
  const height = "h-[calc(100%-152px)] md:h-[calc(100%-270px)] md:max-h-[650px]"

  return (
    <div
      className={`w-full bg-primary rounded-xl mt-5 md:mt-0 p-10 ${width} ${height}`}
    >
      <SectionTitle title="Trayectoria" />

      <div className="xl:flex xl:justify-between gap-8 bg-red-00 mt-6 h-[calc(100%-68px)] overflow-y-auto">
        <div className="xl:overflow-y-auto mb-20 xl:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <LuGraduationCap size={30} color="#0b73e1" />
            <h2 className="font-semibold text-2xl">Educación</h2>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto">
            <Card
              children={
                <div>
                  <p className="font-semibold text-[16px]">
                    Bachillerato - Ciencias Sociales
                  </p>
                  <p className="font-semibold text-gray-500">2018 - 2020</p>
                  <p className="mb-2 text-gray-500">IES Jose Frugoni Pérez</p>
                </div>
              }
            />

            <Card
              children={
                <>
                  <div>
                    <p className="font-semibold text-[16px]">
                      Ciclo Superior - Desarrollo de Aplicaciones Web
                    </p>
                    <p className="font-semibold text-gray-500">2021 - 2023</p>
                    <p className="mb-2 text-gray-500">IES Ana Luisa Benítez</p>
                  </div>

                  <div className="flex items-center gap-4 overflow-x-auto ">
                    <img
                      src={HTMLLogo}
                      alt="React Logo"
                      title="React Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={CSSLogo}
                      alt="CSS Logo"
                      title="CSS Logo"
                      className="w-9.5 h-9"
                    />
                    <img
                      src={JavaScriptLogo}
                      alt="JavaScript Logo"
                      title="JavaScript Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={PHPLogo}
                      alt="PHP Logo"
                      title="PHP Logo"
                      className="w-9 h-6"
                    />
                    <img
                      src={PythonLogo}
                      alt="Python Logo"
                      title="Python Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={LaravelLogo}
                      alt="Laravel Logo"
                      title="Laravel Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={MysqlsqlLogo}
                      alt="MySQL Logo"
                      title="MySQL Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={BootstrapLogo}
                      alt="Bootstrap Logo"
                      title="Bootstrap Logo"
                      className="w-8 h-8"
                    />
                  </div>
                </>
              }
            />
          </div>
        </div>

        <hr className="border h-full " />

        <div className="xl:overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <IoBriefcaseOutline size={25} color="#0b73e1" />
            <h2 className="font-semibold text-2xl">Experiencia</h2>
          </div>
          <div className="flex flex-col gap-4">
            <Card
              children={
                <>
                  <div>
                    <p className="font-semibold text-[16px]">
                      Strategiczni.pl - Desarrollador Web Front-end
                    </p>
                    <p className="font-semibold text-gray-500">
                      Marzo 2023 - Junio 2023
                    </p>
                    <p className="mb-2 text-gray-500">
                      Prácticas del ciclo superior
                    </p>
                  </div>

                  <div className="flex items-center gap-4 overflow-x-auto ">
                    <img
                      src={NodeLogo}
                      alt="Node.js"
                      title="Node.js Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={JavaScriptLogo}
                      alt="JavaScript Logo"
                      title="JavaScript Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={ExpressLogo}
                      alt="Express Logo"
                      title="Express Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={PHPLogo}
                      alt="PHP Logo"
                      title="PHP Logo"
                      className="w-9 h-6"
                    />
                  </div>
                </>
              }
            />

            <Card
              children={
                <>
                  <div>
                    <p className="font-semibold text-[16px]">
                      Talentus - Desarrollador Web Full Stack
                    </p>
                    <p className="font-semibold text-gray-500">
                      Enero 2024 - Actualidad
                    </p>
                    <p className="mb-2 text-gray-500">
                      Prácticas del ciclo superior
                    </p>
                  </div>

                  <div className="flex items-center gap-4 overflow-x-auto ">
                    <img
                      src={ReactLogo}
                      alt="React Logo"
                      title="React Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={TypeScriptLogo}
                      alt="TypeScript Logo"
                      title="TypeScript Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={TailwindLogo}
                      alt="Tailwind Logo"
                      title="Tailwind Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={PythonLogo}
                      alt="Python Logo"
                      title="Python Logo"
                      className="w-8 h-8"
                    />
                    <img
                      src={DjangoLogo}
                      alt="Django Logo"
                      title="Django Logo"
                      className="w-13 h-8"
                    />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
