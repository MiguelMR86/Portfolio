import React, { useState, createContext } from "react"
import ReactLogo from "../assets/icon/react-logo.svg"
import emailjs from "@emailjs/browser"
import TailwindLogo from "../assets/icon/tailwind-logo.png"
import FirebaseLogo from "../assets/icon/Firebase-logo.png"
import MaterialTailwindLogo from "../assets/icon/MaterialTailwind-logo.png"
import DaisyUILogo from "../assets/icon/DaisyUI-logo.png"
import TsParticlesLogo from "../assets/icon/TsParticles-logo.png"
import ThreeJsLogo from "../assets/icon/ThreeJs-logo.png"
import VueLogo from "../assets/icon/Vue-logo.png"
import PiniaLogo from "../assets/icon/Pinia-logo.png"
import DjangoLogo from "../assets/icon/Django-logo.png"
import PostgreSQLLogo from "../assets/icon/PostgreSQL-logo.png"
import PythonLogo from "../assets/icon/python-logo.svg"
import TypescriptLogo from "../assets/icon/typescript-logo.svg"

export const Context = createContext()

export function ContextProvider({ children, value: { ...other } }) {
  // States
  const [openMenu, setOpenMenu] = useState(false)
  const [currentSection, setCurrentSection] = useState("About")

  const projects_coming_soon = [
    {
      name: "MR-Chat ( Cooming soon )",
      shortDescription:
        "Esta una app de mensajería instantanea, para comunicarse de forma rápida, fluida y segura. El objetivo de este proyecto es crear un chat con una araquitectura solida y escalable.",
      technologies: [
        { src: ReactLogo, alt: "React logo", title: "React" },
        { src: TypescriptLogo, alt: "Typescript logo", title: "Typescript" },
        { src: TailwindLogo, alt: "Tailwind CSS logo", title: "Tailwind CSS" },
        {
          src: PythonLogo,
          alt: "Python logo",
          title: "Python",
        },
        {
          src: DjangoLogo,
          alt: "Django logo",
          title: "Django",
        },
        {
          src: PostgreSQLLogo,
          alt: "PostgreSQL logo",
          title: "PostgreSQL",
        },
      ],
    },
  ]

  const projects = [
    {
      name: "TaskHub",
      shortDescription:
        "TaskHub es una aplicación web que permite a los usuarios gestionar y organizar sus tareas de manera eficiente.",
      technologies: [
        { src: ReactLogo, alt: "React logo", title: "React" },
        { src: TailwindLogo, alt: "Tailwind CSS logo", title: "Tailwind CSS" },
        {
          src: MaterialTailwindLogo,
          alt: "Material Tailwind logo",
          title: "Material Tailwind",
        },
        { src: FirebaseLogo, alt: "Firebase logo", title: "Firebase" },
      ],
      links: {
        github: "https://github.com/MiguelMR86/TaskHub",
        web: "https://taskhub-46037.web.app/",
      },
    },
    {
      name: "METEC",
      shortDescription:
        "METEC es un E-commerce de productos tecnológicos, este fue mi proyecto de fin de curso.",
      technologies: [
        { src: ReactLogo, alt: "React logo", title: "React" },
        { src: TailwindLogo, alt: "Tailwind CSS logo", title: "Tailwind CSS" },
        {
          src: MaterialTailwindLogo,
          alt: "Material Tailwind logo",
          title: "Material Tailwind",
        },
        { src: DaisyUILogo, alt: "DaisyUI logo", title: "DaisyUI" },
        { src: TsParticlesLogo, alt: "TsParticles logo", title: "TsParticles" },
        { src: FirebaseLogo, alt: "Firebase logo", title: "Firebase" },
      ],
      links: {
        github: "https://github.com/Edvintrabajo/metec-ecommerce",
        web: "https://test-metec-3.web.app/",
      },
    },
    {
      name: "InfinityGif",
      shortDescription:
        "InfinityGif es una aplicación web que te permite explorar y descargar gifs de manera infinita a medida que haces scroll.",
      technologies: [
        { src: ReactLogo, alt: "React logo", title: "React" },
        { src: TailwindLogo, alt: "Tailwind CSS logo", title: "Tailwind CSS" },
        {
          src: MaterialTailwindLogo,
          alt: "Material Tailwind logo",
          title: "Material Tailwind",
        },
      ],
      links: {
        github: "https://github.com/MiguelMR86/InfinityGif",
        web: "https://infinity-gif.vercel.app/",
      },
    },
    {
      name: "Planetary",
      shortDescription:
        "Planetary es un proyecto que combina Three.js y React para crear un emocionante planetario 3D interactivo.",
      technologies: [
        { src: ReactLogo, alt: "React logo", title: "React" },
        { src: TailwindLogo, alt: "Tailwind CSS logo", title: "Tailwind CSS" },
        { src: ThreeJsLogo, alt: "Three.js logo", title: "Three.js" },
      ],
      links: {
        github: "https://github.com/MarioDevv/Planetary",
        web: "https://planetary-orcin.vercel.app/",
      },
    },
    {
      name: "FiftySaving-Vue",
      shortDescription:
        "Esta es una simple app con una funcionalidad simple, te permite ahorrar 1275 € en 50 días.",
      technologies: [
        { src: VueLogo, alt: "Vue logo", title: "Vue" },
        { src: PiniaLogo, alt: "Pinia logo", title: "Pinia" },
      ],
      links: {
        github: "https://github.com/MiguelMR86/FiftySaving-Vue",
        web: "https://fifty-saving.vercel.app/",
      },
    },
    {
      name: "Calculator-Vue",
      shortDescription:
        "Esta es una calculadora web avanzada desarrollada con Vue 3, TypeScript y Vite.",
      technologies: [
        { src: VueLogo, alt: "Vue logo", title: "Vue" },
        { src: PiniaLogo, alt: "Pinia logo", title: "Pinia" },
      ],
      links: {
        github: "https://github.com/MiguelMR86/Calculator-Vue",
        web: "https://calculator-vue-ts.netlify.app/",
      },
    },
  ]

  // Handlers
  const handleOpenMenu = () => setOpenMenu(!openMenu)

  const [status, setStatus] = useState()

  const handleSubmit = (e, form) => {
    e.preventDefault()
    setStatus("Cargando...")

    const statusCont = document.getElementById("status")
    const submitBtn = document.getElementById("submitBtn")
    const name = form.current.name.value
    const email = form.current.email.value
    const message = form.current.message.value

    submitBtn.disabled = true

    if (statusCont.classList.contains("animate-fade-out"))
      statusCont.classList.remove("animate-fade-out")
    if (statusCont.classList.contains("hidden"))
      statusCont.classList.remove("hidden")

    statusCont.classList.add("on-fade-in")
    statusCont.classList.add("animate-fade-in")

    try {
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setStatus("Por favor, rellena todos los campos")
      } else {
        emailjs
          .sendForm(
            "service_en7yssh",
            "template_lihpmh6",
            form.current,
            "12kMxdtztEBwQaSGR"
          )
          .then(() => {
            setStatus("Mensaje enviado con éxito")
            form.current.reset()
          })
      }
    } catch (e) {
      setStatus("Error al enviar el mensaje")
      form.current.reset()
    } finally {
      setTimeout(() => {
        statusCont.classList.remove("on-fade-in")
        statusCont.classList.remove("animate-fade-in")
        statusCont.classList.add("animate-fade-out")
        submitBtn.disabled = false
      }, 3000)
      return
    }
  }

  const operators = {
    openMenu,
    handleOpenMenu,
    currentSection,
    setCurrentSection,
    projects,
    projects_coming_soon,
    status,
    handleSubmit,
  }

  return (
    <Context.Provider value={{ ...operators, ...other }}>
      {children}
    </Context.Provider>
  )
}
