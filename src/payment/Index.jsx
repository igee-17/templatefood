import React from 'react'
import './payment.scss'
import PaymentOption from './payment-option/PaymentOption'
import OrderSummary from './order-summary/OrderSummary'
const Index = () => {
  return (
    <section className="payment">
      <h1>Payment</h1>
      <div className="payment-content">
        <PaymentOption />
        <OrderSummary />
      </div>
    </section>
  )
}

export default Index
