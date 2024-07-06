import React from 'react';
import imageloc from '../../../Assets/assistant_direction.png';
import btnimg from '../../../Assets/Vector-ar.png';
import btnimg1 from '../../../Assets/Vector-ar1.png';
import btnimg2 from '../../../Assets/Vector-ar2.png';

function Section3Card(props) {
  return (
    <div>
        <div className='card'>
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='head2'>{props.name}</h2>
                    </div>
                    <a href='#' className='distance'>
                        <img src={imageloc} alt=''/>
                        <div className='distance-p'>{props.dist} Kms</div>
                    </a>
                </div>
                <div className='card-img'>
                    <div className='card-tag'>
                    <img src={props.typeicon} className='me-1' alt=''/>
                     {props.space}
                     </div>
                </div>
                <div className='d-flex'>
                    <a href='#' className='btn-grey'>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='pass'>Day Pass</div>
                            <div className='price'>&#8377; 249<span>/ Day</span></div>
                        </div>
                        <div className='d-flex'>
                        <img src={btnimg} alt=''/>
                        <img src={btnimg1} alt=''/>
                        <img src={btnimg2} alt=''/>
                        </div>
                        </div>
                    </a>
                    <a href='#' className='btn-orange'>
                    <div className='d-flex justify-content-center'>
                    <div className='btn-tag'>
                     20% Discount
                    </div>
                    </div>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='pass'>Bulk Pass</div>
                            <div className='price'>&#8377; 2400<span>/ 10 Day</span></div>
                        </div>
                        <div className='d-flex'>
                        <img src={btnimg} alt=''/>
                        <img src={btnimg1} alt=''/>
                        <img src={btnimg2} alt=''/>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3Card