import { Route, Routes } from "react-router-dom";
import SigninSignup from "./components/SigninSignup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello</div>}></Route>
        <Route path="/auth" element={<SigninSignup></SigninSignup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
