import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTiktok,
  FaViber,
  FaWhatsapp,
} from 'react-icons/fa'

const DEFAULT_SOCIAL_SETTINGS = {
  instagram: {
    enabled: true,
    url: 'https://www.instagram.com/yana.korobeinyk/',
  },
  tiktok: {
    enabled: true,
    url: 'https://www.tiktok.com/@yana.korobeinykphoto',
  },
  facebook: {
    enabled: false,
    url: '',
  },
  whatsapp: {
    enabled: true,
    phone: '+306944127028',
  },
  telegram: {
    enabled: false,
    usernameOrUrl: '',
  },
  viber: {
    enabled: false,
    phoneOrUrl: '',
  },
}

const getPhoneDigits = (value) => (value || '').replace(/\D/g, '')

const getWhatsAppUrl = (value) => {
  if (!value) {
    return ''
  }

  if (value.startsWith('http')) {
    return value
  }

  const phone = getPhoneDigits(value)

  return phone ? `https://wa.me/${phone}` : ''
}

const getTelegramUrl = (value) => {
  if (!value) {
    return ''
  }

  if (value.startsWith('http')) {
    return value
  }

  return `https://t.me/${value.replace(/^@/, '')}`
}

const getViberUrl = (value) => {
  if (!value) {
    return ''
  }

  if (value.startsWith('http') || value.startsWith('viber:')) {
    return value
  }

  const phone = getPhoneDigits(value)

  return phone ? `viber://chat?number=%2B${phone}` : ''
}

const getSocialSettings = (socialSettings, socialLinks) => {
  if (socialSettings) {
    return Object.keys(DEFAULT_SOCIAL_SETTINGS).reduce((acc, key) => {
      acc[key] = {
        ...DEFAULT_SOCIAL_SETTINGS[key],
        ...socialSettings[key],
      }

      return acc
    }, {})
  }

  if (socialLinks) {
    return {
      ...DEFAULT_SOCIAL_SETTINGS,
      instagram: {
        enabled: true,
        url: socialLinks.instagramUrl || DEFAULT_SOCIAL_SETTINGS.instagram.url,
      },
      tiktok: {
        enabled: true,
        url: socialLinks.tiktokUrl || DEFAULT_SOCIAL_SETTINGS.tiktok.url,
      },
      whatsapp: {
        enabled: true,
        phone: socialLinks.whatsappNumber || DEFAULT_SOCIAL_SETTINGS.whatsapp.phone,
      },
    }
  }

  return DEFAULT_SOCIAL_SETTINGS
}

const Social = ({socialSettings, socialLinks, className = ''}) => {
  const settings = getSocialSettings(socialSettings, socialLinks)
  const items = [
    {
      key: 'instagram',
      label: 'Instagram',
      href: settings.instagram.url,
      icon: AiOutlineInstagram,
      enabled: settings.instagram.enabled,
    },
    {
      key: 'tiktok',
      label: 'TikTok',
      href: settings.tiktok.url,
      icon: FaTiktok,
      enabled: settings.tiktok.enabled,
    },
    {
      key: 'facebook',
      label: 'Facebook',
      href: settings.facebook.url,
      icon: FaFacebookF,
      enabled: settings.facebook.enabled,
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      href: getWhatsAppUrl(settings.whatsapp.phone || settings.whatsapp.url),
      icon: FaWhatsapp,
      enabled: settings.whatsapp.enabled,
    },
    {
      key: 'telegram',
      label: 'Telegram',
      href: getTelegramUrl(settings.telegram.usernameOrUrl || settings.telegram.url),
      icon: FaTelegramPlane,
      enabled: settings.telegram.enabled,
    },
    {
      key: 'viber',
      label: 'Viber',
      href: getViberUrl(settings.viber.phoneOrUrl || settings.viber.url),
      icon: FaViber,
      enabled: settings.viber.enabled,
    },
  ].filter((item) => item.enabled !== false && item.href)

  if (!items.length) {
    return null
  }

  return (
    <ul className={`flex justify-between items-center max-w-[360px] dark:text-light ${className}`}>
      {items.map(({href, icon: Icon, key, label}) => (
        <li className="p-4 hover:text-hover" key={key}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={30} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
