import React from 'react'
import About from './others/About'
import Projects from './others/Projects'
import Contact from './others/Contact'

function Main() {
  return (
    <main className='w-full flex flex-col items-center'>
        <About />
        <Projects />
        <Contact />
    </main>
  )
}

export default Main