import { Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:title" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
