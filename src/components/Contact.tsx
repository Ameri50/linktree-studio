import { contact } from "@/config/links";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const items = [
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: contact.whatsapp, href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` },
    { icon: MapPin, label: contact.address, href: undefined },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold text-white">Contacto</h2>
      <ul className="space-y-3">
        {items.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
              >
                <Icon className="h-4 w-4 text-fuchsia-400" />
                {label}
              </a>
            ) : (
              <span className="flex items-center gap-3 text-sm text-zinc-400">
                <Icon className="h-4 w-4 text-fuchsia-400" />
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
