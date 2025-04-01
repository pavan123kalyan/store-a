// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ Import Register
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {createContext,useState } from "react";
export const appContext = createContext();
function App() {

  const [users,setUsers] = useState([]);
  const [user,setUser] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <appContext.Provider value={{users,setUsers,user,setUser}}>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="register" element={<Register />} /> {/* ✅ Add this */}
        </Routes>
        <Footer />
        </appContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
