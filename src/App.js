import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ Import Register
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} /> {/* ✅ Add this */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
