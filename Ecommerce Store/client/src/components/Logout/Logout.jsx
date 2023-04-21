import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()
  useEffect(() => {
      localStorage.clear()
      localStorage.setItem('user', "")
        navigate('/login')
    },[navigate])
  return null
}

export default Logout
