import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: 'url("/about-us-hero.webp")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <h1 className="mb-4 text-5xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Together We Build With Passion
          </h1>
          <p className="max-w-2xl text-xl text-gray-200">
            Building excellence through innovation and dedication since 2010, serving Nigeria with world-class construction solutions.
          </p>
        </div>
      </div>
    </div>
  );
}