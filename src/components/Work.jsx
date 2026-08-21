import AutomationFlow from './AutomationFlow'
import Checklist from './Checklist'
import { work } from '../data/site'

function DcapArt() {
  return (
    <div className="case__art case__art--dcap">
      <span className="shape--tilt-pink" aria-hidden="true" />
      <img
        src="/assets/dcap-woman-new.webp"
        width="1200"
        height="670"
        alt="Browsing filtered job listings on a laptop next to a job opportunities panel"
      />
    </div>
  )
}

function VoiceArt() {
  return (
    <div className="case__art case__art--voice">
      <span className="tile tile--green" aria-hidden="true" />
      <span className="tile tile--warm" aria-hidden="true" />
      <span className="tile tile--blue" aria-hidden="true" />
      <img
        src="/assets/voice-woman.webp"
        width="1024"
        height="765"
        alt="Speaking with a voice assistant that answers back"
      />
    </div>
  )
}

function FlowArt() {
  return (
    <div className="demo-frame">
      <AutomationFlow />
    </div>
  )
}

const caseArt = { dcap: DcapArt, voice: VoiceArt, flow: FlowArt }

function CaseCopy({ item }) {
  return (
    <div>
      <div className="case__tag">{item.tag}</div>
      <h3>{item.title}</h3>
      <Checklist items={item.points} />
    </div>
  )
}

export default function Work() {
  return (
    <section className="work" id="work">
      <span className="blob blob--w1" aria-hidden="true" />
      <span className="blob blob--w2" aria-hidden="true" />
      <span className="blob blob--w3" aria-hidden="true" />
      <span className="blob blob--w4" aria-hidden="true" />

      <div className="shell">
        <div className="section-head">
          <div className="kicker">{work.kicker}</div>
          <h2>{work.title}</h2>
          <p>{work.sub}</p>
        </div>

        <div className="work-list">
          {work.cases.map((item) => {
            const Art = caseArt[item.art]
            return (
              <article
                className={`case accent-${item.accent}${item.flip ? ' case--flip' : ''}`}
                key={item.id}
              >
                {item.flip ? (
                  <>
                    <Art />
                    <CaseCopy item={item} />
                  </>
                ) : (
                  <>
                    <CaseCopy item={item} />
                    <Art />
                  </>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
