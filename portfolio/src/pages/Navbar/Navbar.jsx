import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import './Navbar.scss'

const Navbar = () => {

  const [selected, setSelected] = useState(0)

  const handleClick = (linkNum) => () => {
    setSelected(linkNum);
  };

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false
  } 

  const [theme, setTheme] = useState(getTheme())
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])
  
  theme ? document.body.id="theme-dark" : document.body.id=""

  return (
    <div className="navContainer" >
      <div className='switcher'>
        <input type="checkbox" id="checkbox" className="checkbox" onChange={() => setTheme(!theme)} checked={theme} />
        <label htmlFor="checkbox" className="label">
          <div className="ball"/>  
          <WbSunnyIcon className='sun'/>
          <ModeNightIcon className='moon' />
        </label>
        </div>
      <div className="links">
        <Link className='link' to='/'
          style={{backgroundColor: selected === 1 ? 'wheat' : ""}}
          onClick={handleClick(1)}
        >Home</Link>
        <Link className='link' to='/about'
        style={{backgroundColor: selected === 2 ? 'wheat' : ""}}
        onClick={handleClick(2)}
        >
          About</Link>
        <Link className='link' to='/projects'
        style={{backgroundColor: selected === 3 ? 'wheat' : ""}}
        onClick={handleClick(3)}
        >Projects</Link>
        <Link className='link contact' to='/contact'
        style={{background: selected === 4 ? 'wheat' : ""}}
        onClick={handleClick(4)}
        >Contact</Link>
      </div>
      </div >  
  
  )
}

export default Navbar
