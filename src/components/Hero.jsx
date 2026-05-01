"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      
      {/* Gradient Background (FIXED) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500 blur-[150px] sm:blur-[200px] opacity-40 top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-pink-500 blur-[150px] sm:blur-[200px] opacity-40 bottom-[-100px] right-[-100px]" />
        <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-400 blur-[120px] sm:blur-[180px] opacity-30 bottom-[-150px] left-[30%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        
        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Upgrade Your <br className="hidden sm:block" />
          Skills Today 🚀
        </h1>

        <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
          Learn Web Development, Design, Marketing and more from industry experts.
          Build your career with real-world skills.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          
          <button className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full font-medium transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 active:scale-95">
            Explore Courses
          </button>

          <button className="w-full sm:w-auto border  border-gray-500 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105 active:scale-95">
            Get Started
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;