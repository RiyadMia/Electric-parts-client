import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Shear/Navbar";
import Home from "./components/Home/Home/Home";
import ParChoice from "./Pages/ParChoice";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deashbord from "./components/Deashbord/Deashbord";
import MyBooking from "./components/Deashbord/MyBooking";
import MyReview from "./components/Deashbord/MyReview";
import Users from "./components/Deashbord/Users";
import RequireAdmin from "./components/Auth/RequireAdmin";
import AddService from "./components/Deashbord/AddService";
import ManageItems from "./components/Deashbord/ManageItems";
import Payment from "./components/Deashbord/Payment";
import Blogs from "./Blogs/Blogs";
import MyProfile from "./components/Deashbord/MyProfile";
import MyProtfolio from "./Pages/MyProtfolio";
import Review from "./components/Deashbord/Review";
import Profile from "./components/Deashbord/Profile";
import RequireAuth from "./components/Auth/RequireAuth";
import ManageOrders from "./components/Deashbord/ManageOrders";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="protfilio" element={<MyProtfolio></MyProtfolio>}></Route>
        <Route
          path="parchoice"
          element={
            <RequireAuth>
              <ParChoice></ParChoice>
            </RequireAuth>
          }
        ></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="deashbord" element={<Deashbord></Deashbord>}>
          <Route index element={<MyBooking></MyBooking>}></Route>
          <Route
            path="manage"
            element={
              <RequireAdmin>
                <ManageItems></ManageItems>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="user"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageorder"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route
          path="/deashbord/addservice"
          element={
            <RequireAdmin>
              <AddService></AddService>
            </RequireAdmin>
          }
        ></Route>
        <Route path="" element></Route>
        <Route path="" element></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
