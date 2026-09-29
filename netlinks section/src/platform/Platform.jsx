import { features } from './PlatformData'
import './platform.css'

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

function Feature({ eyebrow, title, emphasis, body, bullets, link, image, alt, reverse }) {
  return (
    <article className={`feat${reverse ? ' reverse' : ''}`}>
      <div className="feat-text">
        <p className="eyebrow">{eyebrow}</p>
        <h3 className="serif">
          {title.map((line, index) => (
            <span key={line}>
              {index === emphasis ? <em>{line}</em> : line}
              {index < title.length - 1 && <br />}
            </span>
          ))}
        </h3>
        <p>{body}</p>

        <ul className="feat-bullets">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <a className="btn btn-ghost feat-link" href={link.href}>
          {link.label}
          <Arrow />
        </a>
      </div>

      <div className="feat-visual">
        <img
          className="feat-image"
          src={image}
          alt={alt}
          width="1280"
          height="960"
          loading="lazy"
        />
      </div>
    </article>
  )
}

function Platform() {
  return (
    <div className="band band-cream">
      <section className="wrap platform" id="platform" aria-label="Capabilities">
        {features.map((feature) => (
          <Feature key={feature.eyebrow} {...feature} />
        ))}
      </section>
    </div>
  )
}

export default Platform
