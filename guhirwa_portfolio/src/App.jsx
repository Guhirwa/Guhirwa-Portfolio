import './App.css'
import HeroGradient from './assets/components/heroSection/HeroGradient'
import HeroMain from './assets/components/heroSection/HeroMain'
import NavbarMain from './assets/components/navbar/NavbarMain'

function App() {
  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
    </main>
  )
}

export default App
