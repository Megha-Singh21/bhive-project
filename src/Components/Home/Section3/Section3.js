import React from 'react';
import Section3Card from './Section3Card';
import './Section3.css';
import icon1 from '../../../Assets/Group-5.png';
import icon2 from '../../../Assets/mdi_honey-outline.png';
import icon3 from '../../../Assets/Vector-4.png';
import icon4 from '../../../Assets/Group-6.png';
import icon5 from '../../../Assets/Vector-5.png';
import imagearrow from '../../../Assets/Arrow-1.png';

function Section3() {
  return (
    <div>
        <div className='container pt-5'>
        <h1 className='head1 d-view'>Our Space Overview</h1>
        <div className='m-view'>
        <div className='d-flex justify-content-between align-items-center'>
                <h1 className='head1 mb-0'>Our Spaces</h1>
                <div>
                <img src={imagearrow} alt=''/>
                </div>
            </div>
        </div>
        <div className='row mt-5 mb-5'>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector 6, Service Road"
                    dist="6"
                    typeicon={icon1}
                    space="Workspace"
                />
            </div>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector 6, Service Road"
                    dist="6"
                    typeicon={icon2}
                    space="Honeykomb"
                />
            </div>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector -6, 5th main Road"
                    dist="6"
                    typeicon={icon3}
                    space="Platinum"
                />
            </div>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector -2, 27th main Road"
                    dist="6"
                    typeicon={icon1}
                    space="Worksapce"
                />
            </div>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector 6, Service Road"
                    dist="6"
                    typeicon={icon4}
                    space="Campus"
                />
            </div>
            <div className='col-md-4 mt-3'>
                <Section3Card
                    name="HSR Sector -6, 5th main Road"
                    dist="6"
                    typeicon={icon5}
                    space="Premium"
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section3