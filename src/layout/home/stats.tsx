'use client'

import StatsCircle from '@/components/stats/stats-circle'

type Stat = { value: string; label: string; corner?: 'tr' | 'tl' | 'br' | 'bl' }

const STATS: Stat[] = [
    { value: '12', label: 'Years Experience', corner: 'bl' },
    { value: '97%', label: 'Retention Rate', corner: 'tr' },
    { value: '8k', label: 'Tour Completed', corner: 'br' },
    { value: '19k', label: 'Happy Travellers', corner: 'tr' },
]

export default function Stats() {
    return (
        <section className="w-full overflow-hidden py-10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-14">
                {STATS.map((s, i) => (
                    <StatsCircle key={i} {...s} />
                ))}
            </div>
        </section>
    )
}
