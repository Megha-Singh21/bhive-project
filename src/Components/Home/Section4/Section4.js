import React from 'react';
import './Section4.css';
import image001 from '../../../Assets/image-1938.png';
import image002 from '../../../Assets/image-1939.png';
import image003 from '../../../Assets/Group-1000007102.png';
import imagearrow from '../../../Assets/Arrow-1.png';
import image004 from '../../../Assets/Mask-group-1.png';

function Section4() {
  return (
    <div>
        <div className='container pt-5 pb-5'>
        <h1 className='head1 d-view'>Download our app now</h1>
        <div className='m-view'>
        <div className='d-flex justify-content-between align-items-center'>
                <h1 className='head1 mb-0'>Download our app now</h1>
                <div>
                <img src={imagearrow} alt=''/>
                </div>
            </div>
        </div>
        <div className='d-view'>
        <div className='bg-rect d-flex align-items-center'>
            <div className='row'>
                <div className='col-md-6'></div>
                <div className='col-md-6'>
                    <div className=''>
                        <div className='content-footer'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</div>
                        <div className='mt-4'>
                        <a href='#'><img src={image001} alt=''/></a>
                        <a href='#' className='ms-3'><img src={image002} alt=''/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='footer-img d-view'>
            <img src={image003} alt=''/>
        </div>

        {/* mobile */}
        <div className='m-view'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='bg-rect1'>
                        <img src={image004} width="100%" alt=''/>
                        <div className='mt-2 text-center'>
                        <a href='#'><img src={image001} alt=''/></a>
                        <a href='#' className='ms-3'><img src={image002} alt=''/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section4