import React from 'react';


function RectCard(props) {
  return (
    <div>
        <div className='d-flex p-4 align-items-center'>
            <div>
                <img src={props.image4} alt='image'/>
            </div>
            <div>
                <p className='rect-p ms-3 '>{props.content1}</p>
                </div>
        </div>
    </div>
  )
}

export default RectCard