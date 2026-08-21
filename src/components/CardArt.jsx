/*
 * Art for the three engagement cards.
 *
 * Each one plays a short loop when the card scrolls into view, showing the
 * shape of that engagement rather than a static icon:
 *   embed  — a blue seat slides into a row of existing seats and wires in
 *   build  — a capability drops into a gap in a product and comes alive
 *   ship   — work travels a rail from idea to shipped product
 *
 * Colours are class-driven so everything resolves against the site palette.
 */
import { useEffect, useRef, useState } from 'react'

const TICK = 1050

function useBuildLoop(steps) {
  const ref = useRef(null)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setPlaying(true)
      return
    }
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setPlaying(true), {
      threshold: 0.4,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!playing) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStep(steps - 2) // rest on the finished state instead of looping
      return
    }
    const id = setInterval(() => setStep((s) => (s + 1) % steps), TICK)
    return () => clearInterval(id)
  }, [playing, steps])

  return [ref, step]
}

const on = (base, isOn) => (isOn ? base : `${base} is-off`)

function Art({ innerRef, label, children }) {
  return (
    <svg
      ref={innerRef}
      className="ca"
      viewBox="0 0 290 165"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  )
}

/* AI Technical Arm — a blue seat joins a row of existing ones and wires in. */
export function EmbedArt() {
  const [ref, step] = useBuildLoop(5)
  const seated = step >= 1
  const wired = step >= 2
  const live = step >= 3

  const seats = [40, 105, 170, 235] // x centres; the third is the empty seat

  return (
    <Art innerRef={ref} label="A blue teammate joining a row of existing seats and wiring in">
      {/* connections from the new seat out to its neighbours */}
      <path
        d="M128 83 H148 M192 83 H212"
        className={on('ca-wire', wired)}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {seats.map((cx, i) =>
        i === 2 ? null : (
          <rect key={cx} x={cx - 22} y="61" width="44" height="44" rx="13" className="ca-seat" />
        ),
      )}

      {/* the seat waiting to be filled */}
      <rect
        x="148" y="61" width="44" height="44" rx="13"
        className={on('ca-slot', !seated)}
        strokeWidth="2" strokeDasharray="6 5"
      />

      {/* the new teammate, arriving from above */}
      <g className={on('ca-drop', seated)}>
        <rect x="148" y="61" width="44" height="44" rx="13" className="ca-brand" />
        <circle cx="170" cy="83" r="19" className={on('ca-ring', live)} strokeWidth="2" />
      </g>
    </Art>
  )
}

/* Ready AI Service — a capability drops into a gap and starts working. */
export function BuildArt() {
  const [ref, step] = useBuildLoop(5)
  const seated = step >= 1
  const live = step >= 2
  const done = step >= 3

  return (
    <Art innerRef={ref} label="An AI capability dropping into a gap in an existing product">
      <rect x="40" y="26" width="210" height="113" rx="15" className="ca-panel" strokeWidth="2.5" />
      <path d="M40 50 H250" className="ca-rule" strokeWidth="2" />
      <circle cx="55" cy="38" r="3.5" className="ca-dot-soft" />
      <circle cx="67" cy="38" r="3.5" className="ca-dot-soft" />

      <rect x="55" y="66" width="52" height="10" rx="5" className={on('ca-row', !live)} />
      <rect x="55" y="88" width="38" height="10" rx="5" className={on('ca-row', !live)} />
      <rect x="55" y="110" width="46" height="10" rx="5" className={on('ca-row', !live)} />

      <rect x="55" y="66" width="52" height="10" rx="5" className={on('ca-row-live', live)} />
      <rect x="55" y="88" width="38" height="10" rx="5" className={on('ca-row-live', live)} />
      <rect x="55" y="110" width="46" height="10" rx="5" className={on('ca-row-live', live)} />

      <rect
        x="132" y="62" width="100" height="62" rx="12"
        className={on('ca-slot', !seated)}
        strokeWidth="2" strokeDasharray="6 5"
      />

      <g className={on('ca-drop', seated)}>
        <rect x="132" y="62" width="100" height="62" rx="12" className="ca-brand" />
        <path d="M156 93 h20 M182 84 l10 9 -10 9" className="ca-on-brand" strokeWidth="2.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className={on('ca-pop', done)}>
        <circle cx="232" cy="62" r="12" className="ca-ok-bg" />
        <path d="M226 62 l4.5 4.5 8-8.5" className="ca-ok" strokeWidth="2.4"
          strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Art>
  )
}

/* End-to-End Product — work travels the rail from idea to shipped. */
export function ShipArt() {
  const [ref, step] = useBuildLoop(5)
  const stops = [58, 145, 232]
  const at = Math.min(step, 2) // the carrier rests on the last stop while holding

  return (
    <Art innerRef={ref} label="Work travelling a rail from idea to a shipped product">
      <path d="M58 96 H232" className="ca-rail" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d={`M58 96 H${stops[at]}`}
        className="ca-rail-done"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {stops.map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="96" r="7" className={on('ca-stop', at >= i)} />
        </g>
      ))}

      {/* idea → build → ship, each filling as the carrier reaches it */}
      <rect x="34" y="40" width="50" height="38" rx="10"
        className={on('ca-tile', at >= 0)} strokeWidth="2" strokeDasharray="6 5" />
      <rect x="45" y="55" width="28" height="6" rx="3" className={on('ca-sketch', at >= 0)} />

      <rect x="120" y="40" width="50" height="38" rx="10"
        className={on('ca-tile', at >= 1)} strokeWidth="2" />
      <rect x="131" y="52" width="28" height="6" rx="3" className={on('ca-line-soft', at >= 1)} />
      <rect x="131" y="63" width="18" height="6" rx="3" className={on('ca-line-soft', at >= 1)} />

      <g className={on('ca-pop', at >= 2)}>
        <rect x="206" y="40" width="50" height="38" rx="11" className="ca-brand" />
        <rect x="217" y="52" width="28" height="6" rx="3" className="ca-on-brand-fill" />
        <rect x="217" y="63" width="18" height="6" rx="3" className="ca-on-brand-faint" />
      </g>

      <g className="ca-carrier" style={{ transform: `translateX(${stops[at] - stops[0]}px)` }}>
        <circle cx="58" cy="96" r="10" className="ca-brand" />
        <circle cx="58" cy="96" r="16" className="ca-pulse" strokeWidth="2" />
      </g>
    </Art>
  )
}

export const serviceArt = {
  embed: EmbedArt,
  build: BuildArt,
  ship: ShipArt,
}
