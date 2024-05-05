import React from "react"
import PropTypes from "prop-types"

function Card(props) {
  const { icon, title, children, className, style } = props
  return (
    <div
      className={` h-[210px] p-4 bg-sky-100 rounded-xl ${className}`}
      style={style}
    >
      <div className="flex items-center gap-4">
        {icon}
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="flex flex-col w-full">{children}</div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Card
