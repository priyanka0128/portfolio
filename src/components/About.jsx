import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { about } from '../data'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHead
          num="01"
          eyebrow="About"
          title={<>Hi, I'm <em>Priyanka.</em></>}
        />

        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
