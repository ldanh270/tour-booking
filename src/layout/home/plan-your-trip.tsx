'use client'

import Balloon from '@/components/common/balloon'

import Image from 'next/image'

type Feature = { title: string; desc: string; svg: string }

const FEATURES: Feature[] = [
    {
        title: 'Exclusive Trip',
        desc: 'There are many variations of passages of available but the majority.',
        svg: '/icons/exclusive_trip.svg',
    },
    {
        title: 'Professional Guide',
        desc: 'There are many variations of passages of available but the majority.',
        svg: 'icons/professional_guide.svg',
    },
]

export default function PlanYourTrip() {
    return (
        <section className="relative w-full">
            {/* Balloons decors */}
            <div aria-hidden="true">
                <div className="pointer-events-none absolute top-40 left-15 hidden h-8 w-8 md:block">
                    <Balloon />
                </div>
                <div className="pointer-events-none absolute top-52 left-1 hidden h-12 w-12 md:block">
                    <Balloon />
                </div>
            </div>

            {/* Contents */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
                {/* Left gallery */}
                <div className="md:col-span-5">
                    <div className="grid grid-cols-2 grid-rows-1 gap-5">
                        <img
                            src="/plan/section1.svg"
                            alt="Hiker on mountain"
                            className="col-span-1 h-full w-full rounded-t-full rounded-l-full object-cover"
                        />
                        <div className="gap- col-span-1 flex flex-col gap-5">
                            <img
                                src="/plan/section2.svg"
                                alt="Kayak on lake"
                                className="aspect-[1] w-full rounded-t-full rounded-r-full object-cover"
                            />
                            <img
                                src="/plan/section3.svg"
                                alt="Tourists at landmark"
                                className="row-span-1 aspect-[1] w-full rounded-l-full rounded-b-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Center content */}
                <div className="md:col-span-5">
                    <p className="font-accent text-primary-foreground text-4xl font-normal">
                        Let’s Go Together
                    </p>
                    <h2 className="text-primary-foreground mt-1 text-5xl leading-tight font-bold">
                        Plan Your Trip
                        <br />
                        With us
                    </h2>

                    <p className="text-secondary text-base">
                        There are many variations of passages of available but the majority have
                        suffered alteration in some form, by injected hum randomised words which
                        don’t look even slightly.
                    </p>

                    <ul className="mt-6 flex flex-col gap-7 space-y-4">
                        {FEATURES.map((feature) => (
                            <li key={feature.title} className="flex gap-4">
                                {/* circular icon */}
                                <span className="bg-primary ring-primary mt-1 inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full ring-1">
                                    <Image
                                        src={feature.svg}
                                        alt="feature icons"
                                        width={33}
                                        height={33}
                                    />
                                </span>
                                <div>
                                    <h3 className="font-title text-primary-foreground text-2xl font-semibold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-secondary text-[16px]">{feature.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="group mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                        type="button"
                    >
                        Learn More
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
            </div>
            {/* Right sticky person with circle */}
            <div className="pointer-events-none absolute right-20 bottom-40 hidden h-96 w-96 md:block">
                <div
                    aria-hidden="true"
                    className="absolute top-2/3 left-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E9F6F9]"
                />

                <div className="absolute right-[20%] z-50">
                    <Image
                        src="/plan/guy.svg"
                        alt="Traveler with suitcase"
                        width={217}
                        height={546}
                        className="md:h-[546px] md:w-[217px]"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
