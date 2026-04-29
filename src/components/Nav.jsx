import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Detect whether the section behind the nav is dark or light
    function handleScroll() {
      const navH = 68
      const el = document.elementFromPoint(window.innerWidth / 2, navH + 10)
      if (!el) return

      // Walk up and check for our section class
      let cur = el
      while (cur && cur !== document.body) {
        if (cur.matches('.hero, .ribbon, .metrics, .process, .contact, .footer')) {
          setIsDark(true)
          return
        }
        if (cur.matches('section, .case-study-v2')) {
          setIsDark(false)
          return
        }
        cur = cur.parentElement
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  return (
    <nav className={`nav ${isDark ? 'nav--dark' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-dot" />
          <span>Priyanka Chavan</span>
        </Link>
        <div className="nav__links">
          {isHome ? (
            <>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <Link to="/">Home</Link>
          )}
          <a href={profile.resumeUrl} className="nav__cta" download>
            <span>↓</span>
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
