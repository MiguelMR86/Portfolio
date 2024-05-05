import React from "react"
import PropTypes from "prop-types"

const SectionTitle = (props) => {
  const { title } = props

  return (
    <div className="flex items-center gap-4 mt-2 mb-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      <hr className="border border-button-focus w-[150px] mt-1.5" />
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
}

export default SectionTitle
