export const timeSlots = [
  { id: '1', time: '09:00', period: 'AM' },
  { id: '2', time: '10:00', period: 'AM' },
  { id: '3', time: '11:00', period: 'AM' },
  { id: '4', time: '02:00', period: 'PM' },
  { id: '5', time: '03:00', period: 'PM' },
  { id: '6', time: '04:00', period: 'PM' }
] as const;

export const consultationTypes = [
  'Initial Consultation',
  'Project Planning',
  'Site Visit',
  'Design Review',
  'Budget Planning'
] as const;