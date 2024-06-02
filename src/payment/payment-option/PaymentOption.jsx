import React from 'react'
import './payment-option.scss'
import visalogo from '../../images/logos_visa.svg'
import mastercard from '../../images/logos_mastercard.svg'
import cardlinear from '../../images/solar_card-linear.svg'
const PaymentOption = () => {
  return (
    <main className="payment-option">
      <h3>Select payment option</h3>
      <p>All transactions are secure and encrypted</p>
      <div className="box">
        <div className="input">
          <input type="radio" name="choice_of_payment" />
        </div>
        <span>Wallet</span>
      </div>
      <div className="credit-card">
        <div className="heading">
          <div className="input">
            <input type="radio" name="choice_of_payment" />
          </div>
          <div>
            <h3>Credit Card</h3>
            <span>Pay securely using your visa or master card</span>
          </div>
          <div>
            <img src={visalogo} alt="visalogo" />
            <img src={mastercard} alt="mastercard" />
          </div>
        </div>
        <div className="body">
          <h3>Card Number</h3>
          <div className="card">
            <input type="text" placeholder="1234 1234 1234 1234" />
            <img src={cardlinear} alt="card" />
          </div>
        </div>
        <div className="cardholder-details">
          <div className="cardholder-detail">
            <p>Cardholder Name</p>
            <input type="text" placeholder="Card name" />
          </div>
          <div className="cardholder-detail">
            <p>Expiry Date</p>
            <input type="text" placeholder="MM / YY" />
          </div>
          <div className="cardholder-detail">
            <p>CVV</p>
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      </div>
      <div className="btn">
        <button>Confirm Payment</button>
      </div>
    </main>
  )
}

export default PaymentOption
