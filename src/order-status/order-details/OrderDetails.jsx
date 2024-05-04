import React from 'react'
import './order-details.scss'
import boneless from '../../images/boneless_banquet.svg'

const OrderDetails = () => {
  return (
    <div className="order-details">
      <div className="heading">
        <h3>Order Details</h3>
      </div>
      <div className="details">
        <div className="address">
          <h3>Delivery address</h3>
          <p>Plot 3, Makeni Street, Wuse Zone 3</p>
        </div>
        <div>
          <h3>Riders Contact info</h3>
          <p>Plot 3, Makeni Street, Wuse Zone 3</p>
        </div>
        <div>
          <h3>Due date</h3>
          <p>22 March 2024</p>
        </div>
        <div>
          <h3>Order code</h3>
          <p>13FUD</p>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Item(s)</th>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col">
                <div>
                  <img src={boneless} alt="boneless" />
                </div>
                <div>
                  <h3>Boneless Banquet</h3>
                  <p>KFC</p>
                </div>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>₦7,000</p>
              </td>
              <td>
                <p>₦14,000</p>
              </td>
            </tr>
            <tr>
              <td className="col">
                <div>
                  <img src={boneless} alt="boneless" />
                </div>
                <div>
                  <h3>Boneless Banquet</h3>
                  <p>KFC</p>
                </div>
              </td>
              <td>
                <p>2</p>
              </td>
              <td>
                <p>₦7,000</p>
              </td>
              <td>
                <p>₦14,000</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table-footer">
          <div className="btn">
            <button>Cancel Order</button>
            <button>Continue Shopping</button>
          </div>
          <div className="total">
            <p>Total</p>
            <p>₦21,700</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
