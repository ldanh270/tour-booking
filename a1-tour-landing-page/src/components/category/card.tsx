const NUMBER_OF_CARDS = 5

/**
 * Arc layout style for a card inside a row.
 * Centers are lifted, edges are lower. Also adds slight tilt and scale.
 */
export const arcStyle = (index: number, total: number): React.CSSProperties => {
    // Normalized position in [-1, 1] (center = 0)
    const t = total > 1 ? (index - (total - 1) / 2) / ((total - 1) / 2) : 0

    // Vertical offset via downward-opening parabola
    const translateY = -60 * (1 - t * t)

    // Slight tilt based on position
    const rotateDeg = 15 * t

    // Scale: larger in the center, smaller at edges
    const scale = 0.95 + 0.07 * (1 - Math.abs(t))

    // Layering: center on top
    const zIndex = 100 - Math.abs(Math.round(50 * t))

    return {
        transform: `translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
        zIndex,
    }
}

export default function Card({
    place,
    item,
    className,
}: {
    place: number
    item: { id: string; name: string; image: string; link?: string }
    className?: string
}) {
    return (
        <div
            style={arcStyle(place, NUMBER_OF_CARDS)}
            className={`items-center] flex w-[78%] shrink-0 snap-start flex-col sm:w-[32%] lg:w-[200px] ${className}`}
        >
            {/* image */}
            <div className="ring-border/40 aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl shadow-sm ring-1 transition-transform select-none hover:scale-110">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* label */}
            <div className="mt-3 text-center">
                <div className="font-title font-semibold">{item.name}</div>
                <button className="text-muted-foreground hover:text-secondary mt-1 text-xs underline-offset-4 hover:underline">
                    See More
                </button>
            </div>
        </div>
    )
}
