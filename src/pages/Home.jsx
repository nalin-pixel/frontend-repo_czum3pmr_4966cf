import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const endpoint = useMemo(() => `${BACKEND}/api/events`, []);

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      if (!BACKEND) return;
      try {
        setLoading(true);
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Nem érhető el");
        const data = await res.json();
        if (!ignore && Array.isArray(data)) setEvents(data.slice(0, 3));
      } catch (e) {
        // ignore silently; section will show CTA
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => { ignore = true; };
  }, [endpoint]);

  return (
    <main>
      <Hero />

      <Section tone="light">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Tér", text: "Biztonság, megtartás. Egyszerű keret, világos határok." },
            { title: "Keret", text: "Szabályok, felelősség. A valóságot tartjuk, nem a történetet." },
            { title: "Út", text: "Folyamat és beavatás. Nem élmény, hanem munka." },
          ].map((b) => (
            <div key={b.title} className="p-6 border border-[#7A7F85]/30 bg-white/50 rounded-md">
              <div className="text-xs tracking-wider text-[#7A7F85]">CHAOS</div>
              <h3 className="mt-2 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-[#111315]/80">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <h2 className="text-2xl md:text-3xl font-extrabold">Közelgő események</h2>
        <p className="mt-2 text-[#ECE7E1]/80">Egy este, két nap, négy nap — más mélységek, ugyanaz a jelenlét.</p>
        {loading && <div className="mt-4 text-sm text-[#ECE7E1]/70">Betöltés…</div>}
        <div id="events" className="mt-8 grid md:grid-cols-3 gap-6">
          {events.map((ev) => {
            const start = new Date(ev.starts_at);
            return (
              <div key={`${ev.program_slug}-${ev.title}-${ev.starts_at}`} className="p-5 border border-white/15 rounded-md bg-white/5">
                <div className="text-sm text-[#ECE7E1]/70">{ev.program_slug}</div>
                <div className="mt-1 text-xl font-bold text-[#ECE7E1]">{ev.title}</div>
                <div className="mt-2 text-sm text-[#ECE7E1]/80">{ev.city || ""}</div>
                <div className="mt-2 text-sm text-[#ECE7E1]/80">{start.toLocaleDateString()} {start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                <a href="/programs" className="mt-4 inline-flex items-center rounded-md border border-[#ECE7E1]/30 text-[#ECE7E1] px-3 py-2 text-xs font-semibold hover:bg-white/10 transition-colors">Részletek</a>
              </div>
            );
          })}
        </div>
        {events.length === 0 && !loading && (
          <p className="mt-6 text-sm text-[#ECE7E1]/70">Nincs közzétett esemény. Nézz vissza később, vagy iratkozz fel a Programok oldalán.</p>
        )}
        <p className="mt-6 text-sm text-[#ECE7E1]/70">Több időpontért nézd meg a Programok oldalt.</p>
      </Section>

      <Section tone="light">
        <div className="md:w-3/4">
          <p className="text-lg">Az All Male Area nem klub és nem „program”. Tér, keret és út — férfiaknak, akik készek dolgozni magukon. Maszkok nélkül. Körben. A testtel. A földdel.</p>
        </div>
      </Section>
    </main>
  );
}
