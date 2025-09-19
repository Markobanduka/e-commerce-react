import axios from "axios";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { HomePage } from "./pages/home/HomePage";
import "./App.css";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
      <Route path="*" element={<h1>404: Page Not Found</h1>} cart={cart} />
    </Routes>
  );
}

export default App;
