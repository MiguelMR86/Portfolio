import { useContext } from "react"
import { Context } from "../context/Context"
import menuSections from "./sections/menuSections"
import Button from "./buttons/Button"
import PropTypes from "prop-types"

function Menu(props) {
  const { setCurrentSection } = useContext(Context)
  const { className } = props
  return (
    <div
      className={`${className} bg-primary flex gap-4 justify-between px-4 items-center rounded-xl backdrop-blur-md text-white shadow-default`}
    >
      {menuSections.map((item, index) => (
        <Button
          key={index}
          Icon={item.Icon}
          section={item.section}
          onClick={() => setCurrentSection(item.section)}
          className="w-[60px] h-[60px]  rounded-lg"
        />
      ))}
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
}

export default Menu
