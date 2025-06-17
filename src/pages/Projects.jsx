import SectionTitle from "../components/SectionTitle"
import Card from "../components/cards/Card"
import { useContext } from "react"
import { Context } from "../context/Context"

const Projects = () => {
  const width = "w-full max-w-[350px] md:max-w-full"
  const height = "h-[calc(100%-152px)] md:h-[calc(100%-270px)] md:max-h-[650px]"

  const { projects, projects_coming_soon } = useContext(Context)

  console.log("projects", projects)

  return (
    <div
      className={`w-full bg-primary rounded-xl mt-5 md:mt-0 p-10 ${width} ${height}`}
    >
      <SectionTitle title="Projects" />

      <div className="gap-8 bg-red-00 mt-6 h-[calc(100%-68px)] overflow-y-auto">
        <div className="xl:overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-2xl">Proyectos en desarrollo</h2>
          </div>
        </div>
        <div className="mb-10">
          {projects_coming_soon.map((project) => (
            <>
              <Card
                children={
                  <>
                    <div className="mb-4">
                      <p
                        title="Cooming soon"
                        className="font-semibold text-[16px] text-blue-400"
                      >
                        {project.name}
                      </p>
                      <p className=" text-gray-500">
                        {project.shortDescription}
                      </p>
                    </div>

                    {project.technologies && (
                      <div className="flex flex-wrap items-center gap-4 overflow-x-auto ">
                        {project.technologies.map((technologie) => (
                          <img
                            src={technologie.src}
                            alt={technologie.alt}
                            title={technologie.title}
                            className="w-8 h-8 object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </>
                }
              />
            </>
          ))}
        </div>
        <div className="xl:overflow-y-auto mb-20 xl:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-semibold text-2xl">Proyectos recientes</h2>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto xl:flex-row flex-wrap justify-center items-center">
            {projects.map((project) => (
              <>
                <Card
                  children={
                    <>
                      <div className="mb-4">
                        <a
                          href={project.links.web}
                          target="_blank"
                          className="font-semibold text-[16px] text-blue-400 underline"
                        >
                          {project.name}
                        </a>
                        <p className=" text-gray-500">
                          {project.shortDescription}
                        </p>
                      </div>

                      {project.technologies && (
                        <div className="flex flex-wrap items-center gap-4 overflow-x-auto ">
                          {project.technologies.map((technologie) => (
                            <img
                              src={technologie.src}
                              alt={technologie.alt}
                              title={technologie.title}
                              className="w-8 h-8 object-contain"
                            />
                          ))}
                        </div>
                      )}
                    </>
                  }
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
