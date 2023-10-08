import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";
import Cart from "./ui/pages/cart/Cart";
import Home from "./ui/home/Home";
import SingleProduct from "./ui/pages/product/SingleProduct";
import Login from "./ui/auth/login/Login";
import SignUp from "./ui/auth/signup/Signup";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
