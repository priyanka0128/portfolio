import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { work } from '../data'

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <SectionHead
          num="02"
          eyebrow="Experience"
          title={<>Where I've <em>worked</em></>}
        />

        <div className="work-list">
          {work.map((job, i) => (
            <motion.article
              key={i}
              className="work-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="work-item__period">{job.period}</div>

              <div>
                <h3 className="work-item__role">{job.role}</h3>
                <div className="work-item__company">{job.company}</div>
                <p className="work-item__summary">{job.summary}</p>
                <ul className="work-item__highlights">
                  {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>

              <div className="work-item__location">{job.location}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
