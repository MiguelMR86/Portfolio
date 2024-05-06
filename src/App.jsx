import PersonalData from "./pages/PersonalData"
import Menu from "./components/Menu"
import Sections from "./components/Sections"

function App() {
  return (
    <div className="w-full min-h-screen relative md:flex md:justify-center md:gap-8 px-5">
      <div className="hidden md:w-fit h-screen md:flex justify-center items-center">
        <PersonalData />
      </div>

      <Sections />

      <Menu />
    </div>
  )
}

export default App
