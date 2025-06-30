import HeroGradient from './assets/components/heroSection/HeroGradient'
import HeroMain from './assets/components/heroSection/HeroMain'
import SubHeroSection from './assets/components/heroSection/SubHeroSection'
import NavbarMain from './assets/components/navbar/NavbarMain'

function App() {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
    </main>
  )
}

export default App
