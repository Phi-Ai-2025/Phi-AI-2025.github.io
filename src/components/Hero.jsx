import { hero } from '../data/site'

function FloatCard({ card }) {
  return (
    <div className={`float-card float-card--${card.position}`}>
      <span className={`float-card__icon float-card__icon--${card.tone}`} aria-hidden="true">
        {card.icon}
      </span>
      <div>
        <div className="float-card__title">{card.title}</div>
        <div className="float-card__sub">{card.sub}</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="shell hero" id="top">
      <div>
        <div className="eyebrow-pill">{hero.eyebrow}</div>

        <h1>
          <span className="lede">
            {hero.headline[0]}
            <br />
            {hero.headline[1]}{' '}
          </span>
          <span className="marker">{hero.headlineMark}</span>
        </h1>

        <p className="hero-pitch">{hero.pitch}</p>

        <div className="hero-actions">
          <a className="btn btn--primary" href="#contact">
            {hero.primaryCta} →
          </a>
          <a className="btn btn--ghost" href="#work">
            {hero.secondaryCta}
          </a>
        </div>

        <div className="hero-tags">
          {hero.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <span className="shape shape--pink" aria-hidden="true" />
        <span className="shape shape--warm" aria-hidden="true" />
        <span className="shape shape--blue" aria-hidden="true" />
        <span className="phi-orb" aria-hidden="true">
          φ
        </span>
        <img
          src="/assets/hero-vr.webp"
          width="940"
          height="864"
          alt="A child reaching out while wearing a VR headset"
        />
        {hero.cards.map((card) => (
          <FloatCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  )
}
