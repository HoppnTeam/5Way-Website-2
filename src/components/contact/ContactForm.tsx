import React from 'react';
import { useForm } from '../../hooks/useForm';
import { validateContactForm } from '../../utils/validation';
import EmailService from '../../services/email/emailService';
import { Button } from '../ui/Button';
import type { ContactFormData } from '../../types/email';

const PROJECT_TYPES = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation',
  'Interior Design',
  'Smart Home Integration',
  'Other'
] as const;

const initialData: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
};

export default function ContactForm() {
  const {
    formData,
    status,
    handleSubmit,
    handleChange
  } = useForm({
    initialData,
    onSubmit: async (data) => {
      const response = await EmailService.sendContactEmail(data);
      if (response.status !== 200) {
        throw new Error(response.text);
      }
    },
    onSuccess: () => {
      console.log('Message sent successfully');
    },
    onError: (error) => {
      console.error('Failed to send message:', error);
    },
    validate: (data) => validateContactForm(data).length === 0
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        >
          <option value="">Select project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}