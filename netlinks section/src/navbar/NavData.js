import logo from '../assets/netlinks logo.avif'
import secondImage from '../assets/second.webp'
import thirdImage from '../assets/third.webp'
import fourthImage from '../assets/fourth.webp'

export const brand = {
  name: 'NETLINKS',
  href: '#top',
  logo,
}

export const navCta = { label: 'Get started', href: '#cta' }

export const navPanels = [
  {
    key: 'solutions',
    label: 'Solutions',
    featured: {
      image: secondImage,
      alt: 'Odoo and Zoho, unified solutions across employees, deals, and reporting',
      href: '#services',
      cta: 'Explore Odoo ERP',
    },
    columns: [
      {
        heading: 'Sales & Finance',
        links: [
          { name: 'CRM', desc: 'Pipeline, leads, customer relationships', href: '#services' },
          { name: 'Sales management', desc: 'Quote-to-cash, CPQ, eSign', href: '#services' },
          { name: 'Point of sale', desc: 'POS integrated with the back office', href: '#services' },
          { name: 'Accounting', desc: 'Multi-currency, multi-entity financials', href: '#services' },
        ],
      },
      {
        heading: 'Operations & People',
        links: [
          { name: 'Inventory', desc: 'Warehouse, stock, routing, replenishment', href: '#platform' },
          { name: 'Purchase management', desc: 'RFQs, approvals, vendor scorecards', href: '#platform' },
          { name: 'Human resources', desc: 'Employees, payroll, recruitment', href: '#platform' },
          { name: 'Project management', desc: 'Plan, track, deliver projects', href: '#platform' },
        ],
      },
    ],
    cta: { label: 'See all solutions', href: '#services' },
  },
  {
    key: 'services',
    label: 'Services',
    featured: {
      image: thirdImage,
      alt: 'Governed AI agents at work inside a business process',
      href: '#platform',
      cta: 'Book an Odoo scoping call',
    },
    columns: [
      {
        heading: 'Odoo practice',
        links: [
          {
            name: 'Odoo implementation',
            desc: 'Certified-partner Odoo rollout from discovery to hypercare',
            href: '#platform',
          },
          {
            name: 'Odoo customization',
            desc: 'Upgrade-safe custom Odoo modules in Python',
            href: '#platform',
          },
          {
            name: 'Odoo integration',
            desc: 'Payments, e-commerce, EDI, and 3PL integrations',
            href: '#platform',
          },
          { name: 'Odoo migration', desc: 'SAP, NetSuite, Dynamics, QuickBooks to Odoo', href: '#platform' },
        ],
      },
      {
        heading: 'Engineering & operations',
        links: [
          {
            name: 'Custom software',
            desc: 'Web, mobile, and platform builds by senior squads',
            href: '#platform',
          },
          { name: 'Web & mobile', desc: 'Next.js, React Native, iOS, and Android', href: '#platform' },
          { name: 'AI & automation', desc: 'RAG, agentic AI, and workflow automation', href: '#platform' },
          { name: 'Digital transformation', desc: 'Program delivery, not just strategy', href: '#cta' },
        ],
      },
    ],
    cta: { label: 'All services', href: '#services' },
  },
  {
    key: 'industries',
    label: 'Industries',
    featured: {
      image: fourthImage,
      alt: 'Industries on Odoo, factory floor, retail, and field services',
      href: '#industries',
      cta: 'Read the 500K-employee Odoo case',
    },
    columns: [
      {
        heading: 'Commercial',
        links: [
          { name: 'Manufacturing', desc: 'MRP, production planning, shop-floor visibility', href: '#industries' },
          { name: 'Retail & e-commerce', desc: 'Unified POS, omnichannel inventory, loyalty', href: '#industries' },
          { name: 'Trades & field services', desc: 'Dispatch, mobile workforce, service contracts', href: '#industries' },
        ],
      },
      {
        heading: 'Service sector',
        links: [
          {
            name: 'Professional services',
            desc: 'PSA, project accounting, utilization tracking',
            href: '#industries',
          },
          { name: 'Nonprofits', desc: 'Donor CRM, grants lifecycle, fund accounting', href: '#industries' },
        ],
      },
    ],
    cta: { label: 'All industries', href: '#industries' },
  },
  {
    key: 'company',
    label: 'Company',
    featured: {
      image: secondImage,
      alt: 'Twenty years of NETLINKS, enterprise delivery dashboard',
      href: '#industries',
      cta: 'Our story',
    },
    columns: [
      {
        heading: 'Who we are',
        links: [
          { name: 'About us', desc: 'Twenty years of enterprise delivery', href: '#industries' },
          { name: 'Why NETLINKS', desc: 'Vs. Big 4, boutiques, and offshore', href: '#industries' },
          { name: 'Customers', desc: 'Siemens, Etisalat, World Bank, IFC, UN agencies', href: '#clients' },
          { name: 'Methodology', desc: 'Structured discovery, rehearsed cutovers', href: '#platform' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { name: 'Features', desc: 'Practices that separate senior delivery', href: '#services' },
          { name: 'FAQ', desc: 'Questions CIOs actually ask', href: '#faq' },
          { name: 'Contact', desc: 'General inquiries, press, partnerships', href: '#cta' },
        ],
      },
    ],
    cta: null,
  },
]

export const navLinks = [
  ...navPanels.map(({ key, label }) => ({ key, label })),
  { key: 'partners', label: 'Partners', href: '#cta' },
]
