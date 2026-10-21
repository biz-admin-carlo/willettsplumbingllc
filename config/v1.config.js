// ============================================================================
// DO NOT REMOVE THIS COMMENT
// Version: 5.1.0
//
// This file is the single source of truth for all site content (V1 template).
// Components import from here instead of hardcoding text/links, so edit
// values below to update the live site — no component code changes needed.
//
// Image fields (e.g. heroConfig.backgroundImage, servicesConfig.cards[].image):
// - Leave as an empty string '' to keep the current design (gradient / no photo).
// - Paste an image URL to display that photo instead.
// ============================================================================

export const siteConfig = {
  businessName: 'Wiletts Plumbing And Contracting',
  tagline: 'Reliable Plumbing Solutions Built on Experience',
  description:
    'Wiletts Plumbing And Contracting provides residential, commercial, and industrial plumbing services, repairs, water heater services, and emergency plumbing throughout Western Kentucky.',
  subdomain: 'willettsplumbing',
  url: 'https://willettsplumbing.mybizsolutions.us',
  parentDomain: 'mybizsolutions.us',
  schemaType: 'Plumber',
  keywords: [
    'plumbing contractor',
    'plumbing repair',
    'emergency plumbing',
    'water heater installation',
    'water heater repair',
    'residential plumbing',
    'commercial plumbing',
    'industrial plumbing',
    'Paducah KY plumber',
    'Western Kentucky plumbing services',
  ],
  themeColor: '#f97316',
  backgroundColor: '#0d1117',
  googleVerification: '',
  bingVerification: '',
}

export const logoConfig = {
  part1: 'WILLETTS',
  part2: 'PLUMBING & CONTRACTING',
}

export const navConfig = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    label: 'Request Service',
    href: '#contact',
  },
}

export const heroConfig = {
  backgroundImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=85',
  badge: 'PLUMBING SERVICES — PADUCAH, KY',
  h1: ['RELIABLE', 'PLUMBING', 'DONE RIGHT'],
  subtext:
    'Dependable plumbing solutions for residential, commercial, and industrial properties throughout Western Kentucky.',
  primaryCta: {
    label: 'Call for Service',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Our Services',
    href: '#services',
  },
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '3', label: 'Property Sectors Served' },
    { value: '24/7', label: 'Emergency Plumbing Advertised' },
  ],
}

export const servicesConfig = {
  label: 'WHAT WE DO',
  title: 'Our Plumbing Services',
  cards: [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCvDvNY5Luk0PSTRfaDN0qlCg9fTHskU2JUDwv8kLew&s=10',
      title: 'General Plumbing & Repairs',
      desc: 'Plumbing troubleshooting and repairs to help resolve leaks, fixture problems, and other plumbing issues.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWposmJlnOASL928vVqgs2h67DhBsBMFgWrlz_iwy1Wg&s=10',
      title: 'Water Heater Services',
      desc: 'Water heater installation and repair to help restore reliable hot water to your property.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccQ7pjzWeaJnzq4Ywi-ioNs-HAn9TXKhWo6OB3qnmaQ&s=10',
      title: 'Residential Plumbing',
      desc: 'Plumbing services for homes, including repairs and solutions for everyday plumbing problems.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13ky_HTS3HUrHNPZ4vYbrfNoT5uU8hLyqpNpjryOSbQ&s=10',
      title: 'Commercial Plumbing',
      desc: 'Plumbing services for commercial properties to help keep water systems and fixtures working properly.',
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
      title: 'Industrial Plumbing',
      desc: 'Plumbing support for industrial facilities and more demanding property requirements.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1LqqWADJyj75DF3eCLY43P_3w6DAFjFsRS491svetA&s=10',
      title: 'Emergency Plumbing',
      desc: 'Emergency plumbing support for urgent plumbing problems. Call to confirm availability and response time.',
    },
  ],
}

export const bizSolutionsConfig = {
  url: 'https://mybizsolutions.us/homehttps://mybizsolutions.us/biz/willett%E2%80%99s-plumbing-%26-contracting%2C-llc',
  name: 'MyBizSolutions',
  label: 'BizSolutions Partner',
}

export const mainwebsiteConfig = {
  url: 'https://www.willettsplumbingllc.com/',
  name: 'Wiletts Plumbing And Contracting',
  label: 'Official Website',
}

export const aboutConfig = {
  label: 'WHY CHOOSE US',
  h2: ['Experience You Can Trust,', 'Solutions That Last'],
  desc:
    'Wiletts Plumbing And Contracting provides plumbing solutions for residential, commercial, and industrial customers. With over a decade of hands-on experience, the business focuses on practical repairs and keeping up with modern plumbing technology.',
  checklist: [
    'Over a decade of hands-on experience',
    'Residential and commercial plumbing',
    'Water heater installation and repair',
    'Emergency plumbing support',
  ],
  founder: {
    emoji: '🔧',
    name: 'Matt',
    role: 'Plumbing Professional',
    quote:
      '"We focus on practical plumbing solutions and quality workmanship for every job."',
  },
}

export const contactConfig = {
  label: 'GET IN TOUCH',
  h2: ['CONTACT', '& SERVICE'],
  phone: '(270) 970-4123',
  email: 'Willettsplumbingllc@gmail.com',
  address: 'Paducah, KY 42002',
  mapsUrl: 'https://maps.google.com/?q=Paducah,+KY+42002',
  primaryCta: {
    label: 'Call Now',
    href: 'tel:+12709704123',
  },
  secondaryCta: {
    label: 'Get Directions',
    href: 'https://maps.google.com/?q=Paducah,+KY+42002',
  },
}

export const footerConfig = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: '© 2026 Wiletts Plumbing And Contracting. All rights reserved.',
}