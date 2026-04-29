import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { beliefs } from '../data'

export default function Beliefs() {
  return (
    <section id="beliefs" className="beliefs">
      <div className="container">
        <SectionHead
          num="06"
          eyebrow="Point of View"
          title={<>A few things I <em>believe</em><br />about this work.</>}
        />

        <div className="beliefs__list">
          {beliefs.map((belief, i) => (
            <motion.article
              key={belief.number}
              className="belief"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="belief__num">{belief.number}</div>
              <div className="belief__content">
                <h3 className="belief__title">{belief.title}</h3>
                <p className="belief__body">{belief.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
