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
                src="vertical-divider.svg"
                alt="Vertical Divider"
                width={width}
                height={height}
                className="w-auto h-auto select-none fill-secondary"
            />
        )
    }
    return <span>-</span>
}
