export default function HeroHeader() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white/80 p-6 shadow-sm">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-sky-900">Selamat datang di Sistem Informasi Sekolah</h2>
        <p className="mt-1 text-sky-700 max-w-2xl">Kelola data siswa, absensi, nilai, jadwal, dan pengumuman dalam satu dashboard yang modern, cepat, dan responsif.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-sky-50 text-sky-700 border border-sky-100">Responsive</span>
          <span className="px-3 py-1 text-xs rounded-full bg-sky-50 text-sky-700 border border-sky-100">Modern UI</span>
          <span className="px-3 py-1 text-xs rounded-full bg-sky-50 text-sky-700 border border-sky-100">High Quality</span>
        </div>
      </div>
    </div>
  );
}
