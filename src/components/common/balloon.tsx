import Image from 'next/image'

export default function Balloon() {
    return (
        <div>
            <Image
                src="/icons/balloon.svg"
                width={56}
                height={78}
                alt="Balloon"
                className="h-full w-full object-contain"
            />
        </div>
    )
}
