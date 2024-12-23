import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { 
    icon: Phone, 
    text: '+234 (0) 123 456 7890',
    href: 'tel:+2341234567890'
  },
  { 
    icon: Mail, 
    text: 'info@5way.com.ng',
    href: 'mailto:info@5way.com.ng'
  },
  { 
    icon: MapPin, 
    text: 'Lagos, Nigeria',
    href: 'https://goo.gl/maps/123' // Replace with actual Google Maps link
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      {contactInfo.map(({ icon: Icon, text, href }) => (
        <a
          key={text}
          href={href}
          className="flex items-center space-x-3 text-gray-100 hover:text-white transition-colors"
        >
          <Icon className="w-5 h-5 text-white" />
          <span>{text}</span>
        </a>
      ))}
    </div>
  );
}