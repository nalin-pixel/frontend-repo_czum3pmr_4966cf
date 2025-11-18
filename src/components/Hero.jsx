export default function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[480px] flex items-end bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-6xl mx-auto px-4 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#ECE7E1] tracking-tight">Visszatérés Önmagadhoz.</h1>
        <p className="mt-4 text-lg md:text-xl text-[#ECE7E1]/90">Férfitér. Keret. Munka. Testben-lét.</p>
        <p className="mt-1 text-sm text-[#ECE7E1]/70">Nem ígérünk semmit. Teret tartunk a valóságnak.</p>
        <div className="mt-8 flex gap-3">
          <a href="/join" className="inline-flex items-center rounded-md bg-[#173F2A] text-[#ECE7E1] px-5 py-3 text-sm font-semibold hover:bg-[#145233] transition-colors">Csatlakozom a Körhöz</a>
          <a href="/programs" className="inline-flex items-center rounded-md border border-[#ECE7E1]/30 text-[#ECE7E1] px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">Megnézem a dátumokat</a>
        </div>
      </div>
    </div>
  );
}
