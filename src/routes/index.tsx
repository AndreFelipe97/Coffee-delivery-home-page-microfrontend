import { Routes, Route } from 'react-router-dom'
import { LayoutDefault } from '../laytouts/Default'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { OrderConfirmation } from '../pages/OrderConfirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  )
}