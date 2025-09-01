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
                className={`h-7 w-0.5 rounded-sm stroke-2 ${active ? 'bg-primary' : 'bg-background'}`}
            />
        </div>
    )
}
