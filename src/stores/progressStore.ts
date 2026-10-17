import { create } from 'zustand';
import { loadProgressSummary, type ProgressSummary } from '@/services/progress';

interface ProgressStore {
  summary: ProgressSummary | null;
  refresh: () => Promise<void>;
}

export const useProgressStore = create<ProgressStore>((set) => ({
  summary: null,
  refresh: async () => {
    try {
      set({ summary: await loadProgressSummary() });
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  },
}));
