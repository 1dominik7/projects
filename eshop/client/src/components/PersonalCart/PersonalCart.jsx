import React from 'react'
import { Link } from 'react-router-dom'
import { userData } from '../../redux/store'
import './PersonalCart.scss'

const PersonalCart = () => {  
  const {username} = userData()
  
  const ReloadPage = () => {
      window.location.reload();
  }
  
  return (
    <div className='cartContainer'>
      <div className="options">
        {username ? (
          <>
        <span>Welcome, {username}</span>
            <div className='option'>
              <Link className="myAccLink" to='/myaccount'>My account</Link>
            </div>
            <div className='option'><Link className="myAccLink" to='/orders'> Orders</Link></div>
            <div className='option'><Link className="myAccLink" to='/returnItems'>Return an item</Link></div>
            <div className='option'><Link className="myAccLink" to='/help&faq'> Help & FAQ</Link></div>
            <hr />
            <div className='option' onClick={ReloadPage}>
              <Link className='optionOut' to='/logout'>Logout</Link>
            </div>
            </>
        )
          :
          (        
            <a href="/login" onClick={ReloadPage}>Login in</a>
        )
        }
        
            </div>
    </div>
  ) 
    
  
}

export default PersonalCart
