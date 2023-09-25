import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { AiFillGithub } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'

export default function Projects() {
    const { projects } = useContext(Context)

    return (
        <div id='projects' className='text-center min-h-screen p-4 mb-[8em]'>
            <h2 className='font-bold text-3xl py-4 text-[--second]'>Proyectos</h2>
            <div className='flex flex-col m-auto justify-evenly items-center gap-y-10 p-4 text-center md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-[4em] xl:w-[1279px]'>
                {projects.map(project => {
                    return (
                        <article
                            key={project.name}
                            className='w-[300px] h-[300px] p-4 hover:p-0 bg-[--third] relative rounded-md transition-all ease-in-out duration-500 before:content-none before:-z-10 before:inset-0 before:blur-[20px]'>
                                                        
                            <div style={{ backgroundImage: `url(${project.links.img})` }} className="w-full h-full rounded-md overflow-hidden group/card bg-cover bg-center bg-no-repeat">
                                <div className="absolute top-0 left-0 bg-[--second-blur] rounded-md w-full h-full flex flex-col items-center justify-evenly text-center gap-[10px] transform opacity-0 transition-all ease-in-out duration-500 backdrop-blur-lg group-hover/card:opacity-100 group-hover/card:transform">
                                    <p className="text-3xl font-bold">{project.name}</p>
                                    <p>{project.shortDescription}</p>
                                    <div className='w-full flex justify-evenly items-center p-4'>
                                        <a href={project.links.web} target='_blank' rel="noreferrer">
                                            <TbWorldWww size={35} />
                                        </a>
                                        <a href={project.links.github} target='_blank' rel="noreferrer">
                                            <AiFillGithub size={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
