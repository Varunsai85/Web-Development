import { createBrowserRouter , RouterProvider } from "react-router-dom"
import "./App.css"
import Navbar from "./assets/components/Navbar"
import About from "./assets/components/About"
import Login from "./assets/components/login"
import Home from "./assets/components/Home"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/Login",
      element:<><Navbar/><Login/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
