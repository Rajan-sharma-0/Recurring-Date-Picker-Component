import { create } from 'zustand';

export const useRecurrenceStore = create((set) => ({
  frequency: 'daily',
  interval: 1,
  daysOfWeek: [],
  customPattern: '',
  startDate: '',
  endDate: '',
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
  setCustomPattern: (pattern) => set({ customPattern: pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
