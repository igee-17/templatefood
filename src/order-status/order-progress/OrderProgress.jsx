import React from 'react'
import './order-progress.scss'
const OrderProgress = () => {
  return (
    <div className="order-progress">
      <div className="progress">
        <p>Order #2569859404 is currently in progress</p>
      </div>
      <div className="horizontal-line-with-circle"></div>
    </div>
  )
}

export default OrderProgress
