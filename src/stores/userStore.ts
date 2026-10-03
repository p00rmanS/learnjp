import { create } from 'zustand';
import { db } from '@/db';
import type { User } from '@/types';

interface UserStore {
  user: User | null;
  isLoading: boolean;
  initializeUser: () => Promise<void>;
  updateUserGoal: (minutesGoal: number) => Promise<void>;
  updateFuriganaMode: (mode: 'always' | 'unlearned' | 'never') => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: true,

  initializeUser: async () => {
    set({ isLoading: true });
    try {
      let user = await db.users.toCollection().first();

      if (!user) {
        user = {
          id: 'user_' + Date.now(),
          displayName: 'Learner',
          dailyMinutesGoal: 30,
          furiganaMode: 'unlearned',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        await db.users.add(user);
      }

      set({ user, isLoading: false });
    } catch (error) {
      console.error('Failed to initialize user:', error);
      set({ isLoading: false });
    }
  },

  updateUserGoal: async (minutesGoal: number) => {
    const { user } = useUserStore.getState();
    if (!user) return;

    const updated = { ...user, dailyMinutesGoal: minutesGoal, updatedAt: new Date() };
    await db.users.update(user.id, { dailyMinutesGoal: minutesGoal, updatedAt: new Date() });
    set({ user: updated });
  },

  updateFuriganaMode: async (mode: 'always' | 'unlearned' | 'never') => {
    const { user } = useUserStore.getState();
    if (!user) return;

    const updated = { ...user, furiganaMode: mode, updatedAt: new Date() };
    await db.users.update(user.id, { furiganaMode: mode, updatedAt: new Date() });
    set({ user: updated });
  },
}));
