import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shear/Navbar";
import Home from "./components/Home/Home/Home";
import About from "./components/Home/Home/About";

function App() {
  return (
    <div className=" mx-16">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
