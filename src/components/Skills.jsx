import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { skillDomains, learning } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="Skills"
          title={<>What I do with <em>what I know.</em></>}
        />

        <div className="domains">
          {skillDomains.map((domain, di) => (
            <motion.div
              key={domain.domain}
              className="domain"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: di * 0.06 }}
            >
              <div className="domain__header">
                <span className="domain__label">{domain.domain}</span>
                <span className="domain__count">
                  {domain.clusters.reduce((sum, c) => sum + c.items.length, 0)} skills
                </span>
              </div>

              <div className="cluster-grid">
                {domain.clusters.map((cluster, ci) => (
                  <motion.div
                    key={cluster.name}
                    className="cluster"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: ci * 0.06 }}
                  >
                    <div className="cluster__head">
                      <h3 className="cluster__title">{cluster.name}</h3>
                      <span className="cluster__count">{cluster.items.length} skills</span>
                    </div>
                    <div className="cluster__items">
                      {cluster.items.map(item => (
                        <span key={item} className="cluster__item">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          className="learning"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="learning__header">
            <span className="learning__label">Currently learning</span>
            <span className="learning__pulse" />
          </div>
          <div className="learning__items">
            {learning.map((item, i) => (
              <div key={i} className="learning__item">
                <span className="learning__topic">{item.topic}</span>
                <span className="learning__detail">{item.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
