import React from 'react'
import './order-progress.scss'
import check from '../../images/ic_round-check.svg'
const OrderProgress = () => {
  return (
    <div className="order-progress">
      <div className="progress">
        <p>Order #2569859404 is currently in progress</p>
      </div>
      <div className="horizontal-line-with-circle">
        <div>
          <div id="active" className="check-container">
            <img src={check} alt="check" />
            <article className="im activate"></article>
          </div>
          <p>Order confirmed</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
            <article className="im"></article>
          </div>
          <p>Preparing your order</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
            <article className="im"></article>
          </div>
          <p>Rider accepted order</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
            <article className="im"></article>
          </div>
          <p>Order picked up</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
            <article className="im"></article>
          </div>
          <p>Order in transit</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
            <article className="im"></article>
          </div>
          <p>Order has arrived</p>
        </div>
        <div>
          <div className="check-container">
            <article className="em"></article>
            <img src={check} alt="check" />
          </div>
          <p>Order Delivered</p>
        </div>
      </div>
      <div className="estimated-time">
        <p>
          Estimated time:
          <span>25 minutes</span>
        </p>
      </div>
    </div>
  )
}

export default OrderProgress
