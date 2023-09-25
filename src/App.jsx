import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Menu from './components/others/Menu'

function App() {

  return (
    <div className='w-full min-h-screen'>
      <Header />
      <Main />
      <Footer />
      <Menu />
    </div>
  )
}

export default App