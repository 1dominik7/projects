import React, { useEffect, useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import moment from 'moment';
import  './MyAccount.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { userData } from '../../redux/store';


const MyAccount = () => {

 
  const [data, setData] = useState([])
  
  const { jwt } = userData()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/users/me`,{
          headers: {
            Authorization: `Bearer ${jwt}` ,
          }
        })
        setData(res.data)
      } catch (err) {
        console.log(err)
      } 
    }
    fetchData()
  },[])

      return (
        <div className='accContainer'>
          <h1>Your Account</h1>
          <span>Here you can see your account details.</span>
          <div className='accMain'>
            <div className='accInfo'>
              <div className='accIcon'>
                <PersonOutlineOutlinedIcon className='personIcon' />
              </div>
              <div className='accData' >
                <span>Username: {data.username} </span>
                <span>Email: {data.email} </span>
                <span>Account creation date: {moment(data.createdAt).format("DD/MM/YYYY")} </span>
              </div>
               </div>
            <div className='accLinks'>
              <Link className='accLink' to='/orders'>Orders</Link>
              <Link className='accLink' to='/returnItems'>Return an item</Link>
              <Link className='accLink' to='/help&faq'>Help & FAQ</Link>
            </div>
          </div>
          <hr />
        </div>
      )
 
}


export default MyAccount
