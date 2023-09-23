import React, { Fragment, useContext } from 'react'
import { Context } from '../../context/Context'
import Menu from './Menu'

function MenuBtn() {
  const { handleOpenMenu, openMenu } = useContext(Context)
  return (
    <Fragment>
      <div className='fixed bottom-[3%] right-[5%] z-10 w-[60px] h-[60px] grid place-items-center rounded-full'>
        <input type="checkbox" id="checkbox" onClick={handleOpenMenu}/>
        <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
        </label>
      </div>
    </Fragment>
  )
}

export default MenuBtn