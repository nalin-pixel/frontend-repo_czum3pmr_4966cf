import Section from "../components/Section";

const testimonials = [
  { text: "Először féltem megszólalni. Aztán kimondtam. Nem estem szét. Tartottak.", author: "D., 34" },
  { text: "Nem élmény volt. Munka volt. Pont erre volt szükségem.", author: "M., 41" },
  { text: "Megtanultam nemet mondani. Magamnak is.", author: "B., 28" },
];

export default function Testimonials() {
  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Férfiak igazat mondanak</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Rövid, nyers, valós megszólalások.</p>
      </Section>

      <Section tone="light">
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-6 border border-[#7A7F85]/30 rounded-md bg-white/60">
              <p className="text-lg">“{t.text}”</p>
              <footer className="mt-3 text-sm text-[#7A7F85]">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </main>
  );
}
