import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { SocialLinks } from "@/components/SocialLinks";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Linktree | Nuestro Proyecto" },
      { name: "description", content: "Encuentra todos nuestros enlaces, equipo y galería en un solo lugar." },
      { property: "og:title", content: "Linktree | Nuestro Proyecto" },
      { property: "og:description", content: "Encuentra todos nuestros enlaces, equipo y galería en un solo lugar." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ambient gradient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col gap-8 px-5 py-12">
        <Header />
        <SocialLinks />
        <About />
        <Team />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
