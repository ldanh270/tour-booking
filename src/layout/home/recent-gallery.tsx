'use client'

import Heading from '@/components/common/heading'
import Card from '@/components/recent-gallery/card'

type Pic = { src: string; alt: string }

const PICS: Pic[] = [
    { src: '/gallery/section1.jpg', alt: 'Seaside table' },
    { src: '/gallery/section2.jpg', alt: 'Boat' },
    { src: '/gallery/section3.jpg', alt: 'Mountain lake' },
    { src: '/gallery/section4.webp', alt: 'Hikers on snow' },
    { src: '/gallery/section5.jpg', alt: 'Friends traveling' },
    { src: '/gallery/section6.png', alt: 'Island view' },
    { src: '/gallery/section7.jpg', alt: 'Cruise ship' },
]

export default function RecentGallery() {
    return (
        <section className="relative w-full overflow-hidden py-14">
            {/* soft background curves if you have an SVG */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage: "url('/decor/lines.svg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top right',
                    backgroundSize: '900px auto',
                }}
            />

            <div className="mx-auto max-w-6xl px-4">
                {/* heading */}
                <Heading subtitle="Make Your Tour More Pleasure" title="Recent Gallery" />

                {/* gallery */}
                <div className="grid h-[35rem] grid-cols-5 gap-5">
                    {/* Left pic */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card
                            src={PICS[0].src}
                            alt={PICS[0].alt}
                            width={282}
                            height={265}
                            className="h-66"
                        />
                    </div>

                    {/* left stack */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card
                            src={PICS[1].src}
                            alt={PICS[1].alt}
                            width={282}
                            height={218}
                            className="h-66"
                        />
                        <Card
                            src={PICS[2].src}
                            alt={PICS[2].alt}
                            width={282}
                            height={218}
                            className="h-66"
                        />
                    </div>

                    {/* center tall */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card
                            src={PICS[3].src}
                            alt={PICS[3].alt}
                            width={282}
                            height={456}
                            className="h-full"
                        />
                    </div>

                    {/* Right stack */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card
                            src={PICS[4].src}
                            alt={PICS[4].alt}
                            width={282}
                            height={218}
                            className="h-66"
                        />
                        <Card
                            src={PICS[5].src}
                            alt={PICS[5].alt}
                            width={282}
                            height={218}
                            className="h-66"
                        />
                    </div>

                    {/* Right pic */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <Card
                            src={PICS[6].src}
                            alt={PICS[6].alt}
                            width={282}
                            height={265}
                            className="h-66"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
