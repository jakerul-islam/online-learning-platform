"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>
          
          <p className="mt-6 text-lg text-gray-200">
            Learn Web Development, Design, Marketing and more from industry experts.
            Build your career with real-world skills.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
        {/* <Image
        src="https://i.ibb.co.com/6bQqk9H/online-learning.png"
            alt="learning"
            width={200} height={200}
            // className="w-full max-w-md mx-auto"
        /> */}

        </div>
      </div>
    </section>
  );
};

export default Hero;