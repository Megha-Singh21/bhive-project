import React from 'react';
import logo from '../../Assets/image-54.png';
import image1 from '../../Assets/call.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light">
  <div className="container">
    <a href='#' className="navbar-brand">
      <img src={logo} alt='logo'/>
    </a>
    <div className='calldiv'>
    
     <a href='tel:+91' target='_blank'>
    <div className='call-img'>
      <img src={image1} alt='image'/>
      </div>
    </a>
    </div>
  </div>
    </nav>
    </div>
  )
}

export default Navbar