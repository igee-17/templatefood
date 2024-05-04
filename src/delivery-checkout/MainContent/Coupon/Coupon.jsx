import React from 'react'
import './coupon.scss'
const Coupon = () => {
  return (
    <div className="coupon">
      <h3>Have a Coupon?</h3>
      <p>Add your code for an instant cart discount</p>
      <div className="input">
        <input type="text" placeholder="Enter promo code" />
        <button className="btn">Apply</button>
      </div>
    </div>
  )
}

export default Coupon
