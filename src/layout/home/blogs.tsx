'use client'

import Heading from '@/components/common/heading'

import Image from 'next/image'

type Article = {
    id: number
    date: string
    readTime: string
    title: string
    image: string
}

const ARTICLES: Article[] = [
    {
        id: 1,
        date: 'Jul 10, 2024',
        readTime: '3 Min Read',
        title: 'Enrich Your Mind Envision Your Future Education for Success',
        image: '/blogs/img1.svg',
    },
    {
        id: 2,
        date: 'Jul 10, 2024',
        readTime: '3 Min Read',
        title: 'Exploring The Green Spaces Of Realar Residence Harmony with',
        image: '/blogs/img2.svg',
    },
    {
        id: 3,
        date: 'Jul 09, 2024',
        readTime: '3 Min Read',
        title: 'Living sustainability: A day in the life at realar residence',
        image: '/blogs/img3.svg',
    },
]

export default function Blogs() {
    return (
        <section className="bg-element w-full py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Heading
                        subtitle="About Us Restaurant"
                        title="News & Articles From Tourm"
                        className="text-left"
                    />
                    <button className="border-foreground text-foreground hover:bg-primary-foreground hidden cursor-pointer items-center gap-2 rounded-full border p-3 text-sm font-medium transition hover:text-white md:flex">
                        See More Articles
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Articles grid */}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {ARTICLES.map((art) => (
                        <div
                            key={art.id}
                            className="flex flex-col overflow-hidden rounded-lg border"
                        >
                            <div className="relative mb-2 h-56 w-full overflow-hidden">
                                <Image
                                    src={art.image}
                                    alt={art.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-muted-foreground m-2 text-sm">
                                {art.date} <span className="mx-2">|</span> {art.readTime}
                            </div>
                            <h3 className="text-foreground m-2 line-clamp-2 text-lg font-medium">
                                {art.title}
                            </h3>
                            <button className="border-primary-foreground text-foreground hover:bg-primary-foreground m-2 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:text-white">
                                Read More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
