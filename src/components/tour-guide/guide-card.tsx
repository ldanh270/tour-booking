'use client'

type Social = { type: 'fb' | 'tw' | 'ig' | 'yt'; href?: string }
type Props = {
    name: string
    role: string
    avatar: string
    socials?: Social[]
    className?: string
}

const Icon = ({ type }: { type: 'fb' | 'tw' | 'ig' | 'yt' }) => {
    if (type === 'fb')
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z" />
            </svg>
        )
    if (type === 'tw')
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M20 7.2c.5-.3 1-.8 1.2-1.3-.5.2-1 .4-1.6.5a2.7 2.7 0 0 0-4.7 2v.6A7.7 7.7 0 0 1 4.6 6s-3 6.7 3.6 9.6a7.8 7.8 0 0 1-4.4 1.3c6.6 3.6 14.6 0 14.6-8.2v-.3c.5-.4 1-.9 1.6-1.4-.6.2-1.1.3-1.6.4Z" />
            </svg>
        )
    if (type === 'ig')
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
        )
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
            <path d="M23 12s0-3.4-.4-4.9a3 3 0 0 0-2.2-2.2C18.9 4 12 4 12 4s-6.9 0-8.4.4a3 3 0 0 0-2.2 2.2C1 8.6 1 12 1 12s0 3.4.4 4.9a3 3 0 0 0 2.2 2.2C5.1 19.9 12 20 12 20s6.9 0 8.4-.4a3 3 0 0 0 2.2-2.2c.4-1.5.4-4.9.4-4.9ZM10 8.7l6 3.3-6 3.3V8.7Z" />
        </svg>
    )
}

export default function GuideCard({
    name,
    role,
    avatar,
    socials = [{ type: 'fb' }, { type: 'tw' }, { type: 'ig' }, { type: 'yt' }],
    className,
}: Props) {
    return (
        <article
            className={[
                'border-border bg-card relative w-[320px] rounded-2xl border shadow-sm',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                className,
            ].join(' ')}
        >
            {/* avatar */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="grid place-items-center rounded-full">
                    <div className="rounded-full bg-white p-1">
                        <div className="ring-border h-36 w-36 overflow-hidden rounded-full ring-1">
                            <img src={avatar} alt={name} className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* spacer */}
            <div className="h-30" />

            {/* info block */}
            <div className="bg-element mx-6 rounded-2xl px-6 py-5">
                <h3 className="text-foreground text-center text-2xl font-semibold">{name}</h3>
                <p className="text-secondary text-center text-base">{role}</p>

                {/* socials */}
                <ul className="mt-3 flex justify-center gap-1">
                    {socials.map((s, i) => (
                        <li key={`${s.type}-${i}`}>
                            <a
                                href={s.href ?? '#'}
                                aria-label={s.type}
                                className={[
                                    'grid h-10 w-10 place-items-center rounded-full border transition-colors',
                                    'border-primary/50 bg-card text-primary',
                                    'hover:bg-element focus-visible:ring-ring/60 focus:outline-none focus-visible:ring-2',
                                ].join(' ')}
                            >
                                <Icon type={s.type} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-6" />
        </article>
    )
}
