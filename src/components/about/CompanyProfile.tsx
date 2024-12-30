import React from 'react';
import { Building2 } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4 text-green-700">
              <Building2 className="w-8 h-8" />
              <span className="text-xl font-semibold">Our Story</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Leading Construction Excellence in Nigeria
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At <strong className='text-black'>5Way General Contractors Nigeria Limited,</strong>  we believe that every project is a partnership built on trust, precision, and passion. Headquartered in GRA, Port Harcourt, we provide high-quality construction finishing services tailored to meet the unique needs of clients in Nigeria&apos;s South-South, South-East regions, Lagos, and Abuja.
              </p>
              <p>
                Our core clients include individuals, businesses, NGOs, and public agencies, with a particular focus on the Nigerian Diaspora seeking to build or oversee construction projects in Nigeria.
              </p>
              <p>
                We offer a full spectrum of construction services, including <strong className='text-black'>painting, concrete works, roof coatings, landscaping, building restoration and renovation, tiling, epoxy coatings, solar lighting and power, smart home automation, and sustainable building solutions.</strong>
              </p>
              <p>
                By combining traditional craftsmanship with modern technology, we deliver innovative and environmentally responsible projects that improve lives and create lasting value.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute p-6 bg-white rounded-lg shadow-lg -bottom-6 -right-6">
              <p className="text-4xl font-bold text-green-700">13+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}