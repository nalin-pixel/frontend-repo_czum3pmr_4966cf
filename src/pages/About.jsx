import Section from "../components/Section";

export default function About() {
  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Mi az AMA?</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-8 text-[#ECE7E1]/90">
          <p>Küldetésünk: teret tartani a férfimunkának — biztonságos, szent keretben. Nem „javítunk meg” senkit. Nem ígérünk gyors megoldást. Jelen vagyunk. Dolgozunk. Felelősségben maradunk.</p>
          <p>A munka egyszerű. Őszinte beszéd. Testben-lét. Határok. A keret tart: bizalmasság, egymás tisztelete, felelősség.</p>
        </div>
      </Section>

      <Section tone="light">
        <h2 className="text-2xl font-bold">CHAOS alapelvek</h2>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {[
            { t: "Confidentiality", s: "Bizalmasság", d: "Ami a körben elhangzik, ott marad." },
            { t: "Hitelesség", s: "Hitelesség", d: "Nem játszunk szerepeket. Nem díszítünk." },
            { t: "Acceptance", s: "Elfogadás", d: "Úgy jössz, ahogy vagy. Ítélkezés nélkül." },
            { t: "Ownership", s: "Felelősség", d: "A saját történeted és döntéseid a tieid." },
            { t: "Sacredness", s: "Szakrális tér", d: "Tisztelet, jelenlét, egyszerűség." },
          ].map((p) => (
            <div key={p.t} className="p-4 border border-[#7A7F85]/30 rounded-md bg-white/60">
              <div className="text-xs tracking-wider text-[#7A7F85]">{p.t}</div>
              <div className="font-semibold">{p.s}</div>
              <p className="text-sm text-[#111315]/80 mt-1">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <h2 className="text-2xl font-bold">Mit jelent a „férfimunka”?</h2>
        <div className="mt-4 md:w-3/4">
          <p>Találkozás a valósággal. Testben. A határoddal. Az igazságoddal. Nem spirituális díszlet — gyakorlati, földszagú, őszinte.</p>
        </div>
      </Section>
    </main>
  );
}
