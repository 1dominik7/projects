import React from 'react'
import './Footer.scss'
import FooterMobile from '../FooterMobile/FooterMobile';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="top">
        <div className="footerMobile">
          <FooterMobile />
          </div> 
        <div className="item">
          <h1>Categories</h1>
          <Link className='link' to='/products/2'>Women</Link>
          <Link className='link' to='/products/1'>Men</Link>
          <Link className='link' to='/products/4'>Shoes</Link>
          <Link className='link' to='/products/5'>Accesories</Link>
          <Link className='link' to='/products/3'>New Season</Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span className='link'>FAQ</span>
          <span className='link'>Pages</span>
        </div>
        <div className="item" id="about">
          <h1>About</h1>
          <span>
          We offer our customers shopping portfolios that combine the best of the online and offline worlds. AllinStore combines the effects, successful operation in the fashion industry with the benefits and opportunities of the online world. Thanks to this, you can update trends without leaving your home. Get inspired with the help of technology at AllinStore.com.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            AllinStore <br/> 
            Customer Service<br/>
            Warsaw Bracka 9<br/>
            00-501<br/>
            Tel: +49 (0) 111 1112 111<br/> <br/>
            Avilable:<br/>
            Monday to Friday from 8 am to 6 pm<br/>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AllinStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
