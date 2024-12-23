import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './emailConfig';

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.USER_ID);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface BookingFormData {
  date: string;
  timeSlot: string;
  consultationType: string;
  details: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  try {
    const templateParams = {
      to_name: '5Way Contractors',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      project_type: data.projectType,
      message: data.message,
      reply_to: data.email // Add reply_to field
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams,
      EMAIL_CONFIG.USER_ID // Add user ID here
    );

    return response;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

export const sendBookingEmail = async (data: BookingFormData) => {
  try {
    const templateParams = {
      to_name: '5Way Contractors',
      consultation_date: data.date,
      time_slot: data.timeSlot,
      consultation_type: data.consultationType,
      project_details: data.details
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_BOOKING,
      templateParams,
      EMAIL_CONFIG.USER_ID // Add user ID here
    );

    return response;
  } catch (error) {
    console.error('Error sending booking email:', error);
    throw error;
  }
};