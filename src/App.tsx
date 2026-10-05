import { useEffect } from 'react';
import { useUserStore } from '@/stores/userStore';
import { initializeDatabase } from '@/db';
import Home from '@/components/Home';
import Loading from '@/components/Loading';

function App() {
  const { isLoading, initializeUser } = useUserStore();

  useEffect(() => {
    async function setup() {
      await initializeDatabase();
      await initializeUser();
    }
    setup();
  }, [initializeUser]);

  if (isLoading) {
    return <Loading />;
  }

  return <Home />;
}

export default App;
