'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Meta Pixel and Google Analytics. Nothing loads until the IDs are set:
//   NEXT_PUBLIC_META_PIXEL_ID   (Meta Events Manager)
//   NEXT_PUBLIC_GA_ID           (Google Analytics 4, "G-XXXXXXXXXX")
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function track(metaEvent, gaEvent, params = {}) {
  if (typeof window === 'undefined') return
  if (window.fbq) window.fbq('track', metaEvent, params)
  if (window.gtag) window.gtag('event', gaEvent, params)
}

export default function Analytics() {
  // Count every click on a WhatsApp or phone link as a conversion.
  useEffect(() => {
    if (!PIXEL_ID && !GA_ID) return
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
  }, [])

  return (
    <>
      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
    </>
  )
}
