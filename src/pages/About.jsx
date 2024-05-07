import React, { useContext } from "react"
import { Context } from "../context/Context"
import SectionTitle from "../components/SectionTitle"
import SectionDescription from "../components/SectionDescription"
import Card from "../components/cards/Card"
import ScrollToButton from "../components/buttons/ScrollToButton"
import { IoIosArrowUp } from "react-icons/io"
import { IoCodeSlash } from "react-icons/io5"
import { TbTournament } from "react-icons/tb"

const About = () => {
  const { scrollSmooth } = useContext(Context)

  const width = "w-full max-w-[350px] md:max-w-full"
  const height = "h-[calc(100%-152px)] md:h-[calc(100%-270px)] md:max-h-[650px]"

  return (
    <div
      id="about-main"
      className={`relative w-full bg-primary rounded-xl mt-5 md:mt-0 p-10 ${width} ${height}`}
    >
      <SectionTitle title="About" />
      <div className="overflow-y-auto  h-[calc(100%-68px)]">
        <SectionDescription description="Soy un Desarrollador Full Stack al que le encanta transformar ideas creativas en código sólido. Como desarrollador, busco crear soluciones escalables que mejoren la experiencia del usuario." />

        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4">What I do?</h2>
          <div className="flex flex-col gap-4 pb-16 xl:flex-row">
            <Card
              title="Full-Stack"
              className={"bg-sky-100/60"}
              icon={<IoCodeSlash size={35} color="#7F4AA6" />}
              children={
                <div>
                  <p className="mb-2">
                    <span className="font-semibold mr-1">Frotnend:</span>
                    Desarrollo de aplicaciones web y móviles, con interfaces
                    atractivas e intuitivas.
                  </p>

                  <p>
                    <span className="font-semibold mr-1">Backend:</span>
                    Desarrollo de servicios web, APIs y bases de datos.
                  </p>
                </div>
              }
            />

            <Card
              title="SEO"
              className={"bg-sky-100/60"}
              icon={<TbTournament size={30} color="#e2c060" />}
              children={
                <div>
                  <p className="mb-2">
                    Optimización de motores de búsqueda para mejorar la
                    visibilidad de los sitios web.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>

      <ScrollToButton
        className="absolute bottom-[1.4em] right-5 p-3 bg-white rounded-lg shadow-default/30 shadow-md md:hidden"
        Icon={<IoIosArrowUp size={24} />}
        onClick={() => scrollSmooth("top")}
      />
    </div>
  )
}

export default About
