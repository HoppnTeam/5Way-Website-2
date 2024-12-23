import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://facebook.com/5waycontractors',
    label: 'Facebook',
    color: 'hover:bg-blue-600'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/5waycontractors',
    label: 'Twitter',
    color: 'hover:bg-blue-400'
  },
  {
    icon: Instagram,
    href: 'https://instagram.com/5waycontractors',
    label: 'Instagram',
    color: 'hover:bg-pink-600'
  },
  {
    icon: Youtube,
    href: 'https://youtube.com/5waycontractors',
    label: 'YouTube',
    color: 'hover:bg-red-600'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/5waycontractors',
    label: 'LinkedIn',
    color: 'hover:bg-blue-700'
  }
];

export default function SocialMedia() {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all ${color} hover:text-white`}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}