const links = [
  { label: 'Work', href: '#work' },
  { label: 'What we do', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            φ
          </span>
          <span style={{ fontWeight: 800 }}>Phi.AI</span>
        </div>
        <div>© 2025–2026 Phi.AI — AI engineering. Cairo, Egypt.</div>
        <div className="site-footer__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
