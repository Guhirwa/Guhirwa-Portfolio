import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'

const App = () => {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
    </main>
  )
}

export default App