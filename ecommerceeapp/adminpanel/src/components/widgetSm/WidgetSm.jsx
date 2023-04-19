import './widgetSm.css'
import {Visibility} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import {userRequest} from '../../requestMethods'


const WidgetSm = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true")
        setUsers(res.data)
      } catch { } 
    }
    getUsers()
  },[])

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New join Members</span>
      <ul className='widgetSmList'>
        {users.map(user =>(
        <li className="widgetSmListItem" key={user._id}>
          <img src={user.img || "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png"} alt="" className='widgetSmImg'/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm