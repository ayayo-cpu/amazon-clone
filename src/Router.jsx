import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/Auth/SignUp';
import Payment from './Pages/Payments/Payment';
import Order from './Pages/Orders/Order';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
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