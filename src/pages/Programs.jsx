import Section from "../components/Section";

const programs = [
  {
    slug: "open-circles",
    title: "Nyitott Körök",
    essence: "Belépés a térbe. Egy este, ahol igazat mondunk.",
    who: "Kezdőknek és visszatérőknek.",
    expect: ["Őszinte kör", "Testgyakorlatok", "Rövid rítus"],
    duration: "Egy este",
  },
  {
    slug: "szabadeses-2d",
    title: "2 napos Szabadesés",
    essence: "Intenzív munka. Határ, erő, megtartás.",
    who: "Akik többet akarnak, mint egy este.",
    expect: ["Kihívás", "Keret és felelősség", "Természet-kapcsolat"],
    duration: "2 nap",
  },
  {
    slug: "beavatas-4d",
    title: "4 napos Beavatás",
    essence: "Természet-alapú beavatás. Archetipikus munka.",
    who: "Akik készek belépni a rítusba.",
    expect: ["Kültéri elemek", "Csend és tűz", "Közösség"],
    duration: "4 nap",
  },
  {
    slug: "wolf-pack",
    title: "Wolf Pack",
    essence: "Hosszútávú vezetői vonal. Elköteleződés. Szolgálat.",
    who: "Vezetővé érni vágyó férfiaknak.",
    expect: ["Mentorálás", "Szolgálat", "Közös munka"],
    duration: "Folyamatos",
  },
];

export default function Programs() {
  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Programok</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Minden út belül kezdődik.</p>
      </Section>

      <Section tone="light">
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <article key={p.slug} className="p-6 border border-[#7A7F85]/30 bg-white/60 rounded-md">
              <div className="text-xs tracking-wider text-[#7A7F85]">{p.duration}</div>
              <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 text-[#111315]/80">{p.essence}</p>
              <div className="mt-3 text-sm text-[#111315]/70">Kinek: {p.who}</div>
              <ul className="mt-3 list-disc list-inside text-sm text-[#111315]/80">
                {p.expect.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <a href={`/join?program=${p.slug}`} className="inline-flex items-center rounded-md bg-[#173F2A] text-[#ECE7E1] px-4 py-2 text-sm font-semibold hover:bg-[#145233] transition-colors">Jelentkezem</a>
                <a href="/info" className="inline-flex items-center rounded-md border border-[#7A7F85]/40 text-[#111315] px-4 py-2 text-sm font-semibold hover:bg-black/5 transition-colors">Dátumok és árak</a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
