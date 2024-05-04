import React from 'react'
import './order-cancelled.scss'
import cancel from '../images/ic_round-cancel.svg'
const Index = () => {
  return (
    <div className="order-cancelled">
      <div className="image">
        <img src={cancel} alt="cancel" />
      </div>
      <div className="text">
        <h2>Order cancelled</h2>
      </div>
      <div className="btn">
        <button className="red">Continue Shopping</button>
      </div>
    </div>
  )
}

export default Index
