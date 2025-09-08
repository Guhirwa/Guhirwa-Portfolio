import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'

const App = () => {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
    </main>
  )
}

export default App