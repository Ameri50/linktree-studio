import { team } from "@/config/links";

export function Team() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-white">Nuestro Equipo</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
        {team.map((m) => (
          <div
            key={m.name}
            className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900"
          >
            <div className="mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105">
              <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-white">{m.name}</h3>
            <p className="text-xs text-fuchsia-400">{m.role}</p>
            <p className="mt-1 text-xs text-zinc-500">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
