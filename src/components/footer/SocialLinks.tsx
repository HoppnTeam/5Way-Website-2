import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { 
    icon: Facebook, 
    href: 'https://facebook.com/5waycontractors', 
    label: 'Facebook',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com/5waycontractors', 
    label: 'Twitter',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com/5waycontractors', 
    label: 'Instagram',
    color: 'hover:text-pink-400'
  },
  { 
    icon: Youtube, 
    href: 'https://youtube.com/5waycontractors', 
    label: 'YouTube',
    color: 'hover:text-red-500'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/5waycontractors', 
    label: 'LinkedIn',
    color: 'hover:text-blue-500'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label, color }) => (
        <a 
          key={label}
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-100 transition-colors ${color}`}
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}