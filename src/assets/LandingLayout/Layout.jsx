import React from 'react'
import NavBar from '../../Components/Landing/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Landing/Footer/Footer'

export default function Layout() {
  return <>
  <NavBar/>
  <Outlet></Outlet>
  <Footer/>
  </>
}
