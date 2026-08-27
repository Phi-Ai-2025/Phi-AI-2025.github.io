import { contact } from '../data/site'

// The form posts straight to FormSubmit, the same endpoint the previous site
// used, so no backend is needed on Pages.
const FORM_ENDPOINT = 'https://formsubmit.co/info@phi-ai.co'

export default function Contact({ engagement }) {
  return (
    <section className="contact" id="contact">
      <span className="blob blob--c1" aria-hidden="true" />
      <span className="blob blob--c2" aria-hidden="true" />

      <div className="contact__grid">
        <div className="contact__copy">
          <div className="kicker">{contact.kicker}</div>
          <h2>{contact.title}</h2>
          <p>{contact.sub}</p>

          <div className="contact-facts">
            <div>
              <span className="icon icon--blue" aria-hidden="true">
                @
              </span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div>
              <span className="icon icon--green" aria-hidden="true">
                ◷
              </span>
              {contact.replyNote}
            </div>
          </div>
        </div>

        <form className="contact-form" action={FORM_ENDPOINT} method="POST">
          <input type="hidden" name="_subject" value="New message from the Phi.AI site" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="engagement" value={engagement} readOnly />

          <div className="row">
            <div>
              <label className="visually-hidden" htmlFor="name">
                Name
              </label>
              <input id="name" name="name" placeholder="Name" required />
            </div>
            <div>
              <label className="visually-hidden" htmlFor="email">
                Work email
              </label>
              <input id="email" name="email" type="email" placeholder="Work email" required />
            </div>
          </div>

          <label className="visually-hidden" htmlFor="company">
            Company
          </label>
          <input id="company" name="company" placeholder="Company" />

          <label className="visually-hidden" htmlFor="message">
            What are you trying to build or automate?
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="What are you trying to build or automate?"
            required
          />

          <button className="btn btn--primary" type="submit">
            {contact.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
