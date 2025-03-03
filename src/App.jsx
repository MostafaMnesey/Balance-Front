import React from 'react'
import NavBar from './Components/Landing/NavBar/NavBar'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './assets/LandingLayout/Layout'
import Home from './Components/Landing/Home/Home'
import About from './Components/Landing/About/About'
import Features from './Components/Landing/Features/Features'
import Contact from './Components/Landing/Contact/Contact'
import SignUp from './Components/Landing/SignUp/SignUp'
import NotFound from './Components/NotFound/NotFound'
import SignIn from './Components/Landing/SignIn/SignIn'
import ForgetPassword from './Components/Landing/ForgetPassword/ForgetPassword'
import ResetPassword from './Components/Landing/ResetPassword/ResetPassword'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/features",
        element: <Features/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/SignUp",
        element: <SignUp/>,
      },
      
    ],

  },
  {
    path: "*",
    element:<NotFound/>,
  },
  {
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPassword/>,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword/>,
    
  },
]
)

export default function App() {
  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}
