import React from 'react'
import './app.css'

import Home from './Assets/Components/Home/Home'
import Navbar from './Assets/Components/Navbar/Navbar'

import Destinations from './Assets/Components/Destinations/Destinations'
import Footer from './Assets/Components/Footer/Footer'
import Review from './Assets/Components/Review/Review'
import Services from './Assets/Components/Services/Services'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Destinations/> 
    <Services/>
    <Review/>
    <Footer/>
      

    </>
  )
}

export default App
