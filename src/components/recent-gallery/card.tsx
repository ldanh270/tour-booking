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
                'bg-card ring-border overflow-hidden rounded-3xl ring-1',
                'shadow-sm transition-transform duration-300 ease-out hover:scale-[1.1]',
                className,
            ].join(' ')}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-full w-full object-center"
                loading="lazy"
                decoding="async"
            />
        </div>
    )
}
