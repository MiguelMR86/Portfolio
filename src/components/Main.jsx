import React from 'react'
import Projects from './others/Projects'
function Main() {
  return (
    <main className='w-full'>
        <Projects />
        <div id='experience' className='h-screen flex flex-col gap-y-4 p-4 text-center'>
            <p>Actualmente, acabo de finalizar el programa Erasmus de mi centro educativo, el cual ha sido de gran ayuda para comprender mejor varios ámbitos como el trabajo en equipo y la organización del trabajo. Ahora solo espero poder iniciar en este mercado laboral antes de que se me adelante ChatGPT.</p>
        </div>
        <div id='social' className='h-screen flex flex-col gap-y-4 p-4 text-center'>
            <p>
              social
            </p>
        </div>
    </main>
  )
}

export default Main