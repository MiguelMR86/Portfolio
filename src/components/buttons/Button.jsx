import { Context } from "../../context/Context"
import { useContext } from "react"
import PropTypes from "prop-types"

const Button = (props) => {
  const { Icon, section, className, onClick } = props

  return (
    <button
      onClick={onClick}
      className={`${className} flex flex-col items-center justify-center text-default bg-button transition-all duration-300 ease-in-out cursor-pointer`}
    >
      {Icon}
      {section && <p className="text-xs  md:block">{section}</p>}
    </button>
  )
}

Button.propTypes = {
  Icon: PropTypes.element.isRequired,
  section: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
