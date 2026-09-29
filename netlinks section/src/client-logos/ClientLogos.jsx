import { logosSection } from './ClientLogosData'
import './client-logos.css'

function ClientLogos() {
  const { label, orgs } = logosSection
  const track = (key) => (
    <div className="marquee-track" key={key}>
      {orgs.map((org) => (
        <img
          key={org.name}
          className="org"
          src={org.image}
          alt={org.name}
          width="160"
          height="72"
          loading="lazy"
        />
      ))}
    </div>
  )

  return (
    <div className="band band-cream">
      <div className="logos" id="clients">
        <p className="logos-label">{label}</p>

        <div className="marquee" id="logos-marquee">
          {track('a')}
          {track('b')}
        </div>

        <ul className="sr-only">
          {orgs.map((org) => (
            <li key={org.name}>{org.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ClientLogos
