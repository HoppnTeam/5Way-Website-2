import React from 'react';
import { Wrench } from 'lucide-react';

export default function ServicesHero() {
  return (
    <div className="relative h-[400px]">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: 'url("/services-hero.webp")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4 text-green-500">
            <Wrench className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">Our Services</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Comprehensive Construction Solutions
          </h1>
          <p className="text-xl text-gray-200">
            At 5Way General Contractors Nigeria Limited, we offer comprehensive construction services designed to deliver exceptional quality, innovation, and sustainability. We ensure every project is executed to meet the highest standards, from concept to completion. Our services are categorized into five key areas:
          </p>
        </div>
      </div>
    </div>
  );
}