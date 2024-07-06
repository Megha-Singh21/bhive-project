import React from 'react';


function RectCard1(props) {
  return (
    <div className='card1'>
        <div className='p-3 text-center'>
            <div>
                <img src={props.image4} alt='image'/>
            </div>
            <div>
                <p className='rect-p mt-2'>{props.content1}</p>
                </div>
        </div>
    </div>
  )
}

export default RectCard1