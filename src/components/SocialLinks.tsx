import { socialLinks } from "@/config/links";
import { ArrowUpRight } from "lucide-react";

export function SocialLinks() {
  return (
    <section className="flex flex-col gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)]"
          >
            <div className="flex items-center gap-4">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: link.color }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-white">{link.name}</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </a>
        );
      })}
    </section>
  );
}
