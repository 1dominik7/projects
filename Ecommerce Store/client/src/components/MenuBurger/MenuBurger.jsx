import React from 'react'
import {  Link  as Link1} from 'react-router-dom'
import './MenuBurger.scss'


const MenuBurger = () => {

  return (
            <div className='mobileBurgerOptions'>
            <div className="mobileItem">
            <Link1 className="link" to="/products/2">Woman</Link1>
          </div>
          <div className="mobileItem">
            <Link1 className="link" to="/products/1">Men</Link1>
          </div>
          <div className="mobileItem">
            <Link1 className="link" to="/products/7">Children</Link1>
          </div>
            </div>
          
  )
}

export default MenuBurger
