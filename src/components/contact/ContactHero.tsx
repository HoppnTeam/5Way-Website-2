import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactHero() {
  return (
    <div className="relative h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-green-500 mb-4">
            <Phone className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's Build Together
          </h1>
          <p className="text-xl text-gray-200">
            Get in touch with our team to discuss your construction needs
          </p>
        </div>
      </div>
    </div>
  );
}