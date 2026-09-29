import { industriesSection } from './IndustryData'
import './industries.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M8 20L20 8M20 8H10M20 8v10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function Industries() {
  const { eyebrow, title, emphasis, body, industries } = industriesSection

  return (
    <section className="wrap industries" id="industries" aria-labelledby="industries-title">
      <div className="sec-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="sec-title serif" id="industries-title">
            {title.map((line, index) => (
              <span key={line}>
                {index === emphasis ? <em>{line}</em> : line}
                {index < title.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
        <p>{body}</p>
      </div>

      <div className="ind-list">
        {industries.map((industry) => (
          <a className="ind-row" key={industry.number} href="#cta">
            <span className="idx">{industry.number}</span>
            <span className="name serif">{industry.name}</span>
            <span className="desc">{industry.desc}</span>
            <span className="go">
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Industries
