import React from 'react'
import './order-summary.scss'
const OrderSummary = () => {
  return (
    <div className="order-summary">
      <div className="location">
        <div>
          <h3>Delivery Address</h3>
          <p>Plot 3, Makeni Street, Wuse Zone 3</p>
        </div>
        <div className="btn">
          <button>Change</button>
        </div>
      </div>
      <div className="order">
        <h3>Order Summary</h3>
        <div className="summary-content">
          <div>
            <p>Subtotal</p>
            <p>28000</p>
          </div>
          <div>
            <p>Delivery Fee</p>
            <p>600</p>
          </div>
          <div>
            <p>Service Fee</p>
            <p>100</p>
          </div>
        </div>
        <div className="total">
          <h3>Total</h3>
          <p>21700</p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
