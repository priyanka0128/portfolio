import { motion } from 'framer-motion'
import { profile } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }
  })
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg-orb" />
      <div className="hero__bg-orb hero__bg-orb--2" />

      <div className="container hero__content">
        <motion.div
          className="hero__status"
          variants={fadeUp}
          initial="hidden" animate="visible" custom={0}
        >
          <span className="hero__status-dot" />
          Available from May 2026 · Open to work
        </motion.div>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden" animate="visible" custom={1}
        >
          Hi, I'm <em>Priyanka.</em>
        </motion.h1>

        <motion.p
          className="hero__sub"
          variants={fadeUp}
          initial="hidden" animate="visible" custom={2}
        >
          I build small things that do quiet work — voice clones, chatbots, risk scorers, dashboards.
        </motion.p>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          initial="hidden" animate="visible" custom={3}
        >
          Most of them involve AI. None of them involve a 40-slide deck.
        </motion.p>

        <motion.div
          className="hero__meta"
          variants={fadeUp}
          initial="hidden" animate="visible" custom={4}
        >
          <div className="hero__meta-item">
            <span className="hero__meta-label">Currently</span>
            <span className="hero__meta-value">MSc Cybersecurity Risk<br />University of Galway</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Focus</span>
            <span className="hero__meta-value">AI · Agentic Systems<br />Cybersecurity · Delivery</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Based in</span>
            <span className="hero__meta-value">{profile.location}<br />{profile.relocating}</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Write to me</span>
            <a href={`mailto:${profile.email}`} className="hero__meta-value" style={{ color: 'var(--accent)' }}>
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll">
        Scroll
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
