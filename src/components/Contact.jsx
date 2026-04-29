import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__content">
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's build<br />
          <em>something good.</em>
        </motion.h2>

        <motion.a
          href={`mailto:${profile.email}`}
          className="contact__email"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {profile.email}
        </motion.a>

        <motion.div
          className="contact__socials"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span>↗</span> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <span>↗</span> GitHub
          </a>
          <a href={profile.resumeUrl} download>
            <span>↓</span> Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
