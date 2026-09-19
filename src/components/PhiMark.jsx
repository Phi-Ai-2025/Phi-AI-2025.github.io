/*
 * The Phi.AI mark — the Greek letter Φ cut flat, its right counter a lit cyan
 * panel carrying a node graph. Design 5b, "flat cut, graphite + cyan".
 *
 * Ported from the phi-voice app so both products draw the same artwork. The
 * body is `currentColor`, so the mark takes the ink of whatever it sits in;
 * the counter and its graph come from the `--logo-*` tokens in index.css.
 *
 * The node graph is the point of the mark, so it is in every placement. What
 * changes with size is how it is drawn:
 *
 *   cut="display"   the fine counter and hair-thin links, all eight of them.
 *                   Wants 56px or more — below that the links close into a
 *                   smudge. The floating mark in the hero is the only one.
 *   cut="small"     the default, and what the app icon uses: a wider counter
 *                   to open up the panel, heavier strokes and fatter nodes,
 *                   and the two long cross-diagonals dropped so the network
 *                   still reads as a network down at 24px.
 *
 * The graph is dark on cyan whatever the background: the counter is always
 * cyan, so the ink over it never has to change.
 */
import { useId } from 'react'

// Display cut, drawn for 56px and up.
const COUNTER = 'M53 15 C65 16 74 27 74 41 C74 52 66 59 53 61 Z'
const BODY = [
  'M43 9 C28 13 19 28 19 45 C19 58 30 66 48 68 L48 60 C33 58 27 52 27 42 C27 29 33 17 43 13 Z',
  'M52 10 C68 11 82 26 82 45 C82 60 70 68 53 69 L53 61 C66 59 74 52 74 41 C74 27 65 16 52 15 Z',
  'M46.6 9 L53.4 9 L53.4 91 L46.6 91 Z',
]
const LINKS =
  'M58 21 L69 28 M58 21 L70 42 M58 37 L69 28 M58 37 L70 42 ' +
  'M59 53 L69 28 M59 53 L70 42 M58 21 L58 37 L59 53 M69 28 L70 42'

// Small cut: wider counter and a heavier body, so the shape survives being
// scaled down instead of closing up.
const COUNTER_SM = 'M53 14 C66 15 77 26 77 40 C77 51 68 59 53 61 Z'
const BODY_SM = [
  'M42 8 C26 12 15 28 15 45 C15 61 28 70 48 72 L48 60 C33 58 25 51 25 41 C25 27 32 16 42 12 Z',
  'M53 8 C71 9 86 26 86 45 C86 62 71 71 53 73 L53 61 C68 59 77 51 77 40 C77 26 66 15 53 14 Z',
  'M45.6 8 L54.4 8 L54.4 92 L45.6 92 Z',
]
// The same network with the two long cross-diagonals taken out: at small
// sizes they cross everything else and the panel turns to mush.
const LINKS_SM =
  'M58 21 L69 28 M58 37 L69 28 M58 37 L70 42 ' +
  'M59 53 L70 42 M58 21 L58 37 L59 53 M69 28 L70 42'

const NODES = [
  [58, 21],
  [58, 37],
  [59, 53],
  [69, 28],
  [70, 42],
]

const CUTS = {
  display: { counter: COUNTER, body: BODY, links: LINKS, stroke: 0.9, node: 2.3 },
  small: { counter: COUNTER_SM, body: BODY_SM, links: LINKS_SM, stroke: 1.6, node: 3 },
}

export default function PhiMark({ className, title, cut = 'small' }) {
  // One clip path per instance — two marks on a page must not share an id.
  const clipId = useId()
  const { counter, body, links, stroke, node } = CUTS[cut] ?? CUTS.small

  return (
    <svg
      viewBox="0 0 100 100"
      className={className ? `phi-mark ${className}` : 'phi-mark'}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : 'true'}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={counter} />
        </clipPath>
      </defs>
      <path d={counter} fill="var(--logo-cyan)" />
      <g clipPath={`url(#${clipId})`}>
        <g stroke="var(--logo-graph)" strokeWidth={stroke} fill="none" strokeLinecap="round">
          <path d={links} />
        </g>
        <g fill="var(--logo-graph)">
          {NODES.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={node} />
          ))}
        </g>
      </g>
      <g fill="currentColor">
        {body.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  )
}
