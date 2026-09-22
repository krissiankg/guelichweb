import { NextResponse } from 'next/server'

const locales = ['fr', 'en']
const defaultLocale = 'fr'

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Permanent redirect. 308 keeps the request method, unlike a 301.
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl, 308)
}

export const config = {
    matcher: [
        // Skip internal paths (_next, api, studio), SEO files and public assets
        '/((?!api|studio|_next/static|_next/image|sitemap\\.xml|robots\\.txt|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|xml|txt|webmanifest)).*)',
    ],
}
