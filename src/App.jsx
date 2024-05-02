import Header from "./components/Header"
import Menu from "./components/Menu"
import { Context } from "./context/Context"
import { useContext } from "react"

function App() {
  const { currentSection } = useContext(Context)
  return (
    <div className="w-full min-h-screen p-5 relative flex justify-center">
      {(currentSection === "About" || !currentSection) && (
        <>
          <Header />
        </>
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
