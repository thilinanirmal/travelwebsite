import React from 'react'
import './destination.css'
import './destinations.scss'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img from'../../Assets/2.jpg'
import img2 from'../../Assets/3.jpg'
import img3 from'../../Assets/4.jpg'
import img4 from'../../Assets/5.jpg'
import img5 from'../../Assets/8.jpg'

const Data = [
  {
    id:1,
    imgSrc:img2,
    destTitle:'Kanneliya',
    Location: 'Udugama',
    grade:'cultural RELAX',
  },
  {
    id:2,
    imgSrc:img3,
    destTitle:'Olu',
    Location: 'Makubura',
    grade:'cultural RELAX',
  },
  {
    id:3,
    imgSrc:img4,
    destTitle:'Angiriya',
    Location: 'Udugama',
    grade:'cultural RELAX',
  },
  {
    id:4,
    imgSrc:img5,
    destTitle:'Kaluwala',
    Location: 'Udugama',
    grade:'cultural RELAX',
  }


]

const Destinations = () => {
  return (
   <section className='destination section container'>
    <div className="setContainer">
      <div className="setheader flex">
        <div className="textDiv">
          <h2 className="setTitle">
              Popular Destinations
          </h2>
          <p>From this historical city , Come see the best destinations of Sri Lanka </p>
        </div>
          <div className="iconDiv flex">
            <BsArrowLeftShort className ="icon leftIcon"/>
            <BsArrowRightShort className ="icon"/>
          </div>
         <div className="maincontent grid">
          {
            Data.map(({id,imgSrc,destTitle,Location,grade})=>{
              return(
                <div className="singleDestination">
                  <div className="destImage">

                  <img src={imgSrc} alt="Image Title" />

            <div className="overLayInfo">
                  <h3>{Location}</h3>
                 <p> {destTitle}</p>
                  <BsArrowRightShort className ="icon"/>
            </div>
         </div>

            <div className="destFooter">
              <div className="number">
                0{id}
              </div>
              <div className="destText flex">
                <h6>
                  {Location}
                </h6>
                <span className='flex'>
                  <span className="dot">
                    <BsDot className="icon"/>
                  </span>
                  DOT
                </span>

              </div>
            </div>
          </div>
              )
            })
          }
         </div>

      </div>
    </div>
   </section>
  )
}

export default Destinations