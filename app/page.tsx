'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import padika from '@/assets/padika.jpg'
import wpu from '@/assets/wpu.png'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <main className="relative flex min-h-dvh items-center bg-zinc-100 py-10">
                <motion.div
                    className="absolute size-full -translate-y-1/2 rounded-full bg-white"
                    initial={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: '-50%' }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100, delay: 0.5 }}
                ></motion.div>
                <div className="container relative z-10 space-y-12">
                    <div className="space-y-10 text-center">
                        <motion.div
                            className="flex items-center justify-center gap-2 text-lg font-bold"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 100 }}
                        >
                            <Image src={wpu} alt="wpu" width={40} height={40} />
                            We are Programmers, UNITE!
                        </motion.div>
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2, type: 'spring', stiffness: 100 }}
                        >
                            Jangan Lupa Titik Koma<span className="inline-block animate-bounce">;</span>
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-3xl text-xl"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.4, type: 'spring', stiffness: 100 }}
                        >
                            Butuh teman belajar coding? Bergabunglah dengan jutaan subscriber di channel YouTube WPU dan
                            jadilah programmer handal.
                        </motion.p>
                        <motion.div
                            className="flex flex-col justify-center gap-2 sm:flex-row"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.6, type: 'spring', stiffness: 100 }}
                        >
                            <a
                                href="https://www.youtube.com/@sandhikagalihwpu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center rounded-2xl bg-zinc-800 px-12 py-6 text-lg font-medium text-white transition-all hover:bg-zinc-900"
                            >
                                Kunjungi YouTube
                            </a>
                            <a
                                href="https://discord.gg/wpu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center rounded-2xl border border-zinc-800 px-12 py-6 text-lg font-medium text-zinc-800 transition-all hover:bg-zinc-100"
                            >
                                Gabung Discord
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        className="grid items-center gap-10 lg:grid-cols-3"
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 2, type: 'spring' }}
                    >
                        <Tilt className="space-y-4 rounded-[3rem] border bg-white p-10 shadow-2xl shadow-zinc-400/20 [transform-style:preserve-3d] [&>*]:[transform:translateZ(30px)]">
                            <span className="inline-block rounded-full bg-zinc-100 px-4 py-2 text-sm">
                                Course & Tutorial
                            </span>
                            <h2 className="text-2xl">
                                Tempat Belajar Web Programming Untuk Pemula dan <em>Pemula</em>
                            </h2>
                            <div className="grid -space-y-px">
                                <a
                                    href="https://youtube.com/@sandhikagalihwpu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Jelajahi YouTube WPU
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                                <a
                                    href="https://belajarlaravel.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Cek belajarlaravel.id
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                                <a
                                    href="https://www.belajarmern.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Cek belajarmern.id
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                            </div>
                        </Tilt>
                        <Tilt className="space-y-4 rounded-[3rem] border bg-white p-10 text-center shadow-2xl shadow-zinc-400/20 [transform-style:preserve-3d] [&>*]:[transform:translateZ(30px)]">
                            <span className="inline-block rounded-full bg-zinc-100 px-4 py-2 text-sm">The Man</span>
                            <Image
                                className="mx-auto rounded-[3rem]"
                                src={padika}
                                alt="Sandhika Galih"
                                width={150}
                                height={150}
                            />
                            <h2 className="text-2xl">Sandhika Galih</h2>
                            <p>
                                Seorang pendidik dan praktisi di bidang pengembangan web yang populer di Indonesia.
                                Dikenal karena konten pembelajaran pemrogramannya yang mudah dipahami, terutama untuk
                                pemula.
                            </p>
                            <div className="grid -space-y-px">
                                <a
                                    href="https://www.instagram.com/wpustore.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Beli Merch WPU
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                                <a
                                    href="https://beacons.ai/sandhikagalih"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Follow Sosial Media
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                            </div>
                        </Tilt>
                        <Tilt className="space-y-4 rounded-[3rem] border bg-white p-10 shadow-2xl shadow-zinc-400/20 [transform-style:preserve-3d] [&>*]:[transform:translateZ(30px)]">
                            <span className="inline-block rounded-full bg-zinc-100 px-4 py-2 text-sm">Community</span>
                            <h2 className="text-2xl">Tempat Berkumpul Puluhan Ribu Programmer di Indonesia</h2>
                            <p>
                                Komunitas WPU menjadi tempat yang sempurna untuk belajar, berbagi, dan berkolaborasi
                                dalam proyek-proyek menarik.
                            </p>
                            <div className="grid">
                                <a
                                    href="https://discord.gg/wpu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Gabung Discord
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                                <a
                                    href="https://github.com/bellshade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-y py-3 text-gray-500 transition-all hover:text-gray-800"
                                >
                                    Kontribusi Open-Source Projects
                                    <Icon
                                        icon="tabler:arrow-up-right"
                                        className="translate-y-2 text-2xl opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    />
                                </a>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </main>
        </>
    )
}
