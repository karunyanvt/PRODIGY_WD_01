import { useState } from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ServicesSection from './Components/ServicesSection'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <Footer />
    </>
  )
}

export default App
