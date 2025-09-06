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
            <section className="bg-element w-full bg-[url('/tour-guide/background.svg')] bg-top bg-repeat py-20">
                {/* heading */}
                <Heading subtitle="Meet with Guide" title="Tour Guide" />
                {/* Cards */}
                <div className="flex flex-row items-center justify-center gap-6 pt-20">
                    {GUIDES.map((guide) => (
                        <GuideCard key={guide.name} {...guide} />
                    ))}
                </div>
                {/* Pagination dots */}
                <PaginationDots />
            </section>
        </main>
    )
}
