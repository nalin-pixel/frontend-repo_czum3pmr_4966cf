import Section from "../components/Section";

const leaders = [
  {
    name: "András",
    stance: "Nem vagyok guru. Jelen vagyok.",
    bio: "Férfi vagyok, aki dolgozik magán, és teret tart másoknak. Eszközeim egyszerűek: jelenlét, őszinteség, felelősség.",
    photo_url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Máté",
    stance: "Maszkok nélkül.",
    bio: "A testtel dolgozom. A határ tisztelete, a felelősség gyakorlása, a közösség ereje tart.",
    photo_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Leaders() {
  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Vezetők</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Emberközeli, jelenlétes portrék. Nincs díszlet.</p>
      </Section>

      <Section tone="light">
        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((l) => (
            <article key={l.name} className="border border-[#7A7F85]/30 rounded-md overflow-hidden bg-white/60">
              <img src={l.photo_url} alt={l.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{l.name}</h3>
                <div className="text-sm text-[#7A7F85]">{l.stance}</div>
                <p className="mt-3 text-[#111315]/80">{l.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
