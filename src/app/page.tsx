import Category from '@/layout/home/category'
import Destination from '@/layout/home/destination'
import Hero from '@/layout/home/hero'
import PlanYourTrip from '@/layout/home/plan-your-trip'
import RecentGallery from '@/layout/home/recent-gallery'
import Recommended from '@/layout/home/recommended'
import TourFilter from '@/layout/home/tour-filter'

export default function Home() {
    return (
        <section>
            <Hero />
            <TourFilter />
            <Category />
            <Destination />
            <PlanYourTrip />
            <Recommended />
            <RecentGallery />
        </section>
    )
}
