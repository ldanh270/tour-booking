import Header from '@/components/layout/header'

import type { Metadata } from 'next'
import { Geist, Geist_Mono, Inter, Manrope, Montez } from 'next/font/google'

import './globals.css'

const text = Inter({
    variable: '--font-text',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const title = Manrope({
    variable: '--font-title',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const accent = Montez({
    variable: '--font-accent',
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'A1 - Tour Landing Page',
    description: 'A1 - Tour Landing Page',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${text.variable} ${accent.variable} ${title.variable} antialiased`}>
                <div id="header">
                    <Header />
                </div>
                <div id="content">{children}</div>
            </body>
        </html>
    )
}
