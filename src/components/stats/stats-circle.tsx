'use client'

export default function StatsCircle({
    value,
    label,
    corner = 'tr',
    className,
}: {
    value: string
    label: string
    corner?: 'tr' | 'tl' | 'br' | 'bl'
    className?: string
}) {
    let pos = ''
    if (corner === 'tr') {
        pos = 'top-6.5 right-6.5'
    } else if (corner === 'tl') {
        pos = 'top-6.5 -left-6.5'
    } else if (corner === 'br') {
        pos = 'bottom-6.5 right-6.5'
    } else {
        pos = 'bottom-6.5 left-6.5'
    }

    return (
        <div className={`border-primary relative h-64 w-64 rounded-full border ${className}`}>
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
