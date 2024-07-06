import React from 'react';
import './Home.css';
import image2 from '../../Assets/Vector-6.png';
import image3 from '../../Assets/Coworking-video-1.png';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';

function Home() {
  return (
    <div>
    <div className='d-view'>
      <div className='row'>
        <div className='col-md-7'>
          <div className='section-1 container'>
          <img src={image2} className='img2' alt='image'/>
            <p className='hero-text'>Host your meeting with world-class amenities. Starting at <span className='text-orange'>₹199/-!</span></p>
          </div>
        </div>
        <div className='col-md-5'>
          <div className='section-2'>
            <img src={image3} className='img3' alt='image'/>
          </div>
        </div>
      </div>
      </div>
      {/* mobile */}
      <div className='m-view'>
      <div className='row'>
      <div className='col-md-5'>
          <div className='section-2'>
            <img src={image3} className='img3' alt='image'/>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='section-1 container'>
          <img src={image2} className='img2' alt='image'/>
            <p className='hero-text'>Host your meeting with world-class amenities. Starting at <span className='text-orange'>₹199/-!</span></p>
          </div>
        </div>
        
      </div>
      </div>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home