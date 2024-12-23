import React from 'react';
import Layout from '../components/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import SocialMedia from '../components/contact/SocialMedia';
import Map from '../components/contact/Map';

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <ContactForm />
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <ContactInfo />
            <SocialMedia />
            <div className="mt-12">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}