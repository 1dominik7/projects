import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { userData } from '../../redux/store'
import moment from 'moment';
import './Orders.scss'

const Orders = () => {

  const [data, setData] = useState([])
  const { jwt, username } = userData()

  useEffect(() => {
    const fetchDataOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:1337/api/orders?[filters][username]=${username}`
        )
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    } 
    fetchDataOrders()
  }, [])

  return (
    <div className='ordersContainer'>
      {data?.data?.map(item => (
        <div className="ordersWrapper" key={item.id}>
          <h1>Order number: {item.id} </h1>
          <h2 className='orderData'>Date of order: {moment(item.attributes.createdAt).format(`dddd, DD/MM/YYYY`)} </h2>
            <h2 className='orderCost'>Total cost: ${item.attributes.products.reduce((a, v)=> a = a + v.price * v.quantity, 0 )} </h2>
          {item.attributes.status ?
            <h2 className='OrderShipping'>Shipping status: {item.attributes.status} </h2>
          : <h2 className='OrderShipping'>Shipping status: Pending</h2>
          }
          {item.attributes.Date ?
            <h2 className='OrderShipping'>Delivery Date: {moment(item.attributes.Date).format(`dddd, DD/MM/YYYY`)}</h2>
            : ''}
          {item.attributes.products?.map(product => (
            <div className='ordersInfo'>
              <span className='orderCost'>Cost: ${product.price * product.quantity} </span>
              <span className='orderQuantity'>Quantity: {product.quantity} </span>
              <span className='orderTitle'>Title: {product.title} </span>
              <img src={process.env.REACT_APP_UPLOAD_URL + product.img1}></img>
              <span className='orderSize'>Size: {product.size} </span>
            </div>
          ))}
        </div>
      )
      )
      }
    </div>
  )
}

export default Orders
