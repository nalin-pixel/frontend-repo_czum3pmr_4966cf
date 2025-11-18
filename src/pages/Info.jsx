import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

const FALLBACK_FAQ = [
  { q: "Biztonságos ez?", a: "Igen. A keret egyértelmű: bizalmasság, határok, egymás tisztelete." },
  { q: "Kinek való?", a: "Annak, aki kész dolgozni magán. Nem terápiás pótlék." },
  { q: "Mi történik, ha túl sok?", a: "Megállhatsz. Mondhatod. A tested a határ." },
  { q: "Hozzak valamit?", a: "Víz, jegyzet, kényelmes ruha. Beavatáshoz kültéri felszerelés." },
];

export default function Info() {
  const [faqs, setFaqs] = useState(FALLBACK_FAQ);
  const [events, setEvents] = useState([]);
  const [loadingFaq, setLoadingFaq] = useState(false);
  const [loadingEvents, setLoadingEvents] = useState(false);

  const faqEndpoint = useMemo(() => `${BACKEND}/api/faq`, []);
  const eventsEndpoint = useMemo(() => `${BACKEND}/api/events`, []);

  useEffect(() => {
    let ignore = false;
    const loadFAQ = async () => {
      if (!BACKEND) return;
      try {
        setLoadingFaq(true);
        const res = await fetch(faqEndpoint);
        if (!res.ok) throw new Error("Nem érhető el");
        const data = await res.json();
        if (!ignore && Array.isArray(data) && data.length) setFaqs(data);
      } catch (e) {
        // fallback
      } finally {
        setLoadingFaq(false);
      }
    };
    const loadEvents = async () => {
      if (!BACKEND) return;
      try {
        setLoadingEvents(true);
        const res = await fetch(eventsEndpoint);
        if (!res.ok) throw new Error("Nem érhető el");
        const data = await res.json();
        if (!ignore && Array.isArray(data)) setEvents(data);
      } catch (e) {
        // ignore
      } finally {
        setLoadingEvents(false);
      }
    };
    loadFAQ();
    loadEvents();
    return () => { ignore = true; };
  }, [faqEndpoint, eventsEndpoint]);

  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Gyakorlati tudnivalók</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Dátumok, jelentkezés, árak, logisztika.</p>
      </Section>

      <Section tone="light">
        <h2 className="text-xl font-bold">Következő időpontok</h2>
        {loadingEvents && <div className="mt-2 text-sm text-[#7A7F85]">Betöltés…</div>}
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {events.length === 0 && (
            <div className="text-sm text-[#7A7F85]">Jelenleg nincs nyilvános időpont. Nézz vissza később.</div>
          )}
          {events.map((ev) => {
            const start = new Date(ev.starts_at);
            const end = ev.ends_at ? new Date(ev.ends_at) : null;
            return (
              <div key={`${ev.program_slug}-${ev.title}-${ev.starts_at}`} className="p-4 border border-[#7A7F85]/30 rounded-md bg-white/60">
                <div className="font-semibold">{ev.title}</div>
                <div className="text-sm text-[#111315]/80">{ev.city || ""}</div>
                <div className="text-sm mt-1">{start.toLocaleDateString()} {start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  {end && ` – ${end.toLocaleDateString()} ${end.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`}
                </div>
                {typeof ev.price_huf === 'number' && (
                  <div className="text-sm mt-2">Ár: {new Intl.NumberFormat('hu-HU').format(ev.price_huf)} Ft</div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="light">
        <h2 className="text-xl font-bold">GYIK</h2>
        {loadingFaq && <div className="mt-2 text-sm text-[#7A7F85]">Betöltés…</div>}
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
