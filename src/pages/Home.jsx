import Section from "../components/Section";
import Hero from "../components/Hero";

export default function Home() {
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
        <div id="events" className="mt-8 grid md:grid-cols-3 gap-6"></div>
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
