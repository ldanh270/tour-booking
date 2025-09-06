import Heading from '@/components/common/heading'
import PaginationDots from '@/components/common/pagination_dots'
import GuideCard from '@/components/tour-guide/guide-card'

const GUIDES: {
    name: string
    role: string
    avatar: string
    socials: { type: 'fb' | 'tw' | 'ig' | 'yt' }[]
}[] = [
    {
        name: 'Jane Cooper',
        role: 'Tourist Guide',
        avatar: '/tour-guide/jane_cooper.svg',
        socials: [{ type: 'fb' }, { type: 'tw' }, { type: 'ig' }, { type: 'yt' }],
    },
    {
        name: 'Guy Hawkins',
        role: 'Tourist Guide',
        avatar: '/tour-guide/guy_hawkins.svg',
        socials: [{ type: 'fb' }, { type: 'tw' }, { type: 'ig' }, { type: 'yt' }],
    },
    {
        name: 'Jenny Wilson',
        role: 'Tourist Guide',
        avatar: '/tour-guide/jenny_wilson.svg',
        socials: [{ type: 'fb' }, { type: 'tw' }, { type: 'ig' }, { type: 'yt' }],
    },
    {
        name: 'Jacob Jones',
        role: 'Tourist Guide',
        avatar: '/tour-guide/jacob_jones.svg',
        socials: [{ type: 'fb' }, { type: 'tw' }, { type: 'ig' }, { type: 'yt' }],
    },
]

export default function TourGuide() {
    return (
        <main className="relative w-full">
            {/* patterned background */}
            <section className="bg-element w-full bg-[url('/tour-guide/background.svg')] bg-top bg-repeat py-24">
                {/* heading */}
                <Heading subtitle="Meet with Guide" title="Tour Guide" />
                <div className="mx-auto max-w-6xl px-4">
                    {/* cards */}
                    <div className="mt-16 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {GUIDES.map((guide) => (
                            <GuideCard key={guide.name} {...guide} />
                        ))}
                    </div>

                    {/* pagination dots */}
                    <PaginationDots />
                </div>
            </section>
        </main>
    )
}
