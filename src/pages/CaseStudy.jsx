import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) {
      document.title = `${project.title} — Priyanka Chavan`
    }
  }, [project, slug])

  if (!project) return <Navigate to="/" replace />

  const hasLinks = project.links && project.links.length > 0

  return (
    <article className="case-study-v2">
      <div className="container">
        <Link to="/#projects" className="case-study__back">
          <span>←</span> Back to projects
        </Link>

        <motion.header
          className="cs-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="case-study__tag">{project.tag}</span>
          <h1 className="cs-title">{project.title}</h1>
          <p className="cs-subtitle">{project.subtitle} · {project.year}</p>
          <p className="cs-tagline">{project.tagline}</p>
        </motion.header>

        <div className="cs-grid">
          <div className="cs-content">
            <motion.section
              className="cs-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="cs-block__label">Problem</h3>
              <p className="cs-block__body">{project.problem}</p>
            </motion.section>

            <motion.section
              className="cs-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="cs-block__label">Approach</h3>
              <p className="cs-block__body">{project.approach}</p>
            </motion.section>

            <motion.section
              className="cs-block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="cs-block__label">Outcome</h3>
              <p className="cs-block__body">{project.outcome}</p>
            </motion.section>
          </div>

          <aside className="cs-sidebar">
            <div className="cs-card">
              <h4 className="cs-card__label">Details</h4>
              <dl className="cs-meta-list">
                <div>
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{project.subtitle}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>
                    <div className="cs-stack-tags">
                      {(project.stack || []).map(tech => (
                        <span key={tech} className="cs-stack-tag">{tech}</span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>

            {hasLinks ? (
              <div className="cs-card">
                <h4 className="cs-card__label">Links</h4>
                <ul className="cs-links">
                  {project.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.url}
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        download={link.type === 'doc' ? true : undefined}
                        className="cs-link"
                      >
                        <span className="cs-link__icon">{getIcon(link.type)}</span>
                        <span className="cs-link__label">{link.label}</span>
                        <span className="cs-link__arrow">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="cs-card cs-card--placeholder">
                {/* <h4 className="cs-card__label">Links</h4>
                <p className="cs-placeholder-text">
                  Add live demos, GitHub repos or PDFs to <code>project.links</code> in <code>src/data.js</code>:
                </p> */}
              {/*   <pre className="cs-placeholder-code">{`links: [
  { label: "Live Demo",
    url: "https://...",
    type: "external" },
  { label: "GitHub",
    url: "https://github.com/...",
    type: "github" }
]`}</pre> */}
              </div>
            )}
          </aside>
        </div>

        <Link to={`/work/${nextProject.slug}`} className="case-study__next">
          <div>
            <div className="case-study__next-label">Next case study</div>
            <div className="case-study__next-title">{nextProject.title}</div>
          </div>
          <span className="case-study__next-arrow">→</span>
        </Link>
      </div>
    </article>
  )
}

function getIcon(type) {
  switch (type) {
    case 'github':    return '◐'
    case 'doc':       return '◨'
    case 'external':  return '◈'
    case 'dashboard': return '▤'
    default:          return '◇'
  }
}
