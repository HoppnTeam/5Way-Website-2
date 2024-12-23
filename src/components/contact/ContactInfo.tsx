import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Construction Way, Victoria Island, Lagos, Nigeria'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+234 (0) 123 456 7890'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@5way.com.ng'
  }
];

const workingHours = [
  'Monday - Friday: 8:00 AM - 6:00 PM',
  'Saturday: 9:00 AM - 2:00 PM',
  'Sunday: Closed'
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <detail.icon className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h3>
            <p className="text-gray-600">{detail.content}</p>
          </div>
        </div>
      ))}

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <Clock className="w-6 h-6 text-green-700" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h3>
          <ul className="space-y-1 text-gray-600">
            {workingHours.map((hours, index) => (
              <li key={index}>{hours}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}