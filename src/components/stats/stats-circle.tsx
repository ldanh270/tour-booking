'use client'

type Stat = { value: string; label: string; corner?: 'tr' | 'tl' | 'br' | 'bl' }

export default function StatsCircle({ value, label, corner = 'tr' }: Stat) {
    const pos =
        corner === 'tr'
            ? 'top-0 -right-1'
            : corner === 'tl'
              ? 'top-0 -left-1'
              : corner === 'br'
                ? '-bottom-1 -right-1'
                : '-bottom-1 -left-1'

    return (
        <div className="border-primary relative h-64 w-64 rounded-full border">
            {/* white ring between outer and inner */}
            <div className="pointer-events-none absolute inset-3 rounded-full ring-8 ring-white/95" />

            {/* inner pale circle */}
            <div className="bg-element absolute inset-8 flex items-center justify-center rounded-full">
                <div className="text-center">
                    <div className="text-foreground text-4xl font-bold">{value}</div>
                    <div className="text-secondary mt-1 text-base">{label}</div>
                </div>
            </div>

            {/* accent dot with tiny inner dot + white stroke */}
            <span
                aria-hidden
                className={`absolute ${pos} bg-primary block h-5 w-5 rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.95)]`}
            >
                <span className="bg-foreground/20 absolute top-1/2 left-1/2 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            </span>
        </div>
    )
}
