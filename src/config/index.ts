import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dawid Motłoch  — DevOps & Python Developer",
  author: "Dawid Motłoch",
  description:
  "Inżynier DevOps i Python Developer z pasją do automatyzacji. Specjalizuję się w budowaniu stabilnej infrastruktury, konteneryzacji oraz zarządzaniu systemami i chmurą.",
  lang: "pl",
  siteLogo: "/black.png",
  navLinks: [
    { text: "Doświadczenie & Certyfikaty", href: "#experience" },
    { text: "Projekty", href: "#projects" },
    { text: "O mnie", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/dawidmot" },
    { text: "Github", href: "https://github.com/dawid2077" },/*
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },*/
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dawid Motłoch",
    specialty: "Devops & Python Developer",
    summary:
    "Aspirujący Inżynier DevOps i Python Developer z pasją do automatyzacji. Specjalizuję się w budowaniu stabilnej infrastruktury, konteneryzacji oraz zarządzaniu systemami i chmurą.",
    email: "dawidmot78@gmail.com",
  },
  experience: [
    {
      company: "MULTIKOM IT",
      position: "Praktykant",
      startDate: "Marzec 2026",
      endDate: "Marzec 2026",
      summary:
        "Spędziłem miesiąc na praktykach ucząc sie wirtualizacji używając systemu operacyjnego Proxmox",
    },
    {
      company: "Technikum TME im. Nikoli Tesli",
      position: "Uczeń",
      startDate: "Wrzesień 2023",
      endDate: "Czerwiec 2028",
      summary:
        "Jestem uczniem klasy 3 na profilu technik informatyk",
    },
    /*
    {
      company: "Certyfikaty",
      position: "Oracle",
      startDate: "Maj 2026",
      endDate: "Maj 2028",
      summary:
        "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    },
    */
  ],
  projects: [
    {
      name: "OpenFaust",
      summary: " A highly customizable Discord companion with your own persona defined in a personality.md file, featuring a specialized dual-model pipeline. ",
      /*linkPreview: "/",*/
      linkSource: "https://github.com/dawid2077/OpenFaust",
      image: "/faust_arrow.drawio.png",
    },
    {
      name: "Vaultwarden-Homelab",
      summary: " Secure, self-hosted credential management system featuring automated multi-site synchronization, containerized deployment, and high-availability backup redundancy. ",
      linkSource: "https://github.com/dawid2077/vaultwarden-homelab",
      image: "/vaultwarden.drawio.png",
    },
    {
      name: "Oracle Cloud",
      summary: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      linkSource: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6AC297C47276726502DE9FA53D5C60B9D5CC07206774C6C686CD79C76B1E42C",
      image: "/oracle.png",
    }
    /* !!! important add hackathon info + school stem project and add certificatess*/
    /*,
    
    {
      name: "Proxmox Homelab",
      summary: "My homelab server based on proxmox developed during intern at MULTIKOM IT",
      linkPreview: "/",
      linkSource: "https://github.com/dawid2077/",
      image: "/proxmox.png",
    },
    */
  ],
  about: {
    description: `
    Cześć! Jestem pasjonatem infrastruktury sieciowej, chmury oraz programowania w Pythonie. Uwielbiam pracować na styku kodu i systemów operacyjnych, co udowadniam, rozwijając własne środowisko laboratoryjne (Homelab) oparte na Proxmoxie oraz projektując automatyzacje, takie jak zaawansowane boty czy systemy niezawodnych kopii zapasowych.

    W swoich projektach kładę ogromny nacisk na bezpieczeństwo, konteneryzację (Docker) oraz chmurę – posiadam certyfikat OCI Foundations Associate, który potwierdza moją wiedzę z zakresu architektury chmurowej. Zamiast gotowych rozwiązań, lubię rozumieć, jak systemy działają pod maską.

    Poza technologią, moją wielką pasją jest matematyka, która ukształtowała moje analityczne podejście do rozwiązywania problemów i optymalizacji kodu. Interesuję się również inwestowaniem – traktuję je jak kolejny fascynujący system pełen danych, algorytmów i zarządzania ryzykiem, co idealnie współgra z moim inżynierskim podejściem do życia.
    `,
    /*image: "/black.png",*/
  },
};

// #5755ff
