import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './FooterMobile.scss'
import { Link } from 'react-router-dom';

const FooterMobile = () => {

    const [openCat, setOpenCat] = useState(false)
    const [openLinks, setOpenLinks] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)
    const [openContact, setOpenContact] = useState(false)

  return (
    <div className="mobileTopContainer" >
    { !openCat ?
      <div className="mobileTop" onClick={() => setOpenCat(!openCat)}>
        <h1>Categories</h1>
        <KeyboardArrowDownIcon className='icon'/>
      </div>
      :
      <div className="mobileTopAfter" >
         <div className="mobileTop" onClick={() => setOpenCat(!openCat)}>
      <h1>Categories</h1>
      <KeyboardArrowUpIcon className='icon'/>
      </div>
        <div className="mobileItem">
          <Link className='link' to="/products/2"><span className='link'>Women</span></Link>
          <Link className='link' to="/products/1"><span >Men</span></Link>
          <Link className='link' to="/products/4"><span >Shoes</span></Link>
          <Link className='link' to="/products/5"><span >Accesories</span></Link>
          <Link className='link' to="/products/3"><span >New Season</span></Link>
        </div>
        </div>
    }

   { !openLinks ?
      <div className="mobileTop" onClick={() => setOpenLinks(!openLinks)}>
          <h1>Links</h1>
        <KeyboardArrowDownIcon className='icon'/>
      </div>
      :
      <div className="mobileTopAfter">
         <div className="mobileTop" onClick={() => setOpenLinks(!openLinks)}>
         <h1>Links</h1>
      <KeyboardArrowUpIcon className='icon'/>
      </div>
        <div className="mobileItem">
        <Link className='link' to="/help&faq"><span className='link'>FAQ</span></Link>
        <Link className='link' to="/returnItems"><span className='link'>Return an item</span></Link>
        </div>
        </div>
      }
      
     { !openAbout ?
      <div className="mobileTop" onClick={() => setOpenAbout(!openAbout)}>
          <h1>About</h1>
        <KeyboardArrowDownIcon className='icon'/>
      </div>
      :
      <div className="mobileTopAfter" >
         <div className="mobileTop" onClick={() => setOpenAbout(!openAbout)}>
         <h1>About</h1>
      <KeyboardArrowUpIcon className='icon'/>
      </div>
        <div className="mobileItem">
        <span>
    We offer our customers shopping portfolios that combine the best of the online and offline worlds. AllinStore combines the effects, successful operation in the fashion industry with the benefits and opportunities of the online world. Thanks to this, you can update trends without leaving your home. Get inspired with the help of technology at AllinStore.com.
    </span>
        </div>
      </div>
    }
      { !openContact ?
      <div className="mobileTop" onClick={() => setOpenContact(!openContact)}>
            <h1>Contact</h1>
        <KeyboardArrowDownIcon className='icon'/>
      </div>
      :
      <div className="mobileTopAfter" >
         <div className="mobileTop" onClick={() => setOpenContact(!openContact)}>
         <h1>Contact</h1>
      <KeyboardArrowUpIcon className='icon'/>
      </div>
        <div className="mobileItem">
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
    }
  </div>
  )
}

export default FooterMobile
