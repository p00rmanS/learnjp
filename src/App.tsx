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

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      <Home />
    </div>
  );
}

export default App;
