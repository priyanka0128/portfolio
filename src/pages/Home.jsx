import { useEffect } from 'react'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Process from '../components/Process'
import Beliefs from '../components/Beliefs'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

export default function Home() {
  useEffect(() => {
    document.title = 'Priyanka Chavan — AI Engineer · Delivery · Cybersecurity'
  }, [])

  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Awards />
      <Process />
      <Beliefs />
      <Contact />
    </>
  )
}
