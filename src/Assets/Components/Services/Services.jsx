import React from 'react'
import './services.css'
import{MdKingBed} from 'react-icons/md'
import{MdBathtub} from 'react-icons/md'
import{TbAirConditioning} from 'react-icons/tb'
import './services.scss'
import img1 from'../../Assets/room.jpg'
import img2 from'../../Assets/food.jpeg'
import img3 from'../../Assets/guide.jpg'


const Services = () => {
  return (
    
    <div>
      <div className="ourservices">
      <h1>Our Services</h1>
    </div>
     <section className='services container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
              Rooms
          </h2>
          </div>
        <div className="maincontent grid">

        <div className="singleServices">
          <div className="destImage">
            <img src={img1} alt='Image Name' />
          </div>

        <div className="facilities flex">
            <div className="singlefacilities flex">
               <MdKingBed className ='icon'/>
              <small>2 Beds</small>
            </div>

              <div className="singlefacilities flex">
                <MdBathtub className ='icon'/>
                <small>1 Bath</small>
              </div>

              <div className="singlefacilities flex">
                <TbAirConditioning className ='icon'/>
                <small>AC</small>
              </div>
            </div>
         
        </div>

        </div>
      </div>

     </section>

     <section className='services container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
              Foods
          </h2>
          </div>
        <div className="maincontent grid">

        <div className="singleServices">
          <div className="destImage">
            <img src={img2} alt='Image Name' />
        </div>

            <div className="facilities flex">
              <div className="singlefacilities flex">
                <MdKingBed className ='icon'/>
                <small>2 Beds</small>
              </div>

              <div className="singlefacilities flex">
                <MdBathtub className ='icon'/>
                <small>1 Bath</small>
              </div>

              <div className="singlefacilities flex">
                <TbAirConditioning className ='icon'/>
                <small>AC</small>
              </div>
            </div>
        </div>

      </div>
    </div>

            </section>

     <section className='services container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>
            Guide Services
          </h2>
        </div>
        <div className="maincontent grid">

        <div className="singleServices">
          <div className="destImage">
            <img src={img3} alt='Image Name' />

          </div>

            <div className="facilities flex">
              <div className="singlefacilities flex">
                <MdKingBed className ='icon'/>
                <small>2 Beds</small>
              </div>

              <div className="singlefacilities flex">
                <MdBathtub className ='icon'/>
                <small>1 Bath</small>
              </div>

              <div className="singlefacilities flex">
                <TbAirConditioning className ='icon'/>
                <small>AC</small>
              </div>
            </div>
         
        </div>
        </div>
      </div> 
    </section>
  </div>
  )
}

export default Services