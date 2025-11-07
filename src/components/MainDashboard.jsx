import { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, FileText, Users, Megaphone, Clock } from 'lucide-react';

const students = [
  { id: 1, name: 'Aisyah Putri', class: 'XII IPA 1', attendance: 'Hadir' },
  { id: 2, name: 'Budi Santoso', class: 'XII IPS 2', attendance: 'Izin' },
  { id: 3, name: 'Chandra Wijaya', class: 'XI TKJ 1', attendance: 'Hadir' },
  { id: 4, name: 'Dewi Lestari', class: 'X IPA 2', attendance: 'Alpa' },
];

const announcements = [
  {
    id: 1,
    title: 'Ujian Tengah Semester',
    desc: 'Jadwal UTS dimulai 20 November. Mohon persiapkan materi.',
    time: '2 jam lalu',
  },
  {
    id: 2,
    title: 'Ekstrakurikuler Dibuka',
    desc: 'Pendaftaran ekskul semester genap telah dibuka hingga 10 Nov.',
    time: 'Kemarin',
  },
];

export default function MainDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-sky-900">Dashboard</h1>
            <p className="text-sky-600 text-sm">Ringkasan data sekolah dan aktivitas terbaru</p>
          </div>
          <div className="flex items-center gap-2">
            {['Overview', 'Siswa', 'Absensi', 'Nilai'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-lg text-sm border ${activeTab === tab ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-sky-700 border-sky-200 hover:bg-sky-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Attendance & Grades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h2 className="font-semibold text-sky-900">Kehadiran Hari Ini</h2>
                  </div>
                  <span className="text-xs text-sky-600">07 Nov 2025</span>
                </div>
                <div className="space-y-3">
                  {students.map((s) => (
                    <div key={s.id} className="flex items-center justify-between p-3 rounded-lg border border-sky-100 bg-white">
                      <div>
                        <p className="font-medium text-sky-900">{s.name}</p>
                        <p className="text-xs text-sky-600">{s.class}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${s.attendance === 'Hadir' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : s.attendance === 'Izin' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>{s.attendance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h2 className="font-semibold text-sky-900">Rekap Nilai</h2>
                  </div>
                  <span className="text-xs text-sky-600">Semester Ganjil</span>
                </div>
                <div className="space-y-3">
                  {[
                    { subject: 'Matematika', grade: 88 },
                    { subject: 'Bahasa Indonesia', grade: 90 },
                    { subject: 'Fisika', grade: 84 },
                    { subject: 'Sejarah', grade: 82 },
                  ].map((g) => (
                    <div key={g.subject} className="flex items-center justify-between p-3 rounded-lg border border-sky-100 bg-white">
                      <p className="text-sky-900">{g.subject}</p>
                      <span className="font-semibold text-sky-800">{g.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <h2 className="font-semibold text-sky-900">Jadwal Hari Ini</h2>
                </div>
                <button className="text-sm text-sky-600 hover:text-sky-700">Lihat Kalender</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { time: '07:30 - 09:00', subject: 'Matematika', teacher: 'Ibu Sari', room: 'A-101' },
                  { time: '09:15 - 10:45', subject: 'Bahasa Inggris', teacher: 'Pak Dwi', room: 'B-203' },
                  { time: '11:00 - 12:30', subject: 'Fisika', teacher: 'Pak Rudi', room: 'Lab 1' },
                  { time: '13:30 - 15:00', subject: 'Sejarah', teacher: 'Ibu Nia', room: 'C-102' },
                ].map((item) => (
                  <div key={item.subject} className="p-3 rounded-lg border border-sky-100 bg-white">
                    <p className="text-xs text-sky-600">{item.time}</p>
                    <p className="font-medium text-sky-900">{item.subject}</p>
                    <p className="text-sm text-sky-700">{item.teacher} • {item.room}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <h2 className="font-semibold text-sky-900">Statistik Siswa</h2>
                </div>
                <span className="text-xs text-sky-600">Tahun Ajaran 2025/2026</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sky-700">Siswa Aktif</p>
                  <span className="font-semibold text-sky-900">1,248</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sky-700">Rasio L/P</p>
                  <span className="font-semibold text-sky-900">52% / 48%</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sky-700">Kelas</p>
                  <span className="font-semibold text-sky-900">36</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur border border-sky-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <h2 className="font-semibold text-sky-900">Pengumuman</h2>
                </div>
                <button className="text-sm text-sky-600 hover:text-sky-700">Lihat Semua</button>
              </div>
              <div className="space-y-3">
                {announcements.map((a) => (
                  <div key={a.id} className="p-3 rounded-lg border border-sky-100 bg-white">
                    <p className="font-medium text-sky-900">{a.title}</p>
                    <p className="text-sm text-sky-700">{a.desc}</p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-sky-600">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{a.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
