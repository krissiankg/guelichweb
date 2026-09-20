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

    // Redirect if there is no locale
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip internal paths (_next, api, studio), SEO files and public assets
        '/((?!api|studio|_next/static|_next/image|sitemap\\.xml|robots\\.txt|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|xml|txt|webmanifest)).*)',
    ],
}
