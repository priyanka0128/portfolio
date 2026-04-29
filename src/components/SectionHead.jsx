export default function SectionHead({ num, eyebrow, title }) {
  return (
    <div className="section-head">
      <div>
        <span className="section-head__num">{num} · {eyebrow}</span>
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
