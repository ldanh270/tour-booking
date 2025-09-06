export default function Heading({
    subtitle,
    title,
    className,
}: {
    subtitle?: string
    title?: string
    className?: string
}) {
    return (
        <div className={`mb-10 text-center ${className}`}>
            <p className="font-accent text-primary-foreground text-4xl">{subtitle}</p>
            <h2 className="font-title text-5xl font-bold">{title}</h2>
        </div>
    )
}
