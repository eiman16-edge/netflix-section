import { ctaSection } from './CtaData'
import './cta.css'

const Arrow = () => (
  <svg viewBox="0 0 12 12" aria-hidden="true">
    <path
      d="M2 10L10 2M10 2H4M10 2v6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function CallToAction() {
  const { title, emphasis, body, cta, waves } = ctaSection

  return (
    <section className="cta" id="cta" aria-labelledby="cta-title">
      <div className="cta-inner">
        <div className="cta-grad" aria-hidden="true" />

        <svg
          className="cta-lines"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g stroke="white" fill="none" strokeWidth="1">
            {waves.map((d) => (
              <path d={d} key={d} />
            ))}
          </g>
        </svg>

        <h2 className="serif" id="cta-title">
          {title.map((line, index) => (
            <span key={line}>
              {index === emphasis ? <em>{line}</em> : line}
              {index < title.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p>{body}</p>

        <a className="btn btn-primary cta-btn" href={cta.href}>
          {cta.label}
          <Arrow />
        </a>
      </div>
    </section>
  )
}

export default CallToAction
