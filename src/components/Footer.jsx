import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>© {new Date().getFullYear()} {profile.shortName}</div>
        <div>Built with React · Hand-coded with care</div>
      </div>
    </footer>
  )
}
