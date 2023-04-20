import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";
import { userData } from '../../redux/store'



const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const { username, jwt } = userData()

    const ReloadPage = () => {
        window.location.reload();
  }

    const totalPrice = () => {
        let total = 0
        products.forEach(item => { total += item.quantity * item.price })
        return total.toFixed(2)
    }

    const stripePromise = loadStripe(
        'pk_test_51MZFEgC0aVF6wcYPkU4BPu7Tdw9yJ2dM5JGMm4wAH5CGjb5IcAuhNwXTKCfi8biNeHL6XgJryrowo6XfwDktiIxG00ciGMoePG'
        );

    const handlePayment = async () => {
        
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post(`/orders`, {
                products,
                username
            })
            dispatch(resetCart())
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        } catch (err) {
            console.log(err)
        }
    }

  return (
      <div className='cart'>
          {username ? (
              <>
          <h1>Products in your cart</h1>
          {products?.map(item => (
              <div className="item" key={item.id}>
                  <img src={process.env.REACT_APP_UPLOAD_URL + item.img1} alt="" />
                  <div className="details">
                      <h1>{item.title}</h1>
                      <p>{item.desc?.substring(0, 50)}</p>
                      <div className="price">{item.quantity} x ${item.price}</div>
                      <div className="size">{item.size}</div>
                  </div>
                  <DeleteOutlinedIcon className="delete" onClick={(e) => dispatch(removeItem(item.id, item.size)) } />
              </div>    
          ))}
          <div className="total">
              <span>SUBTOTAL</span>
              <span>${totalPrice()}</span>
          </div>
          <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
          <span className='reset' onClick={() => dispatch(resetCart()) }>Reset Cart</span>
              </>) :
              (
                <a href="/login" onClick={ReloadPage}>Login in</a>
            )
          }
      </div>
  )
}

export default Cart
