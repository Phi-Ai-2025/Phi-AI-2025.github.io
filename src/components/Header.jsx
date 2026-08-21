import { useEffect, useState } from 'react'
import { nav } from '../data/site'

const sections = nav.map((item) => item.href).filter((href) => href.startsWith('#'))

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [active, setActive] = useState('')

  // solid backdrop only once the bar has left the top of the page
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight whichever section is crossing the middle of the viewport
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const els = sections
      .map((href) => document.querySelector(href))
      .filter(Boolean)
    if (els.length === 0) return

    const seen = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(`#${e.target.id}`, e.isIntersecting))
        const current = sections.find((href) => seen.get(href))
        setActive(current ?? '')
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <div className="site-header__inner">
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
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'is-active' : undefined}
              aria-current={active === item.href ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Book a call
          </a>
        </nav>
      </div>
    </header>
  )
}
