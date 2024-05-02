import { Context } from "../../context/Context"
import { useContext } from "react"
import PropTypes from "prop-types"

const Button = (props) => {
  const { Icon, iconSize = 23, iconColor, section, className, onClick } = props
  const { currentSection } = useContext(Context)

  const currentSectionStyle =
    currentSection === section
      ? "bg-button-focus text-focus"
      : "hover:bg-button-hover"

  return (
    <button
      onClick={onClick}
      className={`${currentSectionStyle} ${className} flex flex-col items-center justify-center text-default bg-button rounded-xl transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <Icon
        size={iconSize}
        style={{
          color: iconColor,
        }}
      />
      {section && <p className="text-xs  md:block">{section}</p>}
    </button>
  )
}

Button.propTypes = {
  Icon: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  section: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
