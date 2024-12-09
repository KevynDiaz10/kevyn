import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Youtube,
  Computer,
  Book,
  Facebook,
  LucideGithub,
  FileDown,
  Mail,
  PanelsTopLeft,
  Cable,
} from "lucide-react";
import { Icon } from "@iconify/react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "https://youtube.com",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/feed/",
  },
  {
    id: 5,
    logo: <Mail size={30} strokeWidth={1} />,
    src: `mailto: ${"kevyndiaz10@gmail.com"}`,
  },
  {
    id: 3,
    logo: <LucideGithub size={30} strokeWidth={1} />,
    src: "https://github.com/KevynDiaz10",
  },
  {
    id: 4,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "https://www.facebook.com/",
  },
  {
    id: 5,
    logo: <FileDown size={30} strokeWidth={2} />,
    src: "/MYCV.pdf",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 0,
    title: "Evolución Continua",
    subtitle: "Ampliando Mis Habilidades y Conocimientos",
    description:
      "Actualmente estoy desarrollando un Ecommerce y aprendiendo a profundidad NextJS.",
    date: "Nov 2024",
  },
  {
    id: 1,
    title: "Construyendo Proyectos Más Complejos",
    subtitle: "Creando Aplicaciones Interactivas",
    description:
      "Empecé a construir aplicaciones web más complejas utilizando NextJS de React. Desarrollé una App fue un dashboard, que incluía funcionalidades como autenticación de usuarios, integración de APIs, DB en la nube y shadcnUI para componentes.",
    date: "Aug 2024",
  },
  {
    id: 2,
    title: "Aprofundizando en el Desarrollo Web",
    subtitle: "Dominando las Bases del Front-end y Back-end",
    description:
      "Comencé a explorar el desarrollo web full-stack, enfocándome en HTML, CSS, JavaScript y React. Desarrollé mi primer proyecto web completo con React, MYSQL, NodeJS y Bootstrap fue un C.R.U.D.",
    date: "Mar 2024",
  },
  {
    id: 3,
    title: "Primeros Pasos",
    subtitle: "Cursos y universidad",
    description:
      "Me introduje al mundo de la programación por primera vez a través de cursos y videos. Mis primeros lenguajes de programación fueron Python, HTML, CSS y Javascript.",
    date: "Oct 2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Proyectos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 3,
    text: "Certificados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <PanelsTopLeft/>,
    title: "Desarrollo web",
    description:
      "Desarrollo de sitios web a medida, adaptados alas necesidades del cliente",
  },
  {
    icon: <Computer />,
    title: "Desarrollo Backend",
    description:
      "Construcción sólida de la parte del servidor de la aplicación, incluyendo la bases de datos y las creación de APIs.",
  },

  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención del cliente",
  },
  {
    icon: <Cable />,
    title: "Desarrollo de APIs",
    description:
      "Desarrollo de interfaces de programación de aplicaciones APIs para conectar diferentes sistemas y dispositivos.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "CRUD",
    image: "/imgCrud.bmp",
    urlGithub: "https://github.com/KevynDiaz10/crud-react-node-mysql",
    urlDemo: "#!",
    icons: [
      <Icon
        icon="devicon:react-wordmark"
        key="icon-1"
        height={36}
        width={36}
      />,
      <Icon
        icon="devicon:mysql-wordmark"
        key="icon-2"
        height={36}
        width={36}
      />,
      <Icon
        icon="devicon:nodejs-wordmark"
        key="icon-3"
        height={36}
        width={36}
      />,
      <Icon icon="logos:bootstrap" key="icon-4" height={36} width={36} />,
    ],
  },
  {
    id: 2,
    title: "Dashboard",
    image: "/imgDashboard.bmp",
    urlGithub: "https://github.com/KevynDiaz10/my-app",
    urlDemo: "https://my-app-blond-phi-95.vercel.app/",
    icons: [
      <Icon
        icon="devicon:nextjs-wordmark"
        key="icon-1"
        height={36}
        width={36}
      />,
      <Icon
        icon="skill-icons:tailwindcss-dark"
        width={36}
        height={36}
        key="icon-2"
      />,
      <Icon icon="simple-icons:shadcnui" width={36} height={36} key="icon-3"/>,
      <Icon icon="devicon:prisma-wordmark" width={36} height={36} key="icon-4"/>,
      <Icon icon="simple-icons:clerk" width={36} height={36} key="icon-5"/>,
      <Icon icon="logos:neon" width={36} height={36} key="icon-6"/>,
      <Icon icon="logos:vercel" width={36} height={36} key="icon-7"/>,
    ],
  },
];
