import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Join() {
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", program_slug: "", intention: "" });

  // Prefill program from query string
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const program = params.get("program") || "";
    if (program) setForm((f) => ({ ...f, program_slug: program }));
  }, []);

  const endpoint = useMemo(() => `${BACKEND}/api/register`, []);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Küldés...");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Hiba történt");
      setStatus("Köszönjük. Jelentkezésed megérkezett.");
      setForm({ name: "", email: "", phone: "", program_slug: "", intention: "" });
    } catch (err) {
      setStatus(String(err.message || err));
    }
  };

  return (
    <main>
      <Section tone="dark">
        <h1 className="text-3xl md:text-4xl font-extrabold">Belépés a térbe</h1>
        <p className="mt-2 text-[#ECE7E1]/80">Mondd el röviden, miért jössz. Nem pontosságot nézünk, hanem jelenlétet.</p>
      </Section>

      <Section tone="light">
        {!BACKEND && (
          <div className="mb-4 text-sm text-[#B33A2F]">A beküldéshez be kell állítani a szerver címét (VITE_BACKEND_URL).</div>
        )}
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div>
            <label className="block text-sm font-medium">Név</label>
            <input required value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-md border border-[#7A7F85]/40 p-2 bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" required value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-md border border-[#7A7F85]/40 p-2 bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium">Telefon</label>
            <input value={form.phone} onChange={(e)=>setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border border-[#7A7F85]/40 p-2 bg-white" />
          </div>
          <div>
            <label className="block text-sm font-medium">Program</label>
            <select value={form.program_slug} onChange={(e)=>setForm({ ...form, program_slug: e.target.value })} className="mt-1 w-full rounded-md border border-[#7A7F85]/40 p-2 bg-white">
              <option value="">Válassz…</option>
              <option value="open-circles">Nyitott Kör</option>
              <option value="szabadeses-2d">2 napos Szabadesés</option>
              <option value="beavatas-4d">4 napos Beavatás</option>
              <option value="wolf-pack">Wolf Pack</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Rövid szándék</label>
            <textarea rows={5} value={form.intention} onChange={(e)=>setForm({ ...form, intention: e.target.value })} className="mt-1 w-full rounded-md border border-[#7A7F85]/40 p-2 bg-white" />
            <p className="mt-2 text-xs text-[#7A7F85]">Az adataid velünk maradnak. Nem adjuk tovább.</p>
          </div>
          <div>
            <button disabled={!BACKEND} className="inline-flex items-center rounded-md bg-[#173F2A] text-[#ECE7E1] px-5 py-2 text-sm font-semibold hover:bg-[#145233] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">Küldés</button>
          </div>
          {status && <div className="text-sm text-[#111315]/80">{status}</div>}
        </form>
      </Section>
    </main>
  );
}
