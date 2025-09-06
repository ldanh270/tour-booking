'use client'

import Card from '@/components/category/card'

import { useEffect, useMemo, useRef, useState } from 'react'

type CategoryItem = {
    id: string
    name: string
    image: string
    link?: string
    rotate?: string
    className?: string
}

const CATEGORIES: CategoryItem[] = [
    {
        id: 'wildlife',
        name: 'Wildlife',
        image: '/category/wildlife.webp',
    },
    {
        id: 'walking',
        name: 'Walking',
        image: '/category/walking.jpg',
    },
    {
        id: 'cruises',
        name: 'Cruises',
        image: '/category/cruises.jpg',
    },
    {
        id: 'hiking',
        name: 'Hiking',
        image: '/category/hiking.jpg',
    },
    {
        id: 'airbirds',
        name: 'Airbirds',
        image: '/category/airbirds.jpg',
    },
]

export default function Category() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div id="title">
                <div className="font-accent text-center text-4xl">Wornderful Place For You</div>
                <div className="font-title text-center text-5xl font-bold">Tour Categories</div>
            </div>
            <div
                id="slider"
                className="mt-25 flex w-full flex-col items-center justify-center self-center"
            >
                <div
                    id="track"
                    className="mx-auto flex w-full snap-x snap-mandatory flex-row justify-between overflow-x-auto scroll-smooth px-4 lg:overflow-visible lg:px-0"
                >
                    <div className="mx-auto flex gap-6 lg:justify-between">
                        {CATEGORIES.map((item, index) => (
                            <Card
                                key={item.id}
                                place={index}
                                item={item}
                                className={item.className}
                            />
                        ))}
                    </div>
                </div>

                <div id="dots" className="flex w-full items-center justify-center gap-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <button
                            key={i}
                            className={[
                                'border-primary h-4 w-4 rounded-full border transition',
                                1 === i ? 'bg-primary' : 'bg-muted',
                            ].join(' ')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
