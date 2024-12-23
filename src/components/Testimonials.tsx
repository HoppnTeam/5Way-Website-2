import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "5Way transformed our office space beyond our expectations. Their attention to detail and professionalism is unmatched.",
    author: "John Okafor",
    position: "CEO, TechSpace Nigeria"
  },
  {
    text: "The team's expertise in sustainable building practices helped us achieve our green building goals while staying within budget.",
    author: "Sarah Adebayo",
    position: "Property Developer"
  },
  {
    text: "Outstanding service from start to finish. Their commitment to quality and timeline adherence is impressive.",
    author: "Michael Eze",
    position: "Real Estate Investor"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="relative">
          <div className="flex justify-center mb-8">
            <Quote className="w-16 h-16 text-green-700" />
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">{testimonials[current].text}</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-gray-500">{testimonials[current].position}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-green-700' : 'bg-gray-300'
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}