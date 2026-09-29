import { useEffect, useRef, useState } from 'react'
import { brand, navCta, navLinks, navPanels } from './NavData'
import './navbar.css'

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

const Chevron = () => (
  <svg className="chev" viewBox="0 0 10 6" aria-hidden="true">
    <path
      d="M1 1l4 4 4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function NavBar() {
  const [openPanel, setOpenPanel] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!openPanel) return undefined

    const onPointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) setOpenPanel(null)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenPanel(null)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openPanel])

  const closeAll = () => {
    setOpenPanel(null)
    setMenuOpen(false)
  }

  return (
    <nav className="nav" aria-label="Primary" ref={navRef}>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div className="nav-inner">
        <a className="logo" href={brand.href}>
          <img className="logo-img" src={brand.logo} alt={brand.name} height="24" />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => {
            const panel = navPanels.find((item) => item.key === link.key)

            if (!panel) {
              return (
                <li className="nav-item" key={link.key}>
                  <a className="nav-trigger nav-trigger-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              )
            }

            const isOpen = openPanel === panel.key
            return (
              <li className="nav-item" key={panel.key}>
                <button
                  type="button"
                  className="nav-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`nav-panel-${panel.key}`}
                  onClick={() => setOpenPanel(isOpen ? null : panel.key)}
                >
                  {panel.label}
                  <Chevron />
                </button>

                <div
                  className="nav-panel"
                  id={`nav-panel-${panel.key}`}
                  data-open={isOpen}
                  hidden={!isOpen}
                >
                  <div className="nav-panel-inner">
                    <div className="nav-featured">
                      <a
                        className="nav-featured-image"
                        href={panel.featured.href}
                        onClick={closeAll}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        <img
                          src={panel.featured.image}
                          alt={panel.featured.alt}
                          loading="lazy"
                          width="640"
                          height="352"
                        />
                      </a>
                      <a
                        className="btn btn-primary nav-featured-cta"
                        href={panel.featured.href}
                        onClick={closeAll}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {panel.featured.cta}
                        <Arrow />
                      </a>
                    </div>

                    {panel.columns.map((column) => (
                      <div className="nav-col" key={column.heading}>
                        <p className="eyebrow nav-col-heading">{column.heading}</p>
                        <ul>
                          {column.links.map((item) => (
                            <li key={item.name}>
                              <a
                                className="nav-link"
                                href={item.href}
                                onClick={closeAll}
                                tabIndex={isOpen ? 0 : -1}
                              >
                                <span className="nav-link-name">{item.name}</span>
                                <span className="nav-link-desc">{item.desc}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {panel.cta && (
                    <div className="nav-panel-cta">
                      <a
                        className="btn btn-ghost"
                        href={panel.cta.href}
                        onClick={closeAll}
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {panel.cta.label}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        <div className="nav-right">
          <a className="btn btn-primary nav-cta" href={navCta.href}>
            {navCta.label}
            <Arrow />
          </a>
          <button
            id="nav-burger"
            type="button"
            className="nav-burger"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" hidden={!menuOpen}>
        <div className="mobile-inner">
          {navPanels.map((panel) => (
            <details className="mobile-group" key={panel.key}>
              <summary>
                {panel.label}
                <Chevron />
              </summary>
              <div className="mobile-group-body">
                <a
                  className="mobile-featured"
                  href={panel.featured.href}
                  onClick={closeAll}
                >
                  <span className="mobile-featured-cta">{panel.featured.cta} &rarr;</span>
                </a>

                {panel.columns.map((column) => (
                  <div key={column.heading}>
                    <p className="eyebrow mobile-extra-heading">{column.heading}</p>
                    <ul>
                      {column.links.map((item) => (
                        <li key={item.name}>
                          <a className="mobile-link" href={item.href} onClick={closeAll}>
                            <span className="mobile-link-name">{item.name}</span>
                            <span className="mobile-link-desc">{item.desc}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {panel.cta && (
                  <a className="mobile-group-cta" href={panel.cta.href} onClick={closeAll}>
                    {panel.cta.label} &rarr;
                  </a>
                )}
              </div>
            </details>
          ))}

          <a className="mobile-group mobile-group-link" href="#cta" onClick={closeAll}>
            Partners
          </a>

          <a className="btn btn-primary mobile-cta" href={navCta.href} onClick={closeAll}>
            {navCta.label} &rarr;
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
