import React from 'react'
import './footer.css'
import './footer.scss'
import {MdTravelExplore} from 'react-icons/md'
import {ImInstagram} from 'react-icons/im'
import {FaWhatsapp} from 'react-icons/fa'
import {ImFacebook} from 'react-icons/im'

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className='logo'>
              <h1 className = 'flex'> <MdTravelExplore className = "icon"/>DOT </h1>
             </a>
          </div>
            <div className="socials flex">
               <ImFacebook className = "icon"/>
               <ImInstagram className = "icon"/>
               <FaWhatsapp className = "icon"/>       
            </div>
       </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <span className="list" style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Travel & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </span>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
              Contact Us
          </span>
          <span className='phone'> 0713595423</span>
          <span className='email'> thilinanirmalhl@gmail.com</span>
          

        </div>


      </div>
    </div>
  )
}

export default Footer