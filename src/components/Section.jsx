export default function Section({ children, tone = 'light', className = '' }) {
  const bg = tone === 'dark' ? 'bg-[#111315] text-[#ECE7E1]' : 'bg-[#ECE7E1] text-[#111315]';
  return (
    <section className={`${bg} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 py-16">{children}</div>
    </section>
  );
}
