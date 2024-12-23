import React from 'react';
import { Calendar, Clock, Users, Building } from 'lucide-react';
import { Button } from '../ui/Button';
import { useForm } from '../../hooks/useForm';
import { validateBookingForm } from '../../utils/validation';
import EmailService from '../../services/email/emailService';
import type { BookingFormData } from '../../types/email';

const timeSlots = [
  { id: '1', time: '09:00', period: 'AM' },
  { id: '2', time: '10:00', period: 'AM' },
  { id: '3', time: '11:00', period: 'AM' },
  { id: '4', time: '02:00', period: 'PM' },
  { id: '5', time: '03:00', period: 'PM' },
  { id: '6', time: '04:00', period: 'PM' }
];

const consultationTypes = [
  'Initial Consultation',
  'Project Planning',
  'Site Visit',
  'Design Review',
  'Budget Planning'
];

const initialData: BookingFormData = {
  date: '',
  timeSlot: '',
  consultationType: '',
  details: ''
};

export default function BookingForm() {
  const {
    formData,
    status,
    handleSubmit,
    handleChange
  } = useForm({
    initialData,
    onSubmit: async (data) => {
      await EmailService.sendBookingEmail(data);
    },
    onSuccess: () => {
      console.log('Booking submitted successfully');
    },
    onError: (error) => {
      console.error('Booking submission failed:', error);
    },
    validate: (data) => validateBookingForm(data).length === 0
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="timeSlot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              required
            >
              <option value="">Select a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.time} {slot.period}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-1">
          Consultation Type
        </label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          >
            <option value="">Select consultation type</option>
            {consultationTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-3 text-gray-400" />
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Please provide brief details about your project..."
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Scheduling...' : 'Schedule Consultation'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Consultation scheduled successfully!</p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-center">Failed to schedule consultation. Please try again.</p>
      )}
    </form>
  );
}