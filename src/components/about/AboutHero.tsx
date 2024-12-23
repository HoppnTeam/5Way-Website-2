import React from 'react';

export default function AboutHero() {
  return (
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Together We Build With Passion
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Building excellence through innovation and dedication since 2010, serving Nigeria with world-class construction solutions.
          </p>
        </div>
      </div>
    </div>
  );
}