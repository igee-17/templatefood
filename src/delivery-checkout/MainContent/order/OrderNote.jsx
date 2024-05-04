import React from 'react'
import './ordernote.scss'
const OrderNote = () => {
  return (
    <div className="order-note">
      <h3>Add an order note</h3>
      <textarea placeholder="Special Instructions"></textarea>
      <div className="input">
        <input type="checkbox" />
        <span>Request utensils, straws, etc</span>
      </div>
    </div>
  )
}

export default OrderNote
