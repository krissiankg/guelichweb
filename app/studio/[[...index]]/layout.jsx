export const metadata = {
  title: 'Sanity Studio',
  description: 'Admin Content Management',
}

export const viewport = {
  themeColor: '#101112',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function StudioLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
