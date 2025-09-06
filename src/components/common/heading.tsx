export default function Heading({ subtitle, title }: { subtitle?: string; title?: string }) {
    return (
        <div className="mb-10 text-center">
            <p className="font-accent text-primary-foreground text-4xl">{subtitle}</p>
            <h2 className="font-title text-5xl font-bold">{title}</h2>
        </div>
    )
}
