import React from 'react'
import Header from './Components/header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body