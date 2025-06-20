import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero-bg.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute w-full h-full"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.5) 50%, transparent 60%, transparent 100%)'
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 right-0 z-20 p-6 w-screen bg-black">
        <button 
          className="bg-black text-white transition-color"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-full w-full px-8 lg:px-16">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Hello, I'm Shivam Tadas
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            a B.tech CSE student, currently studying at<br />
            Shri Ramdeobaba College of Engineering<br />
            and Management
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-white/80 py-4 text-center cursor-pointer hover:bg-white transition-colors z-10"
        onClick={handleScrollDown}
      >
        <p className="text-black text-sm">Scroll down to view more</p>
        <div className="mt-2 flex justify-center">
          <svg className="w-5 h-5 text-black animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;