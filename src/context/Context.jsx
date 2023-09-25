import React, { useState, createContext } from "react";
import emailjs from '@emailjs/browser';

export const Context = createContext();

export function ContextProvider({ children, value: {...other} }) {
  // States
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const projects = [
    {
        'name': 'TaskHub',
        'shortDescription': 'TaskHub es una aplicación web que permite a los usuarios gestionar y organizar sus tareas de manera eficiente',
        'technologies': {
            'frontend':['HTML', 'tailwindcss', 'JavaScript','React', 'Material-Tailwind'],
            'backend':['Firebase', 'Node', 'Vite']
        },
        'links': {
            'github': 'https://github.com/MiguelMR86/TaskHub',
            'web': 'https://taskhub-46037.web.app/',
            'img': 'https://user-images.githubusercontent.com/90867675/259472945-caf02039-6d04-4551-8d75-f2e62cc5bd82.png'
        }
    },
    {
        'name': 'METEC',
        'shortDescription': 'E-commerce of technologies products made by Miguel and Edvin',
        'technologies': {
            'frontend':['HTML', 'tailwindcss', 'JavaScript','React', 'Material-Tailwind', 'DaisyUI', 'TsParticles'],
            'backend':['Firebase', 'Node', 'Vite']
        },
        'links': {
            'github': 'https://github.com/Edvintrabajo/metec-ecommerce',
            'web': 'https://test-metec-3.web.app/',
            'img': 'https://user-images.githubusercontent.com/90867675/269961501-1eceb756-e372-4dbd-9917-b3267b7bb0a9.png'
        }
    },
    {
        'name': 'InfinityGif',
        'shortDescription': 'InfinityGif es una aplicación web que te permite explorar y descargar gifs de manera infinita a medida que haces scroll',
        'technologies': {
            'frontend':['HTML', 'tailwindcss', 'JavaScript','React', 'Material-Tailwind'],
            'backend':['Node', 'Vite']
        },
        'links': {
            'github': 'https://github.com/MiguelMR86/InfinityGif',
            'web': 'https://infinity-gif.vercel.app/',
            'img': 'https://user-images.githubusercontent.com/90867675/259465936-7f572ad0-8c90-41b9-86ba-456dd9294f64.png'
        }
    },
    {
      'name': 'Planetary',
      'shortDescription': 'Planetary es un proyecto que combina Three.js y React para crear un emocionante planetario 3D interactivo',
      'technologies': {
          'frontend':['HTML', 'tailwindcss', 'JavaScript','React', 'Three.js'],
          'backend':['Node', 'Vite']
      },
      'links': {
          'github': 'https://github.com/MarioDevv/Planetary',
          'web': 'https://planetary-orcin.vercel.app/',
          'img': 'https://user-images.githubusercontent.com/90867675/259512688-929c7cdd-9e1e-4b7d-b2ed-5e7c70b1bda1.png'
      }
    },
    {
      'name': 'FiftySaving-Vue',
      'shortDescription': 'Esta es una simple app con una funcionalidad simple, te permite ahorrar 1275 € en 50 días',
      'technologies': {
          'frontend':['HTML', 'CSS', 'JavaScript','Vue', 'Pinia'],
          'backend':['Node', 'Vite']
      },
      'links': {
          'github': 'https://github.com/MiguelMR86/FiftySaving-Vue',
          'web': 'https://fifty-saving.vercel.app/',
          'img': 'https://user-images.githubusercontent.com/90867675/267636913-a2ebb9a0-7218-4629-8eef-1379502b2ff0.png'
      }
    },
    {
      'name': 'Calculator-Vue',
      'shortDescription': 'Esta es una calculadora web avanzada desarrollada con Vue 3, TypeScript y Vite',
      'technologies': {
          'frontend':['HTML', 'CSS', 'JavaScript','Vue'],
          'backend':['Node', 'Vite']
      },
      'links': {
          'github': 'https://github.com/MiguelMR86/Calculator-Vue',
          'web': 'https://calculator-vue-ts.netlify.app/',
          'img': 'https://user-images.githubusercontent.com/90867675/265047903-4fe77e86-7f55-4d9c-a130-36fa0699f61e.png'
      }
    },
]
  // Handlers
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  const [status, setStatus] = useState()

  const handleSubmit = (e, form) => {
      e.preventDefault()
      setStatus('Cargando...')
      
      const statusCont = document.getElementById('status')
      const submitBtn = document.getElementById('submitBtn')
      const name = form.current.name.value
      const email = form.current.email.value
      const message = form.current.message.value
      
      submitBtn.disabled = true
      
      if (statusCont.classList.contains('animate-fade-out')) statusCont.classList.remove('animate-fade-out')
      if (statusCont.classList.contains('hidden')) statusCont.classList.remove('hidden')
      
      statusCont.classList.add('on-fade-in')
      statusCont.classList.add('animate-fade-in')

      try {
          if (name.length === 0 || email.length === 0 || message.length === 0) {
              setStatus('Por favor, rellena todos los campos')
          } else {
              emailjs.sendForm('service_en7yssh', 'template_lihpmh6', form.current, '12kMxdtztEBwQaSGR')
              .then(() => {
                  setStatus('Mensaje enviado con éxito')
                  form.current.reset()
              })
          }   
      } catch (e) {
          setStatus('Error al enviar el mensaje')
          form.current.reset()
      } finally {
          setTimeout(() => {
              statusCont.classList.remove('on-fade-in')
              statusCont.classList.remove('animate-fade-in')
              statusCont.classList.add('animate-fade-out')
              submitBtn.disabled = false
          }, 3000);
          return
      }
  };
  
  const operators = {
    openMenu, handleOpenMenu,
    currentSection, setCurrentSection,
    projects,
    status, handleSubmit,
  };

  return (
    <Context.Provider value={{...operators, ...other}}>
      {children}
    </Context.Provider>
  );
}
