import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY = "pk_test_51MZFEgC0aVF6wcYPkU4BPu7Tdw9yJ2dM5JGMm4wAH5CGjb5IcAuhNwXTKCfi8biNeHL6XgJryrowo6XfwDktiIxG00ciGMoePG"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                })
                console.log(res.data)
                navigate('/success')
            } catch (err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest()

    },[stripeToken, navigate])

  return (
      <div
          style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
        }}
      >
          {stripeToken ? (<span>Processing. Please wait...</span>) : (
          <StripeCheckout
              name="Lama Shop"
              image="https://cdn.pixabay.com/photo/2016/04/19/13/39/store-1338629_960_720.jpg"
              billingAddress
              shippingAddress
              description='Your total is $20 '
              amount={2000}
              token={onToken}
              stripeKey= {KEY}
              >
          <button
              style={{
                  border: "none",
                  width: 120,
                  borderRadius: 5,
                  padding: "20px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
          }}
          >
              Pay Now
              </button>
              </StripeCheckout>
              )}
    </div>
  )
}

export default Pay
