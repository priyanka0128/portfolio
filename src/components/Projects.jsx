import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { projects } from '../data'

const CATEGORIES = [
  { key: 'all',      label: 'All' },
  { key: 'build',    label: 'Built' },
  { key: 'research', label: 'Research' }
]

const CATEGORY_META = {
  research: {
    heading: 'Research',
    blurb: "Deep-dive work — dissertations, frameworks, and academic papers."
  },
  build: {
    heading: 'Built',
    blurb: "Hands-on projects — shipped prototypes, hackathons, and production code."
  }
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  // Group into sections when showing "all"
  const showGrouped = filter === 'all'
  const research = projects.filter(p => p.category === 'research')
  const built    = projects.filter(p => p.category === 'build')

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHead
          num="04"
          eyebrow="Projects"
          title={<>Research & <em>things built</em></>}
        />

        {/* Filter tabs */}
        <div className="project-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`project-filter ${filter === cat.key ? 'is-active' : ''}`}
              onClick={() => setFilter(cat.key)}
            >
              {cat.label}
              <span className="project-filter__count">
                {cat.key === 'all'
                  ? projects.length
                  : projects.filter(p => p.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {showGrouped ? (
            <motion.div
              key="grouped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {built.length > 0 && (
                <ProjectGroup meta={CATEGORY_META.build} items={built} />
              )}
              {research.length > 0 && (
                <ProjectGroup meta={CATEGORY_META.research} items={research} />
              )}
            </motion.div>
          ) : (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="projects-grid"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectGroup({ meta, items }) {
  return (
    <div className="project-group">
      <div className="project-group__head">
        <h3 className="project-group__heading">{meta.heading}</h3>
        <p className="project-group__blurb">{meta.blurb}</p>
        <span className="project-group__count">{items.length} {items.length === 1 ? 'project' : 'projects'}</span>
      </div>
      <div className="projects-grid">
        {items.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link to={`/work/${project.slug}`} className="project-card">
        <div>
          <div className="project-card__header">
            <span className="project-card__tag">{project.tag}</span>
            <span className="project-card__year">{project.year}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <div className="project-card__subtitle">{project.subtitle}</div>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>
        <div className="project-card__footer">
          <span className="project-card__stack">
            {project.stack.slice(0, 3).join(' · ')}
          </span>
          <span className="project-card__cta">
            More Details <span>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
