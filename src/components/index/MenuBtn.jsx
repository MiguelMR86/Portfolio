import React, { Fragment } from 'react'

function MenuBtn() {
  return (
    <Fragment>
      <input type="checkbox" id="checkbox"/>
      <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
      </label>
    </Fragment>
  )
}

export default MenuBtn