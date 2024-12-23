import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function QuickLinks() {
  return (
    <ul className="space-y-2">
      {quickLinks.map(({ href, label }) => (
        <li key={label}>
          <Link 
            to={href} 
            className="text-gray-100 hover:text-white transition-colors"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}