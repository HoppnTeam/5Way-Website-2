import React from 'react';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import OfficeHours from './OfficeHours';
import AdminLink from './AdminLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">5Way General Contractors</h3>
            <p className="text-gray-100 mb-4">Building excellence through innovation and dedication.</p>
            <SocialLinks />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ContactInfo />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <QuickLinks />
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Office Hours</h3>
            <OfficeHours />
          </div>
        </div>

        {/* Copyright and Admin Link */}
        <div className="pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-100">&copy; {currentYear} 5Way General Contractors Nigeria Limited. All rights reserved.</p>
            <AdminLink />
          </div>
        </div>
      </div>
    </footer>
  );
}