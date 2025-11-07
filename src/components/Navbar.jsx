import { useState } from 'react';
import { Bell, Search, Menu, Settings, School } from 'lucide-react';

export default function Navbar({ onToggleSidebar }) {
  const [query, setQuery] = useState('');

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-sky-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-sky-700 hover:bg-sky-50 focus:outline-none"
            aria-label="Open navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
              <School className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sky-900">Sistem Informasi Sekolah</p>
              <p className="text-xs text-sky-600">Modern Dashboard</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-sky-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari siswa, guru, kelas..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-sky-50 text-sky-900 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 border border-sky-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-sky-50 text-sky-700" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-sky-50 text-sky-700" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
          <div className="ml-2 h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 shadow ring-2 ring-white/50" />
        </div>
      </div>
    </header>
  );
}
