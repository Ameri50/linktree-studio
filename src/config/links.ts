import { Instagram, Music2, Youtube, Facebook, Twitter, MessageCircle, type LucideIcon } from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export const profile = {
  name: "Nuestro Proyecto",
  description: "Creamos contenido y experiencias para conectar con nuestra comunidad.",
  logo: "", // optional image URL
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://instagram.com", icon: Instagram, color: "#E1306C" },
  { name: "TikTok", url: "https://tiktok.com", icon: Music2, color: "#ffffff" },
  { name: "YouTube", url: "https://youtube.com", icon: Youtube, color: "#FF0000" },
  { name: "Facebook", url: "https://facebook.com", icon: Facebook, color: "#1877F2" },
  { name: "X (Twitter)", url: "https://x.com", icon: Twitter, color: "#ffffff" },
  { name: "WhatsApp", url: "https://wa.me/000000000", icon: MessageCircle, color: "#25D366" },
];

export const team = [
  { name: "Ana López", role: "Directora Creativa", bio: "Lidera la visión creativa del proyecto.", photo: "https://i.pravatar.cc/200?img=47" },
  { name: "Carlos Ruiz", role: "Productor", bio: "Encargado de la producción audiovisual.", photo: "https://i.pravatar.cc/200?img=12" },
  { name: "María Gómez", role: "Community Manager", bio: "Conecta con nuestra comunidad cada día.", photo: "https://i.pravatar.cc/200?img=32" },
  { name: "Luis Pérez", role: "Editor", bio: "Da vida a las ideas en cada video.", photo: "https://i.pravatar.cc/200?img=15" },
];

export const gallery = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/gal${i + 1}/600/600`);

export const contact = {
  email: "contacto@proyecto.com",
  whatsapp: "+1 234 567 890",
  address: "Ciudad, País",
};
