import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  relative">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-3xl shadow-lg text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-mono text-white font-bold mb-4">
          CodeEthnics
        </h1>
        <p className="text-lg md:text-xl font-mono text-white/80">
          Code It For You
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <FaChevronDown className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Hero;


