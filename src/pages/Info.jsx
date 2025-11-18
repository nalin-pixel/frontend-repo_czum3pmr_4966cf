import Section from "../components/Section";

const faqs = [
  { q: "Biztonságos ez?", a: "Igen. A keret egyértelmű: bizalmasság, határok, egymás tisztelete." },
  { q: "Kinek való?", a: "Annak, aki kész dolgozni magán. Nem terápiás pótlék." },
  { q: "Mi történik, ha túl sok?", a: "Megállhatsz. Mondhatod. A tested a határ." },
  { q: "Hozzak valamit?", a: "Víz, jegyzet, kényelmes ruha. Beavatáshoz kültéri felszerelés." },
];

const dates = [
  { title: "Nyitott Kör – Budapest", when: "Kedd 19:00–21:30", price: "5 000 Ft" },
  { title: "Szabadesés – 2 nap", when: "Március 23–24", price: "65 000 Ft" },
  { title: "Beavatás – 4 nap", when: "Május 16–19", price: "140 000 Ft" },
];

export default function Info() {
  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Gyakorlati tudnivalók</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Dátumok, jelentkezés, árak, logisztika.</p>
      </Section>

      <Section tone="light">
        <h2 className="text-xl font-bold">Következő időpontok</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {dates.map((d) => (
            <div key={d.title} className="p-4 border border-[#7A7F85]/30 rounded-md bg-white/60">
              <div className="font-semibold">{d.title}</div>
              <div className="text-sm text-[#111315]/80">{d.when}</div>
              <div className="text-sm mt-2">Ár: {d.price}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <h2 className="text-xl font-bold">GYIK</h2>
        <div className="mt-4 divide-y divide-[#7A7F85]/30 border border-[#7A7F85]/30 rounded-md bg-white/50">
          {faqs.map((f) => (
            <details key={f.q} className="p-4 group">
              <summary className="cursor-pointer font-medium list-none">{f.q}</summary>
              <p className="mt-2 text-sm text-[#111315]/80">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
