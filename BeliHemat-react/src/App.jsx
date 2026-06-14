import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Komponen child
import Navbar from "./componen/Navbar.jsx"
import Footer from "./componen/Footer.jsx"

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
import ProfileWishlist from "./pages/ProfileWishlist.jsx";


const router = createBrowserRouter([
  // 1
  {
    path: "/landingPackage",
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
    path: "/chekout1",
    element: <>
      <Navbar />,
      <CheckOut1 />,
      <Footer />
    </>
  },
  // 6
  {
    path: "/chekout2",
    element: <>
      <Navbar />,
      <CheckOut2 />,
      <Footer />
    </>
  },
  // 7
  {
    path: "/chekout3",
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
      <ProfileWishlist />,
      <Footer />
    </>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
