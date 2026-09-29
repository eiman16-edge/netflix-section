import { hero } from './HeroData'
import './hero.css'

const Arrow = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path
      d="M2 12L12 2M12 2H5M12 2v7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function HeroBody({ parts }) {
  return parts.map((part, index) => {
    if (typeof part === 'string') return <span key={index}>{part}</span>

    return (
      <a key={part.text} href={part.href} target={part.external ? '_blank' : undefined} rel="noopener">
        {part.text}
      </a>
    )
  })
}

function Hero() {
  const { eyebrow, title, emphasis, body, ctas, proof, visual } = hero

  return (
    <section className="hero-band" id="top" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero-left">
          <span className="hero-eyebrow">
            <span className="dot" />
            <span className="mono">{eyebrow}</span>
          </span>

          <h1 id="hero-title">
            {title.map((line, index) => (
              <span key={line}>
                {index === emphasis ? <em>{line}</em> : line}
                {index < title.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <div className="hero-sub">
            <p>
              <HeroBody parts={body} />
            </p>

            <div className="hero-cta">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  className={`btn btn-${cta.variant}`}
                  href={cta.href}
                >
                  {cta.label}
                  {cta.variant === 'primary' && <Arrow />}
                </a>
              ))}
            </div>

            <div className="hero-proof">
              {proof.map((item) => (
                <div className="pf" key={item.label}>
                  <span className="pv">
                    {item.value}
                    {item.suffix && <em>{item.suffix}</em>}
                  </span>
                  <span className="pl">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src={visual.src}
            alt={visual.alt}
            width="1280"
            height="960"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
