import SectionTitle from "../components/SectionTitle"
import Card from "../components/cards/Card"
import { IoCodeSlash } from "react-icons/io5"
import { TbTournament } from "react-icons/tb"
import { LuGraduationCap } from "react-icons/lu"
import { IoBriefcaseOutline } from "react-icons/io5"

const Resume = () => {
  const width = "w-full max-w-[350px] md:max-w-full"
  const height = "max-h-[700px]  md:h-[calc(100vh-240px)] md:max-h-[600px]"

  return (
    <div
      className={`relative w-full bg-primary rounded-xl mt-5 md:mt-0 p-10 ${width} ${height}`}
    >
      <SectionTitle title="Trayectoria" />

      <div className="xl:flex gap-8 mt-6 overflow-y-auto h-[calc(100%-68px)]">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <LuGraduationCap size={30} color="#0b73e1" />
            <h2 className="font-semibold text-2xl">Educación</h2>
          </div>
          <div className="flex flex-col gap-4 mb-16">
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

        <div>
          <div className="flex items-center gap-2 mb-4">
            <IoBriefcaseOutline size={25} color="#0b73e1" />
            <h2 className="font-semibold text-2xl">Experiencia</h2>
          </div>
          <div className="flex flex-col gap-4">
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
    </div>
  )
}

export default Resume
