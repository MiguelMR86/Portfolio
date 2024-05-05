import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const ScrollToButton = (props) => {
  const { Icon, className, onClick } = props

  return <Button Icon={Icon} className={className} onClick={onClick} />
}

ScrollToButton.propTypes = {
  Icon: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}
export default ScrollToButton
