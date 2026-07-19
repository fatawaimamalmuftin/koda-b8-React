import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Komponen child
import Navbar from "./componens/Navbar.jsx"
import Footer from "./componens/Footer.jsx"

//Komponen parent
import LandingPackage from './pages/LandingPackage'
import MainBrowse from './pages/MainBrowse'
import MainDetail from './pages/MainDetail';
import MainCart from './pages/MainCart';
import CheckOut1 from "./pages/CheckOut1.jsx";
import CheckOut2 from "./pages/CheckOut2.jsx";
import CheckOut3 from "./pages/CheckOut3.jsx";
import CheckOutSucces from "./pages/CheckOutSucces.jsx";
import ProfileMyOrder from "./pages/ProfileMyOrder.jsx";
import ProfileWishList from "./pages/ProfileWishList.jsx";
import ProfileAlamat from "./pages/ProfileAlamat.jsx";
import ProfileEdit from "./pages/ProfileEdit.jsx";
import Login from "./pages/Login.jsx";
import Regis from "./pages/Regis.jsx";
import ForgotPass from "./pages/ForgotPass.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminManajemenProduk from "./pages/AdminManajement.jsx";
import { useState } from "react";
import AuthContext from "./componens/AuthContex.jsx";


const router = createBrowserRouter([
  // 1
  {
    path: "/",
    element: <>
      <Navbar />,
      <LandingPackage />
      <Footer />
    </>
  },
  // 2
  {
    path: "/mainbrows",
    element: <>
      <Navbar />,
      <MainBrowse />
      <Footer />
    </>
  },
  // 3
  {
    path: "/maindetail",
    element: <>
      <Navbar />,
      <MainDetail />,
      <Footer />
    </>
  },
  // 4
  {
    path: "/maincart",
    element: <>
      <Navbar />,
      <MainCart />,
      <Footer />
    </>
  },
  // 5
  {
    path: "/checkout1",
    element: <>
      <Navbar />,
      <CheckOut1 />,
      <Footer />
    </>
  },
  // 6
  {
    path: "/checkout2",
    element: <>
      <Navbar />,
      <CheckOut2 />,
      <Footer />
    </>
  },
  // 7
  {
    path: "/checkout3",
    element: <>
      <Navbar />,
      <CheckOut3 />,
      <Footer />
    </>
  },
  // 8
  {
    path: "/checkoutsucces",
    element: <>
      <Navbar />,
      <CheckOutSucces />,
      <Footer />
    </>
  },
  // 9
  {
    path: "/profilemyorder",
    element: <>
      <Navbar />,
      <ProfileMyOrder />,
      <Footer />
    </>
  },
  // 10
  {
    path: "/profilewishlist",
    element: <>
      <Navbar />,
      <ProfileWishList />,
      <Footer />
    </>
  },
  // 11
  {
    path: "/profilealamat",
    element: <>
      <Navbar />,
      <ProfileAlamat />,
      <Footer />
    </>
  },
  // 12
  {
    path: "/profileedit",
    element: <>
      <Navbar />,
      <ProfileEdit />,
      <Footer />
    </>
  },
  // 13
  {
    path: "/login",
    element: <>
      <Login />
    </>
  },
  // 14
  {
    path: "/registrasi",
    element: <>
      <Regis />
    </>
  },
  // 15
  {
    path: "/forgotpass",
    element: <>
      <ForgotPass />
    </>
  },
  // 16
  {
    path: "/dashboard",
    element: <>
      <AdminDashboard />
    </>
  },// 17
  {
    path: "/manajement",
    element: <>
      <AdminManajemenProduk />
    </>
  }

])

export default function App() {
  const [auth, setAuth] = useState([])

  return (
    <AuthContext value={[auth, setAuth]}>
      <RouterProvider router={router} />
    </AuthContext>
  )
}
