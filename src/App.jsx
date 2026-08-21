import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Clicking a service card pre-fills which engagement the enquiry is about.
  const [engagement, setEngagement] = useState('')

  return (
    <div className="page">
      <span className="blob blob--hero-pink" aria-hidden="true" />
      <span className="blob blob--hero-yellow" aria-hidden="true" />
      <span className="blob blob--hero-green" aria-hidden="true" />

      <Header />
      <main>
        <Hero />
        <Work />
        <Services onPickEngagement={setEngagement} />
        <About />
        <Contact engagement={engagement} />
      </main>
      <Footer />
    </div>
  )
}
