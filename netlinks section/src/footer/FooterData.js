import logo from '../assets/netlinks logo.avif'

export const brand = {
  name: 'NETLINKS',
  href: '#top',
  logo,
  body: 'A technology partner for Odoo ERP implementation, custom software development, AI automation, and digital transformation.',
  contact: [
    { label: 'info@netlinks.af', href: 'mailto:info@netlinks.af' },
    { label: '077-302-0101', href: 'tel:+93773020101' },
    'NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw',
    'Kabul, Afghanistan',
  ],
  social: [
    { name: 'X', href: 'https://x.com/netlinksinc', icon: 'x' },
    { name: 'GitHub', href: 'https://github.com/NETLINKSAF', icon: 'github' },
    { name: 'Instagram', href: 'https://www.instagram.com/netlinksofficial/', icon: 'instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@netlinksinc', icon: 'youtube' },
  ],
}

export const columns = [
  {
    heading: 'Solutions',
    links: [
      { label: 'CRM', href: '#services' },
      { label: 'Sales management', href: '#services' },
      { label: 'Point of sale', href: '#services' },
      { label: 'Accounting', href: '#services' },
      { label: 'Inventory', href: '#platform' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Odoo ERP services', href: '#platform' },
      { label: 'Custom software', href: '#platform' },
      { label: 'AI & automation', href: '#platform' },
      { label: 'IT staff augmentation', href: '#services' },
      { label: 'Digital transformation', href: '#services' },
      { label: 'Cloud & managed', href: '#services' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Manufacturing', href: '#industries' },
      { label: 'Retail & e-commerce', href: '#industries' },
      { label: 'Trades & field services', href: '#industries' },
      { label: 'Professional services', href: '#industries' },
      { label: 'Nonprofits', href: '#industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Customers', href: '#clients' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#cta' },
    ],
  },
]

export const bottom = {
  copyright: `© ${new Date().getFullYear()} NETLINKS. All rights reserved.`,
  legal: [
    { label: 'Sitemap', href: '#top' },
    { label: 'Business ethics', href: '#top' },
    { label: 'Privacy policy', href: '#top' },
    { label: 'Terms of use', href: '#top' },
  ],
}
