import React from 'react'
import Navbar from '../User/Component/Nav/Navbar'
import Footer from '../User/Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
        <Navbar/>
        <Outlet />
        <Footer/>
    </>
  )
}

export default User
