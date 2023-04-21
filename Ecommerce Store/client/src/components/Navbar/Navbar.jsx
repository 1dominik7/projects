import React, { useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlinedOutlinedIcon from '@mui/icons-material/PersonOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link as Link1} from 'react-router-dom'
import { Link as Link2} from 'react-scroll'
import './Navbar.scss'
import Cart from '../Cart/Cart'
import { useSelector } from 'react-redux'
import PersonalCart from '../PersonalCart/PersonalCart'
import SearchCart from '../SearchCart/SearchCart'
import MenuIcon from '@mui/icons-material/Menu';
import MenuBurger from '../MenuBurger/MenuBurger'


const Navbar = () => {
  
  const [open, setOpen] = useState(false)
  const [openPers, setOpenPers] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openBurger, setOpenBurger] = useState(false)

  const products = useSelector(state => state.cart.products)
  const favProducts = useSelector(state => state.favorite.favProducts)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en-pl.jpg" alt="" />
            <select name="" id="">
              <option value="EN">EN</option>
              <option value="PL">PL</option>
            </select>
          </div>
          <div className="item">
            <select name="" id="">
              <option value="USD" >USD</option>
              <option value="PLN" >PLN</option>
              <option value="EUR" >EUR</option>
              <option value="GBP" >GBP</option>
            </select>
          </div>
          <div className="item">
            <Link1 className="link" to="/products/2">Woman</Link1>
          </div>
          <div className="item">
            <Link1 className="link" to="/products/1">Men</Link1>
          </div>
          <div className="item">
            <Link1 className="link" to="/products/7">Children</Link1>
          </div>
          <div className='mobileBurger' onClick={() => setTimeout(() => { setOpenBurger(!openBurger) }, 100)} >
              <MenuIcon className='burgerIcon'/>
            </div>
        </div>
        <div className="center">
          <Link1 className="link" to="/">AllinStore</Link1>
        </div>
        <div className="right">
        <div className="item">
          <Link1 className="link" to="/">Homepage</Link1>
          </div>
          <div className="item">
            <Link2 className="link" id="about" to="footer" spy={true} smooth={true} offset={50} duration={500} >About </Link2>
          </div>
          <div className="item">
          <Link2 className="link" id="about" to="footer" spy={true} smooth={true} offset={50} duration={500}>Contact</Link2>
          </div>
          <div className="item" >
            <Link1 className="linkL" to='/login'>Login</Link1>
          </div>
          <div className="icons" >
            <div className="searchCart" onClick={() => setOpenSearch(!openSearch)}>
              <SearchIcon />
           </div>
            <div className="personalCart" onClick={() => setOpenPers(!openPers)}>
              <PersonOutlinedOutlinedIcon />
            </div>
            <Link1 to="/favorite" >
            <div className='cartIcon'>
              <FavoriteBorderOutlinedIcon link="/favorite"/>
              <span>{favProducts.length}</span>
            </div>
            </Link1>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
                <span>{products.length}</span>         
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
      {openPers && <PersonalCart/>}
      {openSearch && <SearchCart/>}
      {openBurger && <MenuBurger/>}
    </div>
  )
}

export default Navbar
