import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'

const App = () => {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
    </main>
  )
}

export default App