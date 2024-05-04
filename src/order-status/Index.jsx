import React from 'react'
import './order-status.scss'
import check from '../images/check_red.svg'
import OrderDetails from './order-details/OrderDetails'
const Index = () => {
  return (
    <div className="order-status">
      <div className="image">
        <img src={check} alt="image" />
      </div>
      <div className="text">
        <h2>Order Successful!</h2>
        <p>Thank you for your purchase</p>
      </div>
      <OrderDetails />
    </div>
  )
}

export default Index
