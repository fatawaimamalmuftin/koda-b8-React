import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPackage from './pages/LandingPackage'
import About from './pages/About'
import Navbar from "./componen/Navbar.jsx"
import Footer from "./componen/Footer.jsx"

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
    path: "/about",
    element: <>
      <Navbar />,
      <About />
      <Footer />
    </>
  },
  // 3
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 4
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 5
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 6
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 7
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 8
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 9
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  },
  // 10
  {
    path: "/about",
    element: <>
      <Navbar />,
      <Footer />
    </>
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
