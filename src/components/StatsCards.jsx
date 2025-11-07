import { Users, ClipboardCheck, BookOpen, Calendar } from 'lucide-react';

const stats = [
  {
    title: 'Total Siswa',
    value: '1,248',
    change: '+2.4% bulan ini',
    icon: Users,
  },
  {
    title: 'Kehadiran Hari Ini',
    value: '96.2%',
    change: '+0.8% dari kemarin',
    icon: ClipboardCheck,
  },
  {
    title: 'Rata-rata Nilai',
    value: '86',
    change: '+1 poin semester ini',
    icon: BookOpen,
  },
  {
    title: 'Kelas Berjalan',
    value: '34',
    change: '12 sedang berlangsung',
    icon: Calendar,
  },
];

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ title, value, change, icon: Icon }) => (
        <div key={title} className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-sky-100 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sky-600 text-sm">{title}</p>
              <p className="mt-2 text-2xl font-semibold text-sky-900">{value}</p>
              <p className="mt-1 text-xs text-sky-600">{change}</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
