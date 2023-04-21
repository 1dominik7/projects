import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import './Register.scss'

const initialUser = {email:"", password: "", username: ""}

const Register = () => {

  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false)

  const createAcc = async (e) => {
    e.preventDefault();
    try {
       await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, user)
      if (user) {
        setUser(initialUser)
        navigate('/login')
      }
 
    } catch (error) { 
      console.log(error)
      setFlag(true)
    }
  }
   
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }))
    setFlag(false)
  }
  return (
    <div className='regcontainer'>
    <div className='wrapper'>
        <h1 className='title'>CREATE AN ACCOUNT</h1>
          <form >
          <input
            type="email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
          />
           <input
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleUserChange}
          />
          {flag
            ? 
            (<div className='alertData'><CancelIcon/><span className='wrongData'>Something went wrong, try again. </span></div>)
            :
            ''
        }
              <span className='account'>Already have an account? <Link to='/login'> Sign up</Link></span>
              <span>
                  By creating an account, I consent to the processing of my personal data in accrodance with the <b>PRIVACY POLICY</b>
              </span>
          <button onClick={createAcc}>CREATE</button>
          </form>  
    </div>
</div>
  )
}

export default Register
