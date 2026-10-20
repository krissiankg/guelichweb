'use client'

import Navbar from '@/components/Navbar'
import { useDictionary } from '@/components/DictionaryProvider'

export default function NotFoundFrame({ children }) {
    const dict = useDictionary()

    return (
        <div className="min-h-screen bg-dark text-white">
            <Navbar dict={dict?.navbar} hardNavigate />
            <div className="pt-28">{children}</div>
        </div>
    )
}
