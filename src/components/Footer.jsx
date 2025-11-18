export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#7A7F85]/20 bg-[#111315] text-[#ECE7E1]/80">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} All Male Area. Minden jog fenntartva.</p>
        <div className="text-xs text-[#7A7F85]">Bizalmasság • Jelenlét • Felelősség</div>
      </div>
    </footer>
  );
}
