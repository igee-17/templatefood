import React from 'react'
import './content.scss'
import CartSummary from './cart-summary/CartSummary'
import Coupon from './Coupon/Coupon'
import OrderNote from './order/OrderNote'
export default () => {
  return (
    <section className="center-section">
      <article>
        <Coupon />
        <OrderNote />
      </article>
      <CartSummary />
    </section>
  )
}
