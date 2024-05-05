import MenuSections from "./sections/MenuSections"
import PropTypes from "prop-types"

function Menu(props) {
  const { className } = props
  return (
    <div
      className={`${className} bg-primary flex gap-4 justify-between px-4 items-center rounded-xl backdrop-blur-md text-white shadow-default`}
    >
      <MenuSections />
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
}

export default Menu
