import React from 'react'
import "../OurTracks/OurTrack.css"; // Import the CSS file
import lamp from "../../assets/lamp.png";
import Group from "../../assets/Group.png";
function OurTrack() {
  return (
    <div className='container '>

        <div className='row'> 
            <div  className='col-md-2'><img src={lamp} alt="lamp"  className='our-track-icon'/></div>
            <div  className='col-md-8 text-center'><h2 style={{fontWeight:"Bold"}}> Our Tracks </h2>  <p> Lorem Ipsum is simply dummy text of the printing.</p></div>
            <div  className='col-md-2 text-end'><img src={Group} alt="lamp" className='our-track-icon' /></div>
        </div>
    </div>
  )
}

export default OurTrack