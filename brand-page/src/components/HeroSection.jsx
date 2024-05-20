import React from 'react'
import Amazon from '../assets/amazon.png'
import FlipCart from '../assets/flipkart.png'
import shoe from '../assets/shoe_image.png'

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className='secondary-btn'>Category</button>
        </div>

        <div className="shopping">
          <p>Also available On</p>

          <div className="brand-icons">
            <img src={Amazon} alt="amazon" />
            <img src={FlipCart} alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="shoe" />
      </div>
    </main>
  );
}

export default HeroSection