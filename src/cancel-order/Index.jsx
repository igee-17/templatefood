import React from 'react'
import './cancel-order.scss'
import cancel from '../images/qs-symbol.svg'
const Index = () => {
  return (
    <div className="cancel">
      <div className="image">
        <img src={cancel} alt="check_icon" />
      </div>
      <div className="text">
        <h2>Are you sure you want to cancel order</h2>
      </div>
      <div className="btn">
        <button> Back to order</button>
        <button className="red">Cancel Order</button>
      </div>
    </div>
  )
}

export default Index
