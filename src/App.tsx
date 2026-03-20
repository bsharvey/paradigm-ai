import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoCloud } from './components/LogoCloud'
import { Platform } from './components/Platform'
import { Domains } from './components/Domains'
import { Solutions } from './components/Solutions'
import { Team } from './components/Team'
import { Metrics } from './components/Metrics'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Platform />
      <Domains />
      <Solutions />
      <Metrics />
      <Team />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
