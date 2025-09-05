'use client'

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
                <div className="mb-8 text-center">
                    <p className="font-accent text-secondary text-xl md:text-2xl">
                        Make Your Tour More Pleasure
                    </p>
                    <h2 className="font-title mt-1 text-3xl md:text-4xl">Recent Gallery</h2>
                </div>

                {/* gallery */}
                <div className="grid grid-cols-2 gap-4 md:auto-rows-[170px] md:grid-cols-5 md:grid-rows-2 md:gap-6 lg:auto-rows-[210px]">
                    {/* Left big */}
                    <Card
                        src={PICS[0].src}
                        alt={PICS[0].alt}
                        width={282}
                        height={265}
                        className="col-span-2 aspect-[5/4] md:col-span-1 md:row-span-2 md:aspect-auto md:h-full"
                    />

                    {/* left stack */}
                    <Card
                        src={PICS[1].src}
                        alt={PICS[1].alt}
                        width={282}
                        height={218}
                        className="aspect-[4/3] md:aspect-auto md:h-full"
                    />
                    <Card
                        src={PICS[2].src}
                        alt={PICS[2].alt}
                        width={282}
                        height={218}
                        className="aspect-[4/3] md:aspect-auto md:h-full"
                    />

                    {/* center tall */}
                    <Card
                        src={PICS[3].src}
                        alt={PICS[3].alt}
                        width={282}
                        height={456}
                        className="col-span-2 aspect-[4/5] md:col-span-1 md:row-span-2 md:aspect-auto md:h-full"
                    />

                    {/* right stack */}
                    <Card
                        src={PICS[4].src}
                        alt={PICS[4].alt}
                        width={282}
                        height={218}
                        className="aspect-[4/3] md:aspect-auto md:h-full"
                    />
                    <Card
                        src={PICS[5].src}
                        alt={PICS[5].alt}
                        width={282}
                        height={218}
                        className="aspect-[4/3] md:aspect-auto md:h-full"
                    />

                    {/* Right big */}
                    <Card
                        src={PICS[6].src}
                        alt={PICS[6].alt}
                        width={282}
                        height={265}
                        className="col-span-2 aspect-[5/4] md:col-span-1 md:row-span-2 md:aspect-auto md:h-full"
                    />
                </div>
            </div>
        </section>
    )
}
