import React from 'react'
import './Section2.css';
import RectCard from './RectCard';
import i4 from '../../../Assets/Group-1000007107.png';
import i5 from '../../../Assets/Group-2.png';
import i6 from '../../../Assets/Vector.png';
import i7 from '../../../Assets/Group-4.png';
import i8 from '../../../Assets/Group-1.png';
import i9 from '../../../Assets/Group-3.png';
import i10 from '../../../Assets/Vector-1.png';
import i11 from '../../../Assets/Vector-2.png';
import image5 from '../../../Assets/Vector-8.png';
import imagearrow from '../../../Assets/Arrow-1.png';
import RectCard1 from './RectCard1';

function Section2() {
  return (
    <div>
        <div className='container pb-5 pt-5'>
        <div className='d-view'>
            <h1 className='head1'>Why Choose us?</h1>
            <div className='row mt-5'>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i4}
                    content1="Community Events"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i5}
                    content1="Gym Facilities"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i6}
                    content1="High-Speed WiFi"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i7}
                    content1="Cafe & Tea Bar"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={image5} alt='image'/>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i8}
                    content1="Affordable"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i9}
                    content1="Comfort Lounges"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i10}
                    content1="Quick Booking"
                    />
                </div>
                <div className='col-md-3'>
                    <RectCard 
                    image4={i11}
                    content1="Sports Area"
                    />
                </div>
            </div>
            </div>

            {/* mobile */}
            <div className='m-view'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='head1'>Why Choose us?</h1>
                <div>
                <img src={imagearrow} alt=''/>
                </div>
            </div>
            <div className='d-flex'>
            <RectCard1 
                    image4={i4}
                    content1="Community Events"
                    />
                   <RectCard1
                    image4={i5}
                    content1="Gym Facilities"
                    />
                    
            </div>
            <div className='d-flex'>
            <RectCard1 
                    image4={i6}
                    content1="High-Speed WiFi"
                    />
                    <RectCard1 
                    image4={i7}
                    content1="Cafe & Tea Bar"
                    />
            </div>
            <div className='d-flex'>
            <RectCard1 
                    image4={i8}
                    content1="Affordable"
                    />
                    <RectCard1 
                    image4={i9}
                    content1="Comfort Lounges"
                    />
            </div>
            <div className='d-flex'>
            <RectCard1 
                    image4={i10}
                    content1="Quick Booking"
                    />
                    <RectCard1 
                    image4={i11}
                    content1="Sports Area"
                    />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2