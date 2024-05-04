import './delivery.scss'

import Table from './table/Table'
import MainContent from './MainContent/Content'
const index = () => {
  return (
    <section className="delivery-checkout">
      <h1 className="heading">My Cart</h1>
      <Table />
      <MainContent />
    </section>
  )
}

export default index
