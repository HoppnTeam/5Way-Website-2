import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <div className="relative h-[600px] sm:h-[700px]">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Building Dreams Into Reality
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Premium Construction Services for Nigerians at Home and Abroad
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20"
              >
                View Our Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">13+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="hidden sm:block bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}