import { about } from '../data/site'

/* No team photos and no headcount — this shows how you work with the team
   rather than how big it is, which is what the section actually promises. */
function DirectLine() {
  const { label, from, to, note } = about.link
  return (
    <div className="link-card">
      <div className="link-card__head">{label}</div>

      <div className="link-card__row">
        <div className="link-node">
          <span className="link-node__dot link-node__dot--you" aria-hidden="true" />
          <span className="link-node__txt">
            <strong>{from.title}</strong>
            <small>{from.sub}</small>
          </span>
        </div>

        <div className="link-wire" aria-hidden="true">
          <span className="link-wire__pulse" />
        </div>

        <div className="link-node link-node--brand">
          <span className="link-node__dot" aria-hidden="true">
            φ
          </span>
          <span className="link-node__txt">
            <strong>{to.title}</strong>
            <small>{to.sub}</small>
          </span>
        </div>
      </div>

      <p className="link-card__note">{note}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <span className="blob blob--a1" aria-hidden="true" />
      <span className="blob blob--a2" aria-hidden="true" />
      <span className="blob blob--a3" aria-hidden="true" />

      <div className="shell about__grid">
        <div className="about__portrait">
          <DirectLine />
          <div className="pin-card">
            <div className="pin-card__value">{about.pin.value}</div>
            <div className="pin-card__label">{about.pin.label}</div>
          </div>
        </div>

        <div className="about__copy">
          <div className="kicker">{about.kicker}</div>
          <h2>{about.title}</h2>
          <p>{about.pitch}</p>

          <div className="principles">
            {about.principles.map((item) => (
              <div className="principle" key={item.num}>
                <div className="principle__num">{item.num}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
