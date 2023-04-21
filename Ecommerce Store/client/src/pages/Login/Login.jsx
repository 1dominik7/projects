import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { storeUser } from '../../redux/store'
import CancelIcon from '@mui/icons-material/Cancel';
import './Login.scss'
import makeRequest from '../../makeRequest';

const initialUser = {password:"", identifier:""}

const Login = () => {

  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }))
    setFlag(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:1337/api/auth/local', user);
      if (data.jwt) {
        storeUser(data) 
        setUser(initialUser)
        navigate('/')
        window.location.reload();
      }
    }
    catch (error) {
      console.log(error)
      setFlag(true)
    }
  }

  return (
    <div className='container' >
        <div className='wrapper'>
          <h1 className='title'>SIGN UP</h1>
          <form>
            <input
              placeholder="username"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
          />
          {flag ?
           (<div className='alertData'><CancelIcon/><span className='wrongData'>Check that you have the right email address or password </span></div>)
            : ''
          }
            <input
              placeholder="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            /> 
            <button onClick={handleLogin} >LOGIN</button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link to='/register'>CREATE A NEW ACCOUNT</Link>
          </form>  
        </div>
    </div >
  )
}

export default Login
