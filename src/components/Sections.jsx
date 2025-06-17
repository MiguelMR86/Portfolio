import { Context } from "../context/Context"
import { useContext } from "react"
import PersonalData from "../pages/PersonalData"
import About from "../pages/About"
import Resume from "../pages/Resume"
import Projects from "../pages/Projects"

const Sections = () => {
  const { currentSection } = useContext(Context)
  return (
    <>
      {(currentSection === "About" || !currentSection) && (
        <>
          <div className="md:hidden md:w-fit h-screen flex justify-center md:items-center">
            <PersonalData />
          </div>
          <div className="md:w-3/6 h-screen flex justify-center md:items-center">
            <About />
          </div>
        </>
      )}
      {currentSection === "Resume" && (
        <div className="md:w-3/6 h-screen flex justify-center md:items-center">
          <Resume />
        </div>
      )}
      {currentSection === "Projects" && (
        <div className="md:w-3/6 h-screen flex justify-center md:items-center">
          <Projects />
        </div>
      )}
    </>
  )
}

export default Sections
