import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'

export default function Projects() {

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
        } 
    ]

        
  return (
    <div id='projects' className='text-center min-h-[100vh] '>
        <h2 className='font-bold text-3xl py-4 text-[--second]'>Proyectos</h2>
        <div className='flex flex-col justify-evenly items-center gap-y-10 p-4 text-center'>
            
            {projects.map(project => {
                return (
                    // <div key={project.name} className='bg-[--third] p-4 rounded-md w-[90%] h-[450px] flex flex-col justify-between'>
                    //     <h2 className='text-2xl'>{project.name}</h2>
                    //     <div>
                    //         <a href={project.links.github} target='_blank'>
                    //             <img src={project.links.img} alt={project.name} className='h-[200px] rounded-md' />
                    //         </a>
                    //         <p className='mt-4 text-left'>{project.shortDescription}</p>
                    //     </div>
                    //     <div className='flex justify-evenly'>
                    //         <a className='text-[--second]' href={project.links.web} target='_blank' rel="noreferrer">
                    //             <TbWorldWww size={30} />
                    //         </a>
                    //     </div>
                    // </div>
                    <article key={project.name} className='relative'>
                        <div 
                            style={{backgroundImage: `url(${project.links.img})`}} 
                            className='w-[325px] h-[300px] bg-[--third] rounded-xl bg-cover bg-center bg-no-repeat'>
                            <div className='w-full h-full rounded-xl grid place-items-center bg-emerald-600/50'>
                                <h3 className='text-2xl font-bold'>
                                    {project.name}
                                </h3>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    </div>
  )
}
