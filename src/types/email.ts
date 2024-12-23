export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface BookingFormData {
  date: string;
  timeSlot: string;
  consultationType: string;
  details: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}