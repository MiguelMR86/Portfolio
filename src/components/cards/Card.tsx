import React from "react"
import PropTypes from "prop-types"

function Card(props) {
  const { icon, title, children, className, style } = props
  return (
    <div
      className={`bg-sky-100/60 h-[210px] md:h-[185px] lg:h-[185px] xl:h-[170px] p-4 rounded-xl ${className}`}
      style={style}
    >
      {(title || icon) && (
        <>
          <div className="flex items-center gap-4">
            {icon}
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
          </div>
          <hr className="my-2 border-gray-300" />
        </>
      )}

      <div className="flex flex-col justify-between w-full h-full">
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Card
