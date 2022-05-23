import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shear/Navbar";
import Home from "./components/Home/Home/Home";
import About from "./components/Home/Home/About";
import Review from "./Pages/Review";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className=" mx-16">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
