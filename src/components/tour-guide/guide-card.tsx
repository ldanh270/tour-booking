'use client'

export default function GuideCard({
    name,
    role,
    avatar,
    socials = [],
}: {
    name: string
    role: string
    avatar: string // /public path
    socials?: { type: 'fb' | 'tw' | 'ig' | 'yt'; href?: string }[]
}) {
    return (
        <article className="border-border bg-card/90 relative mx-auto w-[300px] rounded-2xl border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* avatar */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-md">
                    <img src={avatar} alt={name} className="h-full w-full object-cover" />
                </div>
            </div>

            {/* spacer for avatar */}
            <div className="h-20" />

            {/* info block */}
            <div className="bg-element rounded-2xl px-6 py-5">
                <h3 className="text-foreground text-center text-xl font-semibold">{name}</h3>
                <p className="text-secondary mt-1 text-center text-sm">{role}</p>

                {/* socials */}
                <div className="mt-5 flex items-center justify-center gap-3">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.href ?? '#'}
                            className="border-primary/40 bg-card text-primary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                            aria-label={s.type}
                        >
                            <Icon type={s.type} />
                        </a>
                    ))}
                </div>
            </div>

            {/* card padding bottom */}
            <div className="h-6" />
        </article>
    )
}

function Icon({ type }: { type: 'fb' | 'tw' | 'ig' | 'yt' }) {
    if (type === 'fb') {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z" />
            </svg>
        )
    }
    if (type === 'tw') {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M20 7.2c.5-.3 1-.8 1.2-1.3-.5.2-1 .4-1.6.5a2.7 2.7 0 0 0-4.7 2v.6A7.7 7.7 0 0 1 4.6 6s-3 6.7 3.6 9.6a7.8 7.8 0 0 1-4.4 1.3c6.6 3.6 14.6 0 14.6-8.2v-.3c.5-.4 1-.9 1.6-1.4-.6.2-1.1.3-1.6.4Z" />
            </svg>
        )
    }
    if (type === 'ig') {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
        )
    }
    // yt
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M23 12s0-3.4-.4-4.9a3 3 0 0 0-2.2-2.2C18.9 4 12 4 12 4s-6.9 0-8.4.4a3 3 0 0 0-2.2 2.2C1 8.6 1 12 1 12s0 3.4.4 4.9a3 3 0 0 0 2.2 2.2C5.1 19.9 12 20 12 20s6.9 0 8.4-.4a3 3 0 0 0 2.2-2.2c.4-1.5.4-4.9.4-4.9ZM10 8.7l6 3.3-6 3.3V8.7Z" />
        </svg>
    )
}
