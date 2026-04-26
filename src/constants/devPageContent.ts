export interface DevHeader {
  name: string;
  title: string;
  contact: {
    email: string;
    website: string;
    linkedin: { label: string; url: string };
    github: { label: string; url: string };
    location: string;
  };
}

export interface TechCategory {
  label: string;
  items: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  /** Project name shown inline in the heading */
  project?: string;
  /** Link shown in the heading (e.g. portfolio URL) */
  projectUrl?: string;
  /** Project description rendered below the heading as "Proyecto: ..." */
  projectNote?: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  institution: string;
  year: string;
}

export interface TeachingPosition {
  subject: string;
  institution: string;
  role: string;
  period: string;
}

export const DEV_HEADER: DevHeader = {
  name: "Nic Motta Salguero",
  title:
    "Frontend Engineer | Arquitectura escalable, Microfrontends & IA aplicada al desarrollo",
  contact: {
    email: "nicmottas@gmail.com",
    website: "nicmotta.github.io",
    linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/nic-motta/" },
    github: { label: "Github", url: "https://github.com/NicMotta" },
    location: "Buenos Aires, Argentina",
  },
};

export const DEV_ABOUT =
  "Soy desarrollador frontend enfocado en arquitectura y escalabilidad, trabajando principalmente con TypeScript, React y Vue. Tengo experiencia construyendo aplicaciones a escala, creando librerías reutilizables, migrando arquitecturas y desarrollando flujos web y mobile, con foco en calidad y performance. Además, soy docente universitario desde hace más de 10 años, lo que fortaleció mi comunicación, mentoring técnico y presentaciones frente a equipos. Actualmente utilizo IA en el día a día del desarrollo: trabajo con agentes para automatizar tareas, mejorar calidad de código y acelerar el flujo de trabajo, y he creado agentes que hoy son utilizados por distintos equipos.";

export const DEV_TECHNOLOGIES: TechCategory[] = [
  {
    label: "Frontend",
    items:
      "TypeScript, React, Vue, Lit / Web Components, Angular, Astro, Microfrontends, Aplicaciones Mobile",
  },
  {
    label: "Arquitectura",
    items:
      "Design systems, Librerías compartidas, Monorepos / multirepos, Escalabilidad frontend",
  },
  {
    label: "IA aplicada al desarrollo",
    items:
      "Agentes de código, Automatización, Asistencia en refactors, Generación de tests",
  },
  {
    label: "Herramientas",
    items: "Git, Lerna, CI/CD, Metodologías ágiles",
  },
];

export const DEV_EXPERIENCE: WorkExperience[] = [
  {
    role: "Desarrollador Frontend",
    company: "Accenture Argentina",
    period: "2022 - actualidad",
    project: "Banco BBVA",
    highlights: [
      "Desarrollo mobile de diversos flujos en la app del banco.",
      "Participé en la migración de un proyecto mono repositorio a múltiples repositorios independientes, reduciendo los conflictos de merges y los tiempos de build de 2 horas a 7 minutos por aplicación, acelerando el ciclo de desarrollo.",
      "Desarrollé una librería de componentes UI en Vue que centralizó los elementos visuales de la web pública del banco, ahorrando cientos de horas de trabajo a múltiples equipos.",
      "Implementé mejoras de rendimiento y nuevas funcionalidades clave en la web pública, utilizando Vue y Lit Elements para crear Web Components modulares.",
      "Colaboré en el onboarding y mentoría de nuevos desarrolladores, asegurando la adopción de buenas prácticas en React y Microfrontends.",
      "Apliqué testing unitario y principios de accesibilidad, garantizando calidad y cumplimiento de estándares.",
    ],
  },
  {
    role: "Desarrollo Web",
    company: "Proyectos Freelance",
    period: "2019 - actualidad",
    projectUrl: "/portfolio",
    highlights: [
      "Desarrollé Chef IA, una aplicación con Astro, JavaScript y Python que integra IA para generación de recetas.",
      "Construí el Laboratorio de Indicadores Culturales, plataforma de visualización de datos culturales con Astro.",
      "Diseñé y desarrollé sitios de proyectos de cátedras para organismos como la FADU (UBA) y la UNA.",
    ],
  },
  {
    role: "Desarrollo / Asistente de Arte",
    company: "Non Stop TV",
    period: "2020 - 2021",
    projectNote: '"Art Attack: Modo Desafío", Disney+ Latam y Brasil.',
    highlights: [
      "Desarrollo de dispositivos electrónicos y elementos de escenografía interactivos para el programa.",
      "Diseño, ingeniería y desarrollo de escultura móvil interactiva, adecuación de juegos de feria y ambientación.",
    ],
  },
];

export const DEV_EDUCATION: Education[] = [
  {
    degree: "Ingeniería en Sistemas de Información",
    institution: "UTN",
    period: "en curso",
  },
  {
    degree: "Maestría en Tecnologías y Estéticas de las Artes Electrónicas",
    institution: "UNTREF",
    period: "2020 - 2022",
  },
  {
    degree: "Licenciatura en Artes Visuales",
    institution: "UNA Artes Visuales",
    period: "2013 - 2019",
  },
];

export const DEV_CERTIFICATIONS: Certification[] = [
  { name: "Claude 101", institution: "Anthropic", year: "2026" },
  { name: "Curso de Habilidades Blandas", institution: "Franco Pisso", year: "2026" },
  { name: "AWS Cloud Practitioner", institution: "IT College", year: "2023" },
  {
    name: "React: De cero a experto (Hooks y MERN)",
    institution: "Udemy",
    year: "2021",
  },
  {
    name: "Arte generativo, shaders y NFT",
    institution: "CCEBA MediaLab",
    year: "2023",
  },
  {
    name: "Inteligencia Artificial para la Producción Musical",
    institution: "WIP Arte Digital",
    year: "2020",
  },
  {
    name: "Inteligencia Artificial Aplicada al Arte",
    institution: "C.C. Matienzo",
    year: "2019",
  },
  {
    name: "Programación de Mini-chips",
    institution: "Instituto Baikal",
    year: "2018",
  },
  {
    name: "Sonido, introducción al live coding",
    institution: "+CODE UNSAM (Universidad Nacional de San Martín)",
    year: "2018",
  },
  {
    name: "Mapping e interfaces inalámbricas",
    institution: "Espacio Pla",
    year: "2017",
  },
];

export const DEV_TEACHING: TeachingPosition[] = [
  {
    subject: "Dibujo y Sistemas de Representación 1 y 2. Cátedra De Piero",
    institution: "UNA Artes Visuales",
    role: "Docente",
    period: "2016 - actualidad",
  },
  {
    subject: "Lenguaje Visual 1 y 2. Cátedra Flores",
    institution: "UNA Artes Visuales",
    role: "Ayudante",
    period: "2020 - 2021",
  },
  {
    subject: "Proyectual Dibujo 1 a 3. Cátedra Molina",
    institution: "UNA Artes Visuales",
    role: "Ayudante",
    period: "2020 - 2021",
  },
  {
    subject: "OTAV Dibujo 1 a 3. Cátedra Molina",
    institution: "UNA Artes Visuales",
    role: "Ayudante",
    period: "2019",
  },
  {
    subject: "Taller Mapping, programación visual y Arduino",
    institution: "Instituto Baikal, Buenos Aires",
    role: "Docente",
    period: "2018",
  },
  {
    subject: "Voluntariado de Grabado y Arte Impreso. Cátedra Liberatori",
    institution: "UNA Artes Visuales",
    role: "Voluntario",
    period: "2015 - 2017",
  },
];
