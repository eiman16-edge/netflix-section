import { servicesSection } from './ServicesData'
import './services.css'

const Arrow = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path
      d="M3 11L11 3M11 3H5M11 3v6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function Services() {
  const { eyebrow, title, emphasis, body, services } = servicesSection

  return (
    <section className="wrap services" id="services" aria-labelledby="services-title">
      <div className="sec-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="sec-title serif" id="services-title">
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

      <div className="sol-grid">
        {services.map((service) => (
          <a className="sol" key={service.number} href={service.href}>
            <span className="num">
              {service.number} / {service.tag}
            </span>
            <h3 className="serif">{service.title}</h3>
            <p>{service.body}</p>
            <span className="arrow">
              <Arrow />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Services
