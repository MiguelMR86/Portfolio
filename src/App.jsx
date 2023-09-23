import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Menu from './components/others/Menu'

function App() {

  return (
    <div className='w-full min-h-screen'>
      <Header />
      <Menu />
      <Main />
    </div>
  )
}

export default App