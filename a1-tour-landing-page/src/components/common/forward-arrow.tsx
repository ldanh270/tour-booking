import Image from 'next/image'

export default function ForwardArrow({ className }: { className?: string }) {
    return (
        <Image
            src="/icons/forward-arrow.svg"
            alt="Forward arrow"
            width={24}
            height={24}
            className={`fill-background ${className}`}
        />
    )
}
