import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { process } from '../data'

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="How I Work"
          title={<>My process, <em>roughly.</em></>}
        />

        <p className="process__lede">
          Most problems look different on the surface. Underneath, they tend to follow the same shape — a question someone cares about, a gap between expectation and reality, a small thing worth trying, and proof that it mattered.
        </p>

        <div className="process__grid">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              className="process__step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="process__num">{step.number}</div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__body">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
