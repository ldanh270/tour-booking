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
        pos = 'top-6 right-6'
    } else if (corner === 'tl') {
        pos = 'top-6 -left-6'
    } else if (corner === 'br') {
        pos = 'bottom-6 right-6'
    } else {
        pos = 'bottom-6 left-6'
    }

    return (
        <div
            className={`border-primary relative h-64 w-64 rounded-full border transition-transform duration-500 hover:scale-105 ${className}`}
        >
            {/* white ring between outer and inner */}
            <div className="pointer-events-none absolute inset-3 rounded-full" />

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
                className={`absolute ${pos} bg-primary/20 block h-6 w-6 rounded-full`}
            >
                <span className="bg-primary absolute top-1/2 left-1/2 block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            </span>
        </div>
    )
}
