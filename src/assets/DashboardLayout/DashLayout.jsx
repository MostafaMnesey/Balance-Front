import React from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from '../../Components/Dashboard/DashNav/DashNav'

export default function DashLayout() {
  return (<>
  
  
    <DashNav/>
   <Outlet></Outlet>
  </>
  )
}
