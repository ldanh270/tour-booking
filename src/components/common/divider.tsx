import Image from 'next/image'

export default function Divider({
    orientation,
    width = 1,
    height = 14,
}: {
    orientation: 'vertical' | 'horizontal'
    width?: number
    height?: number
}) {
    if (orientation === 'vertical') {
        return (
            <Image
                src="/header/vertical-divider.svg"
                alt="Vertical Divider"
                width={width}
                height={height}
                className="fill-secondary h-auto w-auto select-none"
            />
        )
    }
    return <span>-</span>
}
