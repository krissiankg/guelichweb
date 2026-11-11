'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Meta Pixel and Google Analytics. Nothing loads until the IDs are set:
//   NEXT_PUBLIC_META_PIXEL_ID   (Meta Events Manager)
//   NEXT_PUBLIC_GA_ID           (Google Analytics 4, "G-XXXXXXXXXX")
// and the visitor has accepted the cookie banner.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const HAS_TRACKING = Boolean(PIXEL_ID || GA_ID)
const CONSENT_KEY = 'gw-cookie-consent'
// Dispatched by the footer's "manage cookies" link to show the banner again.
export const REOPEN_EVENT = 'gw-cookie-consent-reopen'
export { HAS_TRACKING }

const TEXT = {
  fr: {
    message: 'Nous utilisons des cookies de mesure d’audience pour améliorer ce site. Vous pouvez les accepter ou les refuser.',
    policy: 'Politique de cookies',
    accept: 'Accepter',
    refuse: 'Refuser',
    label: 'Consentement aux cookies',
  },
  en: {
    message: 'We use audience measurement cookies to improve this site. You can accept or refuse them.',
    policy: 'Cookie policy',
    accept: 'Accept',
    refuse: 'Refuse',
    label: 'Cookie consent',
  },
}

function track(metaEvent, gaEvent, params = {}) {
  if (typeof window === 'undefined') return
  if (window.fbq) window.fbq('track', metaEvent, params)
  if (window.gtag) window.gtag('event', gaEvent, params)
}

export default function Analytics() {
  const params = useParams()
  const lang = params?.lang === 'en' ? 'en' : 'fr'
  const t = TEXT[lang]

  // null = not read yet, 'unset' = no choice made, 'granted' | 'denied'
  const [consent, setConsent] = useState(null)

  useEffect(() => {
    if (!HAS_TRACKING) return
    let stored = null
    try {
      stored = window.localStorage.getItem(CONSENT_KEY)
    } catch {
      // Storage unavailable (private mode): ask again on each visit.
    }
    setConsent(stored === 'granted' || stored === 'denied' ? stored : 'unset')

    const reopen = () => setConsent('unset')
    window.addEventListener(REOPEN_EVENT, reopen)
    return () => window.removeEventListener(REOPEN_EVENT, reopen)
  }, [])

  // Once trackers have loaded on this page, only a reload can stop them.
  const trackersLoaded = useRef(false)

  const choose = (value) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, value)
    } catch {
      // Keep the choice for this page view only.
    }
    if (value === 'denied' && trackersLoaded.current) {
      window.location.reload()
      return
    }
    setConsent(value)
  }

  // Keep the trackers mounted while the banner is reopened after an accept.
  if (consent === 'granted') trackersLoaded.current = true
  const granted = consent === 'granted' || (consent === 'unset' && trackersLoaded.current)

  // Count every click on a WhatsApp or phone link as a conversion.
  useEffect(() => {
    if (!granted) return
    const onClick = (event) => {
      const link = event.target.closest?.('a[href]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        track('Contact', 'whatsapp_click', { method: 'whatsapp' })
      } else if (href.startsWith('tel:')) {
        track('Contact', 'phone_click', { method: 'phone' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [granted])

  if (!HAS_TRACKING) return null

  return (
    <>
      {granted && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
      {granted && GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {consent === 'unset' && (
        <div
          role="dialog"
          aria-label={t.label}
          className="fixed bottom-0 inset-x-0 z-[60] p-4"
        >
          <div className="max-w-4xl mx-auto bg-card border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-sm text-gray-300 leading-relaxed flex-grow">
              {t.message}{' '}
              <Link href={`/${lang}/politique-cookies`} className="text-primary underline underline-offset-2">
                {t.policy}
              </Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose('denied')}
                className="px-5 py-2.5 rounded-lg font-bold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                {t.refuse}
              </button>
              <button
                type="button"
                onClick={() => choose('granted')}
                className="px-5 py-2.5 rounded-lg font-bold text-sm bg-primary hover:bg-secondary text-white transition-colors"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
