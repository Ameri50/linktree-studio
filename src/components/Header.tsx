import { profile } from "@/config/links";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-col items-center text-center animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 blur-xl" />
        <div className="relative h-28 w-28 rounded-full bg-zinc-900 ring-2 ring-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
          {profile.logo ? (
            <img src={profile.logo} alt={profile.name} className="h-full w-full object-cover" />
          ) : (
            <Sparkles className="h-12 w-12 text-white/80" />
          )}
        </div>
      </div>
      <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white">{profile.name}</h1>
      <p className="mt-2 max-w-sm text-sm text-zinc-400">{profile.description}</p>
    </header>
  );
}
