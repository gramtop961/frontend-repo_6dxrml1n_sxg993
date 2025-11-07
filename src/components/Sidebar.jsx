import { Home, Users, Calendar, BookOpen, Megaphone, ClipboardList, GraduationCap, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Siswa' },
  { icon: GraduationCap, label: 'Guru' },
  { icon: BookOpen, label: 'Nilai' },
  { icon: Calendar, label: 'Jadwal' },
  { icon: ClipboardList, label: 'Absensi' },
  { icon: Megaphone, label: 'Pengumuman' },
  { icon: Settings, label: 'Pengaturan' },
];

export default function Sidebar({ open }) {
  return (
    <aside
      className={`${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static fixed inset-y-0 left-0 z-30 w-72 bg-white/90 backdrop-blur border-r border-sky-100 transition-transform duration-200`}
      aria-label="Sidebar navigation"
    >
      <div className="h-16" />
      <nav className="px-3 py-4 space-y-1">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sky-700 hover:bg-sky-50 focus:outline-none"
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sky-100 bg-white/70">
        <div className="rounded-lg bg-gradient-to-br from-sky-50 to-white p-4">
          <p className="text-xs text-sky-600">Akses cepat</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {['Siswa', 'Guru', 'Jadwal', 'Nilai'].map((item) => (
              <button key={item} className="px-2.5 py-2 rounded-md bg-white border border-sky-100 text-sky-700 text-sm hover:bg-sky-50">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
