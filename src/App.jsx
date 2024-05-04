import { Routes, Route } from 'react-router-dom'
import Delivery from './delivery-checkout/index'
import Payment from './payment/Index'
import Home from './Home/Home'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App
