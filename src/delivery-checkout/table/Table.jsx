import React from 'react'
import './table.scss'
import Image1 from '../../images/plus.svg'
import Image2 from '../../images/minus.svg'
import DeleteIcon from '../../images/deleteIcon.svg'
import Sharwarma from '../../images/sharwarma.svg'
export default () => {
  return (
    <table>
      <thead>
        <tr className="thead">
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="col-1">
            <img src={Sharwarma} alt="sharwarma" />
            <div>
              <h3>Boston Chicken Shawarma wrap</h3>
              <p>Shawarma spot</p>
              <img src={DeleteIcon} />
            </div>
          </td>
          <td>
            <div className="col-2">
              <button>
                <img src={Image1} />
              </button>
              <span>2</span>
              <button>
                <img src={Image2} />
              </button>
            </div>
          </td>
          <td className="col-3">
            <p>₦7000</p>
          </td>
          <td className="col-4">
            <p>₦14000</p>
          </td>
        </tr>
      </tbody>
      <tr>
        <td>
          <div className="col-1">
            <img src={Sharwarma} alt="sharwarma" />
            <div>
              <h3>Boston Chicken Shawarma wrap</h3>
              <p>Shawarma spot</p>
              <img src={DeleteIcon} />
            </div>
          </div>
        </td>
        <td>
          <div className="col-2">
            <button>
              <img src={Image1} />
            </button>
            <span>2</span>
            <button>
              <img src={Image2} />
            </button>
          </div>
        </td>
        <td className="col-3">
          <p>₦7000</p>
        </td>
        <td className="col-4">
          <p>₦14000</p>
        </td>
      </tr>
    </table>
  )
}
