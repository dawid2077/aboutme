import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Dawid Motłoch — DevOps & Python Developer",
  author: "Dawid Motłoch",
  description:
    "Aspiring DevOps Engineer and Python Developer with a passion for automation. I specialize in building stable infrastructure, containerization, and managing systems and the cloud.",
  lang: "en",
  siteLogo: "/black.png",
  navLinks: [
    { text: "Po polsku🇵🇱", href: "/" },
    { text: "Experience", href: "#experience" },
    { text: "Projects & Certificates", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/dawidmot" },
    { text: "Github", href: "https://github.com/dawid2077" },
  ],
  socialImage: "/preview.png",
  canonicalURL: "https://dawidm.com",
};


export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Dawid Motłoch",
    specialty: "DevOps & Python Developer",
    summary:
      "Aspiring DevOps Engineer and Python Developer with a passion for learning everything related to IT. I specialize in programming, containerization, managing systems and the cloud.",
    email: "dawidmot78@gmail.com",
  },
  experience: [
    {
      company: "MS Medical PRO",
      position: "Medical Equipment Technician (Ultrasound)",
      startDate: "March 2026",
      endDate: "Present",
      summary:
        "Currently working on repairing, servicing, and diagnosing ultrasound machines valued at around 100,000 PLN each.",
    },
    {
      company: "MULTIKOM IT",
      position: "Intern",
      startDate: "March 2026",
      endDate: "March 2026",
      summary:
        "Configured and managed a virtualization environment based on Proxmox VE.",
    },
    {
      company: "TME im Nikoli Tesli",
      position: "Student",
      startDate: "September 2023",
      endDate: "June 2028",
      summary:
        "Currently a 4rd-year IT Technical High School student",
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
    {
      name: "C2 English EFSET",
      summary: "C2 English Certificate proficient at reading and listening.",
      linkSource: "https://cert.efset.org/en/d7buQs",
      image: "/efset.png",
    },
    {
      name: "INF.02 Vocational Qualification Certificate",
      summary: "Official state certification confirming proficiency in administration and operation of computer systems, peripheral devices, and local area networks.",
      linkSource: "https://dawidm.com/INF02.png",
      image: "/inf02.jpg",
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
      "Over 2 years of experience with Python, plus more than a year working with the cloud, homelabs, and self-hosting.",
      "Trust and precision – I work daily with ultrasound machines worth around 100,000 PLN each.",
      "Communication – regular contact with directors and medical staff at hospitals across Poland.",
      "Troubleshooting – diagnosing faults and errors, analyzing logs, and testing equipment performance.",
      "I'm passionate about network infrastructure, the cloud, and Python programming.",
      "I'm building my own lab environment (Homelab) based on Proxmox.",
      "I design automations, such as advanced bots and reliable backup systems.",
      "I place a strong emphasis on security, containerization (Docker), and the cloud – I hold an OCI Foundations Associate certification.",
      "I prefer to understand how systems work under the hood rather than relying on ready-made solutions.",
      "Beyond technology, I'm passionate about mathematics, which has shaped my analytical approach to problem-solving.",
      "I'm also interested in investing – I see it as a fascinating system full of data, algorithms, and risk management.",
    ],
    /* BLOG LINK WILL GO HERE
    image: "/black.png",*/
  },
};

// #5755ff