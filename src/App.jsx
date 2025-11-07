import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import StatsCards from './components/StatsCards';
import MainDashboard from './components/MainDashboard';
import HeroHeader from './components/HeroHeader';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-sky-900">
      <Navbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <HeroHeader />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <StatsCards />
      </div>

      <div className="relative flex">
        <Sidebar open={sidebarOpen} />
        <MainDashboard />
      </div>

      <footer className="mt-8 border-t border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-sky-600 flex items-center justify-between">
          <p>© 2025 Sistem Informasi Sekolah — Modern UI/UX</p>
          <p>Responsive • 16:9 friendly • High Quality</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
