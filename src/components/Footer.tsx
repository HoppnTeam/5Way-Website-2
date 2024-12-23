import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'Github' }
  ];

  const quickLinks = [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'Diaspora Package' },
    { href: '#', label: 'Contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+234 (0) 123 456 7890' },
    { icon: Mail, text: 'info@5way.com.ng' },
    { icon: MapPin, text: 'Lagos, Nigeria' }
  ];

  const officeHours = [
    'Monday - Friday: 8:00 AM - 6:00 PM',
    'Saturday: 9:00 AM - 2:00 PM',
    'Sunday: Closed'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">5Way General Contractors</h3>
            <p className="text-gray-400 mb-4">Building excellence through innovation and dedication.</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-400">
              {officeHours.map((hours) => (
                <li key={hours}>{hours}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} 5Way General Contractors Nigeria Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}