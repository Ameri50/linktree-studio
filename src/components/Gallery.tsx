import { useEffect, useState } from "react";
import { gallery } from "@/config/links";
import { X } from "lucide-react";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-white">Galería</h2>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {gallery.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="aspect-square overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-white/30"
          >
            <img
              src={src}
              alt={`Foto ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
