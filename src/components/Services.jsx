import Checklist from './Checklist'
import { serviceArt } from './CardArt'
import { services } from '../data/site'

export default function Services({ onPickEngagement }) {
  return (
    <section className="shell services" id="services">
      <div className="section-head">
        <div className="kicker kicker--soft">{services.kicker}</div>
        <h2>{services.title}</h2>
        <p>{services.sub}</p>
      </div>

      <div className="services-grid">
        {services.cards.map((card) => {
          const Art = serviceArt[card.art]
          return (
            <article className={`service-card service-card--${card.tone}`} key={card.id}>
              <div className="service-card__art">
                <Art />
              </div>
              <h3>{card.title}</h3>
              <Checklist items={card.points} />
              <a
                className="service-card__link"
                href="#contact"
                onClick={() => onPickEngagement(card.engagement)}
              >
                {card.link}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
