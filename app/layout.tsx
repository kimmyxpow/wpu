import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

const sans = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'WPU - We are Programmers, UNITE!',
    description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
    keywords:
        'komunitas programmer, WPU, Sandhika Galih, UNPAS, forum diskusi, berbagi ilmu, proyek bersama, networking, developer Indonesia, pemrograman web, belajar coding, tutorial web, HTML, CSS, JavaScript, framework, React, PHP, database, MySQL, kursus online, belajar dari nol.',
    openGraph: {
        title: 'WPU - We are Programmers, UNITE!',
        description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
        url: 'https://wpu.unpas.ac.id',
        images: '/banner.png'
    },
    twitter: {
        title: 'WPU - We are Programmers, UNITE!',
        description: 'Komunitas pembelajar pemrograman web. Berbagi ilmu dan pengalaman bersama.',
        images: '/banner.png',
        site: 'https://wpu.unpas.ac.id'
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
