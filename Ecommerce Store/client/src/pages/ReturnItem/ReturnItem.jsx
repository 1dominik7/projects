import React from 'react'
import { Link } from 'react-router-dom'
import './ReturnItem.scss'

const ReturnItem = () => {
  return (
    <div className='returnContainer'>
      <div className="returnWrapper">
    <div className='returnDescription'>
      You can return many eligible items sold on AllinStore. If it is not a fit, you have <h2>100 days</h2> to return your unworn items - FREE. 
      </div>
      <div className="returnDetails">
      <span>Need to return an item? Go to</span>
        <Link className='returnLink' to='/orders'>Your Orders</Link>
        </div>
        </div>
      </div>
  )
}

export default ReturnItem
