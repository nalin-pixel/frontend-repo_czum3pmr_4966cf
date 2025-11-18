import { useEffect, useState, useMemo } from "react";
import Section from "../components/Section";

const FALLBACK_PROGRAMS = [
  {
    slug: "open-circles",
    title: "Nyitott Körök",
    essence: "Belépés a térbe. Egy este, ahol igazat mondunk.",
    who: "Kezdőknek és visszatérőknek.",
    expect: ["Őszinte kör", "Testgyakorlatok", "Rövid rítus"],
    duration: "Egy este",
    order: 1,
  },
  {
    slug: "szabadeses-2d",
    title: "2 napos Szabadesés",
    essence: "Intenzív munka. Határ, erő, megtartás.",
    who: "Akik többet akarnak, mint egy este.",
    expect: ["Kihívás", "Keret és felelősség", "Természet-kapcsolat"],
    duration: "2 nap",
    order: 2,
  },
  {
    slug: "beavatas-4d",
    title: "4 napos Beavatás",
    essence: "Természet-alapú beavatás. Archetipikus munka.",
    who: "Akik készek belépni a rítusba.",
    expect: ["Kültéri elemek", "Csend és tűz", "Közösség"],
    duration: "4 nap",
    order: 3,
  },
  {
    slug: "wolf-pack",
    title: "Wolf Pack",
    essence: "Hosszútávú vezetői vonal. Elköteleződés. Szolgálat.",
    who: "Vezetővé érni vágyó férfiaknak.",
    expect: ["Mentorálás", "Szolgálat", "Közös munka"],
    duration: "Folyamatos",
    order: 4,
  },
];

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Programs() {
  const [programs, setPrograms] = useState(FALLBACK_PROGRAMS);
  const [loading, setLoading] = useState(false);
  const endpoint = useMemo(() => `${BACKEND}/api/programs`, []);

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      if (!BACKEND) return; // stay with fallback
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Nem érhető el");
        const data = await res.json();
        if (!ignore && Array.isArray(data) && data.length) {
          setPrograms(data);
        }
      } catch (e) {
        // keep fallback silently
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      ignore = true;
    };
  }, [endpoint]);

  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Programok</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Minden út belül kezdődik.</p>
      </Section>

      <Section tone="light">
        {loading && (
          <div className="mb-4 text-sm text-[#7A7F85]">Betöltés…</div>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {programs
            .slice()
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((p) => (
              <article key={p.slug} className="p-6 border border-[#7A7F85]/30 bg-white/60 rounded-md">
                <div className="text-xs tracking-wider text-[#7A7F85]">{p.duration}</div>
                <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-[#111315]/80">{p.essence}</p>
                {p.who && (
                  <div className="mt-3 text-sm text-[#111315]/70">Kinek: {p.who}</div>
                )}
                {Array.isArray(p.expect) && p.expect.length > 0 && (
                  <ul className="mt-3 list-disc list-inside text-sm text-[#111315]/80">
                    {p.expect.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                )}
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
