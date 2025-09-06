'use client'

import Image from 'next/image'

const SPONSORS: { label: string; image: string }[] = [
    { label: 'Mountain', image: '/sponsors/sponsor1.svg' },
    { label: 'Adventure', image: '/sponsors/sponsor2.svg' },
    { label: 'Wanderlust', image: '/sponsors/sponsor3.svg' },
    { label: 'Explorer', image: '/sponsors/sponsor4.svg' },
    { label: 'Wanderlust', image: '/sponsors/sponsor3.svg' },
    { label: 'Mountain', image: '/sponsors/sponsor1.svg' },
    { label: 'BlueLake', image: '/sponsors/sponsor5.svg' },
    { label: 'Adventure', image: '/sponsors/sponsor2.svg' },
]

export default function Sponsors() {
    return (
        <section className="w-full bg-transparent py-12">
            <div className="px-4">
                <div className="flex flex-wrap items-center justify-center gap-20">
                    {SPONSORS.map((sponsor, idx) => (
                        <div
                            key={idx}
                            className="h-30 w-auto opacity-80 transition hover:opacity-100"
                        >
                            <Image
                                src={sponsor.image}
                                alt={sponsor.label}
                                width={120}
                                height={80}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
