import React from "react"
import PropTypes from "prop-types"

const SectionDescription = (props) => {
  const { description } = props
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}

SectionDescription.propTypes = {
  description: PropTypes.string,
}

export default SectionDescription
