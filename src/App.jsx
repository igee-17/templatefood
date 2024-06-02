import { Routes, Route } from 'react-router-dom'
import Delivery from './delivery-checkout/index'
import Payment from './payment/Index'
import Thanks from './Thank-you/Index'
import Cancel from './cancel-order/Index'
import Cancelled from './order-cancelled/Index'
import Status from './order-status/Index'
import Home from './Home/Home'
import HIFI from './HIFI/Index'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="payment" element={<Payment />} />
        <Route path="thank" element={<Thanks />} />
        <Route path="order-status" element={<Status />} />
        <Route path="cancel" element={<Cancel />} />
        <Route path="order-cancel" element={<Cancelled />} />
        <Route path="HIFI" element={<HIFI />} />
      </Routes>
    </div>
  )
}

export default App
