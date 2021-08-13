import React from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

export default function Layout({ children }) {
  return (
    <div className='paddingMobile'>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
