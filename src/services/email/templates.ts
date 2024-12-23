import type { ContactFormData, BookingFormData } from './types';

export const createContactTemplate = (data: ContactFormData) => ({
  to_name: '5Way Contractors',
  from_name: `${data.firstName} ${data.lastName}`,
  from_email: data.email,
  phone: data.phone,
  project_type: data.projectType,
  message: data.message,
  reply_to: data.email
});

export const createBookingTemplate = (data: BookingFormData) => ({
  to_name: '5Way Contractors',
  consultation_date: data.date,
  time_slot: data.timeSlot,
  consultation_type: data.consultationType,
  project_details: data.details
});