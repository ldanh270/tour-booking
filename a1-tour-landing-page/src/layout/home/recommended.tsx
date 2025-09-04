'use client'

import { useState } from 'react'

import Image from 'next/image'

type Destination = {
    title: string
    location: string
    price: string
    days: string
    image: string
}

const DESTINATIONS: Destination[] = [
    {
        title: 'Ghorepani Poon Hill Trek',
        location: 'Bhutan, Pokhara',
        price: '569.00',
        days: '5 Days',
        image: '/recommended/section1.svg',
    },
    {
        title: 'Langtang Valley Trekking',
        location: 'Bhutan, India, Pokhara',
        price: '600.00',
        days: '6 Days',
        image: '/recommended/section2.svg',
    },
    {
        title: 'Short Trek around Pokhara',
        location: 'Bhutan, Nepal, Tibet',
        price: '250.00',
        days: '6 Days',
        image: '/recommended/section3.svg',
    },
    {
        title: 'Island Peak Climbing',
        location: 'Nepal, Pokhara, Tibet',
        price: '569.00',
        days: '3 Days',
        image: '/recommended/section4.svg',
    },
]

export default function Recommended() {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-[url('/patterns/bg-light.svg')] bg-cover bg-center py-16">
            <div className="mx-auto max-w-6xl px-4 text-center">
                {/* Header */}
                <p className="font-accent text-primary-foreground text-4xl">
                    Best Recommended Places
                </p>
                <h2 className="font-title text-primary-foreground mt-1 text-5xl font-bold">
                    Popular Destination we offer for all
                </h2>
                <p className="text-primary-foreground mx-auto mt-3 max-w-2xl text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {DESTINATIONS.map((d, idx) => (
                        // Each card
                        <div
                            key={idx}
                            className="border-border bg-card flex flex-col overflow-hidden rounded-xl border shadow-sm select-none"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={d.image}
                                    alt={d.title}
                                    width={310}
                                    height={273}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-grow flex-col items-start p-4">
                                <h3 className="font-title text-lg">{d.title}</h3>
                                <div className="text-secondary mt-1 inline-flex flex-row gap-1 text-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-map-pin-icon lucide-map-pin"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {d.location}
                                </div>
                                <div>
                                    <span className="mt-2 text-lg font-bold">{`$${d.price}`}</span>
                                    <span className="text-secondary mt-1 text-sm">/Person</span>
                                </div>

                                <div className="mt-9 flex w-full items-center justify-between pt-4">
                                    <span className="text-muted-foreground flex items-center gap-1 text-sm">
                                        <Image
                                            src="icons/clock.svg"
                                            width={16}
                                            height={16}
                                            alt="Clock icon"
                                        />
                                        {d.days}
                                    </span>
                                    <button className="border-border hover:bg-element cursor-pointer rounded-full border px-3 py-1 text-xs">
                                        Book Now
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                        </div>
                    ))}
                </div>

                {/* Pagination dots */}
                <div className="mt-8 flex justify-center gap-3">
                    {[...Array(6)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`h-4 w-4 cursor-pointer rounded-full border transition-colors ${
                                active === index
                                    ? 'bg-primary border-primary'
                                    : 'border-primary-foreground bg-transparent'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
