import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import OrderPlaced from "./pages/OrderPlaced";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <CartProvider>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products" exact element={<Products />} />
              <Route
                path="/productDetail/:id"
                exact
                element={<ProductDetail />}
              />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/orderPlaced" exact element={<OrderPlaced />} />
            </Routes>
          </CartProvider>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
