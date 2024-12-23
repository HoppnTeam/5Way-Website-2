export const EMAIL_TEMPLATES = {
  CONTACT: {
    id: 'template_contact',
    subject: 'New Contact Form Submission'
  },
  BOOKING: {
    id: 'template_booking',
    subject: 'New Consultation Booking'
  }
} as const;

export const PROJECT_TYPES = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation',
  'Interior Design',
  'Smart Home Integration',
  'Other'
] as const;

export const CONSULTATION_TYPES = [
  'Initial Consultation',
  'Project Planning',
  'Site Visit',
  'Design Review',
  'Budget Planning'
] as const;