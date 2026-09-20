// Single source of truth for brand, contact and location data.
// Used by page metadata, JSON-LD structured data and UI components.

export const SITE_URL = 'https://www.guelichweb.online'

export const LOCALES = ['fr', 'en']
export const DEFAULT_LOCALE = 'fr'

export const BRAND = {
  name: 'Guelichweb',
  legalName: 'Guelichweb',
  logo: `${SITE_URL}/logo.png`,
  founder: 'Christian Guegueligue',
  founderImage: `${SITE_URL}/images/christian.jpg`,
}

export const CONTACT = {
  phone: '+2290166368705',
  phoneDisplay: '+229 01 66 36 87 05',
  whatsapp: 'https://wa.me/2290166368705',
  email: 'christ@guelichweb.online',
}

export const ADDRESS = {
  city: 'Abomey-Calavi',
  region: 'Atlantique',
  country: 'BJ',
  countryName: 'Bénin',
}

export const AREAS_SERVED = [
  'Abomey-Calavi',
  'Cotonou',
  'Godomey',
  'Porto-Novo',
  'Grand Nokoué',
  'Bénin',
]

export const SOCIALS = [
  'https://www.linkedin.com/company/guelichweb',
  'https://www.facebook.com/guelichweb',
  'https://www.instagram.com/guelichweb',
]

export const whatsappLink = (message) =>
  message ? `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}` : CONTACT.whatsapp
