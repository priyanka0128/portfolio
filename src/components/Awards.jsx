import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { awards } from '../data'

export default function Awards() {
  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <SectionHead
          num="07"
          eyebrow="Recognition"
          title={<>Some <em>nice</em> things</>}
        />

        <div className="awards-list">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="award-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="award-item__year">{award.year}</div>
              <div>
                <h3 className="award-item__title">{award.title}</h3>
                <p className="award-item__desc">{award.description}</p>
              </div>
              <div className="award-item__issuer">{award.issuer}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
