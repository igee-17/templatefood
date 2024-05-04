import React from 'react'
import './cart-summary.scss'
import checkImage from '../../../images/solar_check-circle-bold.svg'
import { useNavigate } from 'react-router-dom'
const CartSummary = () => {
  const navigate = useNavigate()
  return (
    <article className="cart-summary">
      <h2>Cart Summary</h2>
      <div>
        <div className="box">
          <img src={checkImage} alt="check" />
          <div className="box-content">
            <p>Delivery</p>
            <p>600</p>
          </div>
        </div>
        <div className="box">
          <div className="check"></div>
          <div className="box-content">
            <p>Pickup</p>
            <p>600</p>
          </div>
        </div>
        <div className="box">
          <div className="check"></div>
          <p>Schedule Order</p>
        </div>
      </div>
      <div className="sub-total">
        <p>Subtotal</p>
        <p>21600.00</p>
      </div>
      <div className="total">
        <p>Total</p>
        <p>21600.00</p>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            navigate('/payment')
          }}
        >
          Checkout
        </button>
      </div>
    </article>
  )
}

export default CartSummary
