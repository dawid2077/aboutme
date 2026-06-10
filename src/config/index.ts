import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dawid Motłoch  — Mobile & Web Developer",
  author: "Dawid Motłoch",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "pl",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Doświadczenie", href: "#experience" },
    { text: "Projekty", href: "#projects" },
    { text: "O mnie", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/dawidmot" },
    { text: "Github", href: "https://github.com/dawid2077" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dawid Motłoch",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "dawidmot78@gmail.com",
  },
  experience: [
    {
      company: "MULTIKOM IT",
      position: "Praktykant",
      startDate: "Marzec 2026",
      endDate: "Marzec 2026",
      summary:
        "Spędziłem miesiąc na praktykach ucząc sie wirtualizacji systemu operacyjnego Proxmox",
    }
  ],
  projects: [
    {
      name: "OpenFaust",
      summary: " A highly customizable Discord companion with your own persona defined in a personality.md file, featuring a specialized dual-model pipeline. ",
      linkPreview: "/",
      linkSource: "https://github.com/dawid2077/OpenFaust",
      image: "/spotifu.png",
    },
    {
      name: "Vaultwarden-Homelab",
      summary: " Secure, self-hosted credential management system featuring automated multi-site synchronization, containerized deployment, and high-availability backup redundancy. ",
      linkPreview: "/",
      linkSource: "https://github.com/dawid2077/vaultwarden-homelab",
      image: "/clone-ig.png",
    },
    {
      name: "Proxmox Homelab",
      summary: "My homelab server based on proxmox developed during intern at MULTIKOM IT",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
