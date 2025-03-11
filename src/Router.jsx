import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payments/Payment";
import Order from "./Pages/Orders/Order";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Results/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QzDhw0020mn59yHz4KyBwkK03QYoe1eT7ZwXZNvu4bBimmObVg0m9tMW4cCfqZVxd7gnb3PE4qHUJI89ClVRggW00PNhOz7qz"
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payments"
            element={
              <ProtectedRoute
                msg={"you must log in to pay"}
                redirect={"/payments"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you must log in to access your orders "}
                redirect={"/orders"}
              >
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Result />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
