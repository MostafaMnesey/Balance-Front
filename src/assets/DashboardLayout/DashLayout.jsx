import React from 'react'
import { Outlet } from 'react-router-dom'
import DashNav from '../../Components/Dashboard/DashNav/DashNav'
import SideBar from '../../Components/Dashboard/SideBar/SideBar'

export default function DashLayout() {
  return (<>
  
  
    <DashNav/>
    <SideBar component={<Outlet></Outlet>}/>
 
  </>
  )
}
