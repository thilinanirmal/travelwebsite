import React from 'react'
import './review.css'
import{RiStarSFill} from 'react-icons/ri'
import './review.scss'
import img10 from'../../Assets/joshp.jpg'
import img11 from'../../Assets/joshp.jpg'
import img12 from'../../Assets/joshp.jpg'

const Review = () => {
  return (
   <section className='reviewSection'>
    <div className="setContainer">
      <div className="revTitle">
        <h2>Our Satisfactors</h2>
      </div>

      <div className="mainContent container grid">
        <p>100+ Satisfacted Travelers</p>
      </div>

    <div className="subContent flex">
      <div className="singleServices">
        <div className="destImage grid">
            <img src={img10} alt='Image Name' />
          </div>  
                </div>
        <div className="singleServices">
            <p>Well Travel partner,They fix our Vacation More Valubale</p>
                <div className="review flex">
                <div className="singlereview flex">
                    <h4>Review</h4>
                   <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                </div>
            </div>
          </div>
    </div>

    <div className="subContent flex">
      <div className="singleServices">
        <div className="destImage grid">
            <img src={img10} alt='Image Name' />
          </div>  
                </div>
        <div className="singleServices">
            <p>Well Travel partner,They fix our Vacation More Valubale</p>
                <div className="review flex">
                <div className="singlereview flex">
                    <h4>Review</h4>
                   <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                </div>
            </div>
          </div>
    </div>

    <div className="subContent flex">
      <div className="singleServices">
        <div className="destImage grid">
            <img src={img10} alt='Image Name' />
          </div>  
                </div>
        <div className="singleServices">
            <p>Well Travel partner,They fix our Vacation More Valubale</p>
                <div className="review flex">
                <div className="singlereview flex">
                    <h4>Review</h4>
                   <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                  <RiStarSFill className ='icon'/>
                </div>
            </div>
          </div>
    </div>
      <button className="reviewbtn">
              See More
            </button>
    </div>
  </section>   
  )
}

export default Review