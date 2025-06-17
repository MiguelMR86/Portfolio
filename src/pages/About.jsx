import { useContext } from "react"
import { Context } from "../context/Context"
import SectionTitle from "../components/SectionTitle"
import SectionDescription from "../components/SectionDescription"
import Card from "../components/cards/Card"
import ScrollToButton from "../components/buttons/ScrollToButton"
import { IoIosArrowUp } from "react-icons/io"
import { BiServer } from "react-icons/bi"
import { FaDesktop } from "react-icons/fa"

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
        <SectionDescription description="Desarrollador Full Stack con más de un año de experiencia en el diseño e implementación de aplicaciones web. Me especializo en construir soluciones robustas y escalables que integran una experiencia de usuario fluida con arquitecturas sólidas." />

        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-4">¿A qué me dedico?</h2>
          <div className="flex flex-col gap-4 xl:flex-row flex-wrap justify-center items-center">
            <Card
              title="Frotnend"
              className={"md:h-[210px] xl:h-[210px]"}
              icon={<FaDesktop size={25} color="#7F4AA6" />}
              children={
                <div>
                  <p className="mb-2">
                    Desarrollo de interfaces modernas, responsivas y accesibles
                    para aplicaciones web y móviles, priorizando la experiencia
                    del usuario, el rendimiento y la calidad de desarrollo.
                  </p>
                </div>
              }
            />

            <Card
              title="Backend"
              className={"md:h-[210px] xl:h-[210px]"}
              icon={<BiServer size={30} color="#7F4AA6" />}
              children={
                <div>
                  Desarrollo de APIs robustas, Websockets, servicios escalables
                  y gestión de bases de datos, aplicando buenas prácticas de
                  seguridad y arquitectura.
                </div>
              }
            />

            {/* <Card
              title="SEO"
              className={"md:h-[210px] xl:h-[210px]"}
              icon={<TbTournament size={25} color="#e2c060" />}
              children={
                <div>
                  <p className="mb-2">
                    Optimización de sitios web para motores de búsqueda,
                    mediante la mejora de la visibilidad, el rendimiento y el
                    posicionamiento.
                  </p>
                </div>
              }
            /> */}
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
