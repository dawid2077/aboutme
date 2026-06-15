import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Dawid Motłoch  — DevOps & Python Developer",
  author: "Dawid Motłoch",
  description:
    "DevOps Engineer and Python Developer with a passion for automation. I specialize in building stable infrastructure, containerization, and managing systems and the cloud.",
  lang: "en",
  siteLogo: "/black.png",
  navLinks: [
    { text: "Po Polsku🇵🇱", href: "."},
    { text: "Experience & Certifications", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About Me", href: "#about" }
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/dawidmot" },
    { text: "Github", href: "https://github.com/dawid2077" },
    /*
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
    specialty: "DevOps & Python Developer",
    summary:
      "Aspiring DevOps Engineer and Python Developer with a passion for automation. I specialize in building stable infrastructure, containerization, and managing systems and the cloud.",
    email: "dawidmot78@gmail.com",
  },
  experience: [
    {
      company: "MULTIKOM IT",
      position: "Intern",
      startDate: "March 2026",
      endDate: "March 2026",
      summary:
        "Spent a month interning, learning virtualization using the Proxmox operating system.",
    },
    {
      company: "TME im Nikoli Tesli",
      position: "Student",
      startDate: "September 2023",
      endDate: "June 2028",
      summary:
        "Currently a 3rd-year IT Technical High School student",
    },
    /*
    {
      company: "Certifications",
      position: "Oracle",
      startDate: "May 2026",
      endDate: "May 2028",
      summary:
        "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    },
    */
  ],
  projects: [
    {
      name: "OpenFaust",
      summary:
        "A highly customizable Discord companion with your own persona defined in a personality.md file, featuring a specialized dual-model pipeline.",
      /*linkPreview: "/",*/
      linkSource: "https://github.com/dawid2077/OpenFaust",
      image: "/faust_arrow.drawio.png",
    },
    {
      name: "Vaultwarden-Homelab",
      summary:
        "Secure, self-hosted credential management system featuring automated multi-site synchronization, containerized deployment, and high-availability backup redundancy.",
      linkSource: "https://github.com/dawid2077/vaultwarden-homelab",
      image: "/vaultwarden.drawio.png",
    },
    {
      name: "Oracle Cloud",
      summary: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      linkSource:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D6AC297C47276726502DE9FA53D5C60B9D5CC07206774C6C686CD79C76B1E42C",
      image: "/oracle.png",
    },
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
    description: `
    Hi! I am passionate about network infrastructure, the cloud, and Python programming. I love working at the intersection of code and operating systems, which I demonstrate by developing my own laboratory environment (Homelab) based on Proxmox and designing automations, such as advanced bots or reliable backup systems.

    In my projects, I place a huge emphasis on security, containerization (Docker), and the cloud – I hold an OCI Foundations Associate certification, which confirms my knowledge of cloud architecture. Instead of relying on ready-made solutions, I prefer to understand how systems work under the hood.

    Beyond technology, my great passion is mathematics, which has shaped my analytical approach to problem-solving and code optimization. I am also interested in investing – I treat it as another fascinating system full of data, algorithms, and risk management, which perfectly aligns with my engineering approach to life.
    `,
    /*image: "/black.png",*/
  },
};

// #5755ff