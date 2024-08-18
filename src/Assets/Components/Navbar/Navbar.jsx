import React,{useState} from 'react'
import './navbar.css'
import './navbar.scss'

import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  
//show nav//
 const [active, setActive] = useState('navbar') 
 const showNav =()=>{
  setActive('navbar activeNavbar')
 } 

 //remove nav//
 const removeNav =()=>{
  setActive('navbar')
 } 

 //add background color to the header

 const[tranparent,setTransparent] = useState('header')
 const addBg = () => {
  if(window.scrollY >= 10){
    setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
 } 

 window.addEventListener('scroll',addBg)
  return (
    <section className='navBarSection'>
      <div className={tranparent}>
        <div className='logoDiv'>
          <a href="#" className="logo">
            <h1 className='flex'><MdTravelExplore className = "icon"/>
                DOT
            </h1>
          </a>
        </div>
        <div className={active}>
            <ul className="navList flex">
              
              <li className="navItem">
                <a href="" className="navLink">Home</a>
              </li>

              <li className="navItem">
                <a href="" className="navLink">Destinations</a>
              </li>

              <li className="navItem">
                <a href="" className="navLink">Services</a>
              </li>

              <li className="navItem">
                <a href="" className="navLink">Reviews</a>
              </li>

              <li className="navItem">
                <a href="" className="navLink">Contact</a>
              </li>

              <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="#">Login</a>
                </button>

                <button className="btn">
                  <a href="#">Sign Up</a>
                </button>

              </div>

            </ul>

            <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon"/>

            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
          </div>


      </div>
    </section>
    
  )
}

export default Navbar