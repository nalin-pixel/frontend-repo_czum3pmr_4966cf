import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";

const FALLBACK_TESTIMONIALS = [
  { text: "Először féltem megszólalni. Aztán kimondtam. Nem estem szét. Tartottak.", author: "D., 34" },
  { text: "Nem élmény volt. Munka volt. Pont erre volt szükségem.", author: "M., 41" },
  { text: "Megtanultam nemet mondani. Magamnak is.", author: "B., 28" },
];

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Testimonials() {
  const [items, setItems] = useState(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(false);
  const endpoint = useMemo(() => `${BACKEND}/api/testimonials`, []);

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      if (!BACKEND) return;
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Nem érhető el");
        const data = await res.json();
        if (!ignore && Array.isArray(data) && data.length) {
          setItems(data.map((t) => ({ text: t.text, author: [t.author, t.age && `${t.age}`, t.city].filter(Boolean).join(', ') })));
        }
      } catch (e) {
        // keep fallback
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => { ignore = true; };
  }, [endpoint]);

  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Férfiak igazat mondanak</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Rövid, nyers, valós megszólalások.</p>
      </Section>

      <Section tone="light">
        {loading && <div className="mb-4 text-sm text-[#7A7F85]">Betöltés…</div>}
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <blockquote key={i} className="p-6 border border-[#7A7F85]/30 rounded-md bg-white/60">
              <p className="text-lg">“{t.text}”</p>
              {t.author && <footer className="mt-3 text-sm text-[#7A7F85]">{t.author}</footer>}
            </blockquote>
          ))}
        </div>
      </Section>
    </main>
  );
}
