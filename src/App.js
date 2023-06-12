import { Route, Routes } from "react-router-dom";
import SigninSignup from "./components/SigninSignup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/Pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/auth" element={<SigninSignup></SigninSignup>}></Route>
        <Route
          path="/product"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
