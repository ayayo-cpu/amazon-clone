import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing';
import Payment from './Pages/Payments/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Auth from './Pages/Auth/Auth';
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/category/:categoryName" element={<Result />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;