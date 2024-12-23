export interface ConsultationType {
  id: string;
  label: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  period: 'AM' | 'PM';
}

export interface BookingFormData {
  date: string;
  timeSlot: string;
  consultationType: string;
  details: string;
}