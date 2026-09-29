import { faqSection } from './FaqData'
import './faq.css'

function Faq() {
  const { eyebrow, title, items } = faqSection

  return (
    <div className="band band-cream">
      <section className="wrap faq-section" id="faq" aria-labelledby="faq-title">
        <div className="faq-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="serif" id="faq-title">
            {title}
          </h2>
        </div>

        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span className="faq-q serif">{item.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Faq
