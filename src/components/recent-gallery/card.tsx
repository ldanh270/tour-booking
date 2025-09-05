import Image from 'next/image'

export default function Card({
    className = '',
    src,
    alt,
    width,
    height,
}: {
    className?: string
    src: string
    alt: string
    width: number
    height: number
}) {
    return (
        <div
            className={[
                'bg-card ring-border overflow-hidden rounded-[24px] ring-1',
                'shadow-sm transition-transform duration-300 ease-out hover:scale-[1.02]',
                className,
            ].join(' ')}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
            />
        </div>
    )
}
