import PersonalData from "./pages/PersonalData"
import About from "./pages/About"
import Menu from "./components/Menu"
import Resume from "./pages/Resume"
import { Context } from "./context/Context"
import { useContext } from "react"

function App() {
  const { currentSection } = useContext(Context)

  return (
    <div className="w-full min-h-screen relative md:flex md:justify-center">
      {(currentSection === "About" || !currentSection) && (
        <>
          <div className="md:w-fit h-screen flex justify-center md:items-center pt-5 px-5">
            <PersonalData />
          </div>
          <div className="md:w-2/4 h-screen flex justify-center md:items-center pt-5 px-5">
            <About />
          </div>
        </>
      )}
      {currentSection === "Resume" && (
        <div className="md:w-2/4 h-screen flex justify-center md:items-center pt-5 px-5">
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
