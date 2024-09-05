import React from 'react';
import image from '../assets/header.png';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Transforming
          Ideas into
          Digital Realities</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven
          tore veritatis et quasi architecto</p>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
         
      </div>
   
      <div className="hero-right">
        <img src={image} alt="Hero" className="hero-image" />
        
      </div>
      <div className='hero-button'></div>
    </section>
  );
}

export default HeroSection;
