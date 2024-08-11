import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const sans = Raleway({ subsets: ['latin'] })

const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: 'WPU - We are Programmers, UNITE!',
    description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
    keywords:
        'komunitas programmer, WPU, Sandhika Galih, UNPAS, forum diskusi, berbagi ilmu, proyek bersama, networking, developer Indonesia, pemrograman web, belajar coding, tutorial web, HTML, CSS, JavaScript, framework, React, PHP, database, MySQL, kursus online, belajar dari nol.',
    openGraph: {
        title: 'WPU - We are Programmers, UNITE!',
        description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
        url: url,
        images: '/banner.png'
    },
    twitter: {
        title: 'WPU - We are Programmers, UNITE!',
        description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
        images: '/banner.png',
        site: url
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={sans.className}>{children}</body>
        </html>
    )
}
