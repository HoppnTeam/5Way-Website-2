import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] py-8 lg:py-16 sm:min-h-[700px]">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-[48px] lg:!leading-[60px] text-white sm:text-5xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Building Your Vision, One Step at a Time—Seamlessly, Sustainably, Successfully.
            </h1>
            <p className="max-w-2xl text-xl text-gray-200 sm:text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Expert Construction and Finishing Services in Nigeria for Individuals, Businesses, and the Nigerian Diaspora.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="px-8 py-4 text-lg">
                Get Your Free Consultation Today
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/services">
                <Button
                  variant="secondary"
                  className="px-8 py-4 text-lg text-white border-2 bg-white/10 hover:bg-white/20 border-white/20"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid max-w-2xl grid-cols-2 gap-6 mt-12 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">150+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">13+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="hidden p-4 rounded-lg sm:block bg-white/10 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
}