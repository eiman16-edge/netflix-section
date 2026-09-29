import { useState } from 'react'
import { bottom, brand, columns } from './FooterData'
import './footer.css'

const socialIcons = {
  x: (
    <path
      d="M2 2h3.2l3.6 4.9L12.9 2H14l-5.1 6.1L14 14h-3.2l-3.9-5.3L2.4 14H1.3l5.4-6.4L2 2Z"
      fill="currentColor"
    />
  ),
  github: (
    <path
      d="M8 1a7 7 0 0 0-2.2 13.65c.35.06.48-.15.48-.34v-1.2c-1.94.42-2.35-.83-2.35-.83-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.65.76 2.05.58.06-.45.25-.76.45-.94-1.55-.18-3.18-.78-3.18-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.85 0 0 .59-.19 1.92.72a6.6 6.6 0 0 1 3.5 0c1.33-.91 1.92-.72 1.92-.72.38.96.14 1.67.07 1.85.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.65.48 1.31v1.94c0 .19.13.41.49.34A7 7 0 0 0 8 1Z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="8"
        cy="8"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="11.4" cy="4.6" r="0.9" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect
        x="1.5"
        y="4"
        width="13"
        height="8"
        rx="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M7 6.4l3.4 1.6L7 9.6V6.4Z" fill="currentColor" />
    </>
  ),
}

function useTheme() {
  // The inline script in index.html already applied the stored class before first
  // paint, so read it here rather than syncing from an effect after mount.
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    setDark((current) => {
      const next = !current
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('netlinks-theme', next ? 'dark' : 'light')
      } catch {
        /* storage unavailable, theme still applies for this session */
      }
      return next
    })
  }

  return { dark, toggle }
}

function Footer() {
  const { dark, toggle } = useTheme()

  return (
    <footer className="site-footer" id="footer">
      <div className="ft-grid">
        <div className="ft-brand">
          <a className="logo" href={brand.href}>
            <img className="logo-img" src={brand.logo} alt={brand.name} height="28" loading="lazy" />
          </a>
          <p>{brand.body}</p>

          <div className="ft-contact">
            {brand.contact.map((item) =>
              typeof item === 'string' ? (
                <span key={item}>{item}</span>
              ) : (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ),
            )}
          </div>

          <div className="ft-social">
            {brand.social.map((social) => (
              <a
                className="ft-social-link"
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NETLINKS on ${social.name}`}
              >
                <svg
                  viewBox="0 0 16 16"
                  width="15"
                  height="15"
                  fill="none"
                  aria-hidden="true"
                >
                  {socialIcons[social.icon]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h3>{column.heading}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ft-bottom">
        <span>{bottom.copyright}</span>

        <span className="ft-legal">
          {bottom.legal.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
          <button
            id="theme-toggle"
            type="button"
            className="theme-toggle-link"
            aria-label="Toggle theme"
            onClick={toggle}
          >
            {dark ? <span className="label-dark">Light mode</span> : <span>Dark mode</span>}
          </button>
        </span>
      </div>
    </footer>
  )
}

export default Footer
