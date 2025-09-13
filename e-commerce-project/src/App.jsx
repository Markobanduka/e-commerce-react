import axios from "axios";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import "./App.css";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<h1>404: Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
