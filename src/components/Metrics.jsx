import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data'

export default function Metrics() {
  const trackRef = useRef(null)

  // Items used in the ribbon — pulls from the actual projects array
  const items = projects.slice(0, 7).map(p => ({
    slug: p.slug,
    title: p.title,
    tag: p.tag,
    year: p.year
  }))

  // Duplicate the items for a seamless loop
  const ribbonItems = [...items, ...items]

  return (
    <section className="ribbon" aria-label="Recent work">
      <div className="ribbon__heading-wrap container">
        <div className="ribbon__lead">
          <span className="ribbon__lead-num">Recent work</span>
          <span className="ribbon__lead-line" />
          <span className="ribbon__lead-tail">Currently building</span>
        </div>
      </div>

      <div className="ribbon__viewport">
        <div className="ribbon__track" ref={trackRef}>
          {ribbonItems.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              to={`/work/${item.slug}`}
              className="ribbon__item"
            >
              <span className="ribbon__item-title">{item.title}</span>
              <span className="ribbon__item-meta">
                <span>{item.tag}</span>
                <span className="ribbon__item-year">{item.year}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="ribbon__caption-wrap container">
        <p className="ribbon__caption">
          A snapshot of what I've shipped recently — voice cloning for ALS patients, an AWS-powered refugee support assistant, an adaptive cyber risk framework for financial institutions, and more. <a href="#projects" className="ribbon__cta">See all projects →</a>
        </p>
      </div>
    </section>
  )
}
