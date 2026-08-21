import { useState } from 'react'
import { nav } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden="true">
          φ
        </span>
        <span className="brand-name">
          Phi<span>.AI</span>
        </span>
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>

      <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Book a call
        </a>
      </nav>
    </header>
  )
}
