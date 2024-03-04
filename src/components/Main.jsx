import React from 'react'
import About from './others/About'
import Projects from './others/Projects'
import Skills from './others/Skills'
import Contact from './others/Contact'

function Main() {
  return (
    <main className="w-full flex flex-col items-center">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default Main