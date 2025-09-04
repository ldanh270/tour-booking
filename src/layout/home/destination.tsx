'use client'

import { useRef, useState } from 'react'

type Destination = { name: string; listing: number; image: string }

const DESTINATIONS: Destination[] = [
    { name: 'Island', listing: 18, image: '/destinations/des1.jpg' },
    { name: 'Nepal', listing: 22, image: '/destinations/des2.jpg' },
    { name: 'Thailand', listing: 22, image: '/destinations/des3.jpg' },
    { name: 'Maldives', listing: 16, image: '/destinations/des4.jpg' },
    { name: 'Vietnam', listing: 25, image: '/destinations/des5.jpg' },
]

// Calculate distance
const signedDist = (from: number, to: number, n: number) => {
    const raw = (to - from + n) % n
    return raw <= n / 2 ? raw : raw - n
}

export default function Destination() {
    const [activeIndex, setActiveIndex] = useState(2)
    const N = DESTINATIONS.length
    const visibleRadius = 2

    const goNext = () => setActiveIndex((i) => (i + 1 + N) % N)
    const goPrev = () => setActiveIndex((i) => (i - 1 + N) % N)

    const goToIndex = (target: number) => {
        if (target === activeIndex) return
        setActiveIndex(target) // Change index
    }

    // Swipe mobile
    const touchStartX = useRef(0)
    const handleTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX)
    const handleTouchEnd = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) < 30) return
        if (dx < 0) goNext()
        else goPrev()
    }

    return (
        <section className="w-full py-12">
            <div className="mb-10 text-center">
                <p className="font-accent text-primary-foreground text-4xl">Top Destination</p>
                <h2 className="font-title text-5xl font-bold">Popular Destination</h2>
            </div>

            <div className="relative mx-auto">
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className="relative h-[636px] select-none sm:h-[420px]"
                >
                    {DESTINATIONS.map((item, i) => {
                        const d = signedDist(activeIndex, i, N) // -2..2
                        const absD = Math.abs(d)
                        const isCenter = d === 0
                        const isVisible = absD <= visibleRadius

                        const translateX = d * 170
                        const scale = 1 - Math.min(absD, visibleRadius) * 0.07
                        const zIndex = 100 - Math.min(absD, visibleRadius)

                        return (
                            <article
                                key={i}
                                onClick={() => !isCenter && goToIndex(i)}
                                className={`absolute top-1/2 left-1/2 origin-center overflow-hidden rounded-3xl shadow-md transition-[transform,filter,opacity] duration-500 ease-out ${
                                    !isCenter ? 'cursor-pointer' : ''
                                }`}
                                style={{
                                    width: 288,
                                    height: 424,
                                    transform: `translate(-50%,-50%) translateX(${translateX}px) scale(${scale})`,
                                    zIndex,
                                    filter: isCenter ? 'none' : 'blur(2px) brightness(0.7)',
                                    opacity: isVisible ? 1 : 0,
                                    pointerEvents: isVisible ? 'auto' : 'none',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                                    <div>
                                        <div className="font-title text-2xl font-semibold">
                                            {item.name}
                                        </div>
                                        <div className="text-xs opacity-90">
                                            {item.listing} Listing
                                        </div>
                                    </div>
                                    <button
                                        className={`mt-2 rounded-full border border-white/60 bg-white/20 px-4 py-1.5 text-xs font-medium backdrop-blur ${
                                            !isCenter ? 'hover:bg-white/40' : ''
                                        }`}
                                    >
                                        View All →
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
