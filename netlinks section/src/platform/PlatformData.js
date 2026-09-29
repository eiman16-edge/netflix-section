import odooImage from '../assets/second.webp'
import aiImage from '../assets/third.webp'
import engineeringImage from '../assets/fourth.webp'

export const features = [
  {
    eyebrow: '01, Odoo ERP',
    title: ['One platform. Every department.', 'Actually integrated.'],
    emphasis: 1,
    body: 'Certified Odoo partner, 50+ implementations, including a 500,000-employee HR and payroll engagement for a national government with 1,000+ users. Finance, ops, sales, HR, and manufacturing in one platform.',
    bullets: [
      '50+ Odoo deployments delivered, including a 500,000-employee HR, payroll, and custom modules engagement',
      'Odoo migration from SAP, NetSuite, Microsoft Dynamics, QuickBooks, and legacy Odoo',
      'Upgrade-safe custom Odoo modules by senior Python engineers',
      'Enterprise Odoo for manufacturing, distribution, field service, and public sector',
    ],
    link: { label: 'Explore Odoo services', href: '#services' },
    image: odooImage,
    alt: 'Odoo as a unified platform, from 1,000-user rollouts to 500,000-employee engagements',
    reverse: false,
  },
  {
    eyebrow: '02, AI & Automation',
    title: ['Agents that don’t just chat,', 'they work.'],
    emphasis: 1,
    body: 'Production AI agents that close tickets, reconcile invoices, and answer procurement queries. Grounded, governed, observable, not demos.',
    bullets: [
      'Retrieval-grounded agents with full citation and audit trail',
      'AI-powered ERP: intelligent automation inside Odoo workflows',
      'Human-in-the-loop controls for regulated and high-stakes processes',
      'Typical outcomes: 30%+ reduction in manual-task hours',
    ],
    link: { label: 'See how it works', href: '#services' },
    image: aiImage,
    alt: 'Governed, observable AI, agents at work inside a business',
    reverse: true,
  },
  {
    eyebrow: '03, Custom engineering',
    title: ['When nothing off-the-shelf', 'quite fits.'],
    emphasis: 1,
    body: 'A senior product team, designers, PMs, engineers, embedded with yours. Prototype in weeks, ship in months, maintain what we build. No junior hand-offs.',
    bullets: [
      'Senior-only squads, no ticket-shuffling to offshore pools',
      'Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes, serverless',
      'ISO 12207 + ISO 27001 certified delivery at the group level',
      'Compliance-ready from day one: SSO via SAML/OIDC, RBAC, audit logs, encryption',
    ],
    link: { label: 'Engineering philosophy', href: '#services' },
    image: engineeringImage,
    alt: 'Senior engineering craft, the artifacts of a real working squad',
    reverse: false,
  },
]
