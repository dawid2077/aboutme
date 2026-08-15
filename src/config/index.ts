import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dawid Motłoch — DevOps & Python Developer",
  author: "Dawid Motłoch",
  description:
  "Inżynier DevOps i Python Developer z pasją do automatyzacji. Specjalizuję się w budowaniu stabilnej infrastruktury, konteneryzacji oraz zarządzaniu systemami i chmurą.",
  lang: "pl",
  siteLogo: "/black.png",
  navLinks: [
    { text: "In English🇬🇧", href: "index_english"},
    { text: "Doświadczenie", href: "#experience" },
    { text: "Projekty & Certyfikaty", href: "#projects" },
    { text: "O mnie", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/dawidmot" },
    { text: "Github", href: "https://github.com/dawid2077" },/*
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },*/
  ],
  socialImage: "/preview.png",
  canonicalURL: "https://dawidm.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dawid Motłoch",
    specialty: "DevOps & Python Developer",
    summary:
    "Aspirujący Inżynier DevOps i Python Developer z pasją do nauki wszystkiego związanego z informatyką. Specjalizuję się w programowaniu, konteneryzacji oraz zarządzaniu systemami i chmurą.",
    email: "dawidmot78@gmail.com",
  },
  experience: [
    {
      company: "MS Medical PRO",
      position: "Serwisant sprzętu medycznego (USG)",
      startDate: "Marzec 2026",
      endDate: "obecnie",
      summary:
        "Obecnie pracuję naprawiając,wykonując przeglądy i diagnozując aparaty USG o wartości po 100 tysięcy złotych."
    },
    {
      company: "MULTIKOM IT",
      position: "Praktykant",
      startDate: "Marzec 2026",
      endDate: "Marzec 2026",
      summary:
        "Konfiguracja oraz zarządzanie środowiskiem wirtualizacji opartym na Proxmox VE.",
    },
    {
      company: "TME im. Nikoli Tesli",
      position: "Uczeń",
      startDate: "Wrzesień 2023",
      endDate: "Czerwiec 2028",
      summary:
        "Jestem uczniem klasy 3 na profilu technik informatyk.",
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
      summary: "Wysoce konfigurowalny bot do Discorda o personalizacji zdefiniowanej w pliku personality.md, wykorzystujący specjalistyczny potok przetwarzania oparty na dwóch modelach (dual-model pipeline).",
      /*linkPreview: "/",*/
      linkSource: "https://github.com/dawid2077/OpenFaust",
      image: "/faust_arrow.drawio.png",
    },
    {
      name: "Vaultwarden-Homelab",
      summary: " Bezpieczny, lokalnie hostowany (self-hosted) system zarządzania danymi logowania, oferujący automatyczną synchronizację między wieloma witrynami, wdrożenie kontenerowe oraz wysoki poziom dostępności dzięki nadmiarowości kopii zapasowych.",
      linkSource: "https://github.com/dawid2077/vaultwarden-homelab",
      image: "/vaultwarden.drawio.png",
    },
    {
      name: "Oracle Cloud",
      summary: "Certyfikat Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      linkSource: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6AC297C47276726502DE9FA53D5C60B9D5CC07206774C6C686CD79C76B1E42C",
      image: "/oracle.png",
    },
    {
      name: "C2 English EFSET",
      summary: "C2 English Certificate proficient at reading and listening.",
      linkSource: "https://cert.efset.org/en/d7buQs",
      image: "/efset.png",
    }

    /* ! !! important add hackathon info + school stem project and add certificatess*/
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
    description: [
      "Ponad 2 lata doświadczenia z Pythonem oraz ponad rok pracy z chmurą, homelabem i self-hostingiem.",
      "Zaufanie i ostrożność – pracuję na co dzień z aparatami USG wartymi ok. 100 tysięcy złotych za sztukę.",
      "Komunikacja – kontakt z dyrektorami i personelem medycznym w szpitalach w całej Polsce.",
      "Troubleshooting – wyszukiwanie błędów i usterek, analiza logów, testowanie sprawności sprzętu.",
      "Jestem pasjonatem infrastruktury sieciowej, chmury oraz programowania w Pythonie.",
      "Rozwijam własne środowisko laboratoryjne (Homelab) oparte na Proxmoxie.",
      "Projektuję automatyzacje, takie jak zaawansowane boty czy systemy niezawodnych kopii zapasowych.",
      "Kładę duży nacisk na bezpieczeństwo, konteneryzację (Docker) oraz chmurę – posiadam certyfikat OCI Foundations Associate.",
      "Wolę rozumieć, jak systemy działają „pod maską”, zamiast polegać na gotowych rozwiązaniach.",
      "Poza technologią pasjonuję się matematyką, która ukształtowała moje analityczne podejście do rozwiązywania problemów.",
      "Interesuję się inwestowaniem – traktuję je jak system pełen danych, algorytmów i zarządzania ryzykiem.",
    ],
    /* TU BEDZIE LINK DO BLOGA
    image: "/black.png",*/
  },
};

// #5755ff
