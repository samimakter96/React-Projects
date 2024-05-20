import React from 'react'
import brandLogo from '../assets/brand_logo.png';

const Navigation = () => {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
          <img src={brandLogo} alt="logo" />
        </div>

        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation