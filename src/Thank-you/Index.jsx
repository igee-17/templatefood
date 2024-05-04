import React from 'react'
import './thank-you.scss'
import check_icon from '../images/check_red.svg'
const Index = () => {
  return (
    <div className="thanks">
      <div className="image">
        <img src={check_icon} alt="check_icon" />
      </div>
      <div className="text">
        <h3>Thank you for Ordering!</h3>
        <h4>
          Order code: <span>13FUD </span>
        </h4>
        <p>Give this code to rider and claim your order</p>
      </div>
      <div className="btn">
        <button> View Order</button>
        <button className="red">Continue Shopping</button>
      </div>
    </div>
  )
}

export default Index
