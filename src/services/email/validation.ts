import type { ContactFormData, BookingFormData } from './types';

export const validateContactForm = (data: ContactFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.email.includes('@')) {
    errors.push('Please enter a valid email address');
  }
  
  if (data.phone.length < 10) {
    errors.push('Please enter a valid phone number');
  }
  
  if (data.message.length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return errors;
};

export const validateBookingForm = (data: BookingFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.date) {
    errors.push('Please select a date');
  }
  
  if (!data.timeSlot) {
    errors.push('Please select a time slot');
  }
  
  if (!data.consultationType) {
    errors.push('Please select a consultation type');
  }
  
  return errors;
};