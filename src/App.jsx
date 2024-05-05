import PersonalData from "./pages/PersonalData"
import About from "./pages/About"
import Menu from "./components/Menu"
import Resume from "./pages/Resume"
import { Context } from "./context/Context"
import { useContext } from "react"

function App() {
  const { currentSection, is_mobile } = useContext(Context)

  return (
    <div className="w-full min-h-screen relative md:flex md:justify-center md:gap-8 px-5">
      {!is_mobile() && (
        <div className="md:w-fit h-screen flex justify-center items-center">
          <PersonalData />
        </div>
      )}
      {(currentSection === "About" || !currentSection) && (
        <>
          {is_mobile() && (
            <div className="md:w-fit h-screen flex justify-center md:items-center">
              <PersonalData />
            </div>
          )}
          <div className="md:w-3/5 h-screen flex justify-center md:items-center">
            <About />
          </div>
        </>
      )}
      {currentSection === "Resume" && (
        <div className="md:w-3/5 h-screen flex justify-center md:items-center">
          <Resume />
        </div>
      )}
      <Menu
        className={
          "fixed bottom-5 left-[50%] transform translate-x-[-50%] w-[calc(100%-2.5rem)] max-w-[350px] h-[80px]"
        }
      />
    </div>
  )
}

export default App
