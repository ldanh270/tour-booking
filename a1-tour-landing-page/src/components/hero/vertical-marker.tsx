export function VerticalMarker({
    active = false,
    className,
}: {
    active?: boolean
    className?: string
}) {
    return (
        <div className={`${className}`}>
            <div
                className={`w-0.5 h-7 rounded-sm stroke-2 ${active ? 'bg-primary' : 'bg-background'}`}
            />
        </div>
    )
}
