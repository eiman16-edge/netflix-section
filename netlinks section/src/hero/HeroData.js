import heroImage from '../assets/hero-section.webp'

export const hero = {
  eyebrow: "20 years delivering from Kabul · Afghanistan's enterprise technology partner",
  title: ['Enterprise Odoo, custom software, and AI,', 'engineered in Afghanistan.'],
  emphasis: 1,
  body: [
    'Afghanistan-based since 2005. We built the 500,000-employee Odoo HR and payroll system for the national government, and ',
    { text: 'Jobs.af', href: 'https://www.jobs.af', external: true },
    ", the country's largest job-hunting platform. Senior teams in Kabul delivering for clients across Afghanistan, the GCC, India, and the US.",
  ],
  ctas: [
    { label: 'Book a 30-min discovery call', href: '#cta', variant: 'primary' },
    { label: 'Explore services', href: '#services', variant: 'ghost' },
  ],
  proof: [
    {
      value: '500K',
      suffix: '+',
      label: 'Employees · national-government Odoo HR rollout',
    },
    { value: '20', suffix: 'yrs', label: 'Delivering enterprise software from Kabul' },
    { value: 'Jobs.af', label: "Afghanistan's largest job platform, built by NETLINKS" },
  ],
  visual: {
    src: heroImage,
    alt: 'Hero composition, unified enterprise systems on Odoo',
  },
}

export const servicesLink = { label: 'All services', href: '#services' }
