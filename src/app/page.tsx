import Blogs from '@/layout/home/blogs'
import Category from '@/layout/home/category'
import Destination from '@/layout/home/destination'
import Hero from '@/layout/home/hero'
import PlanYourTrip from '@/layout/home/plan-your-trip'
import RecentGallery from '@/layout/home/recent-gallery'
import Recommended from '@/layout/home/recommended'
import Sponsors from '@/layout/home/sponsors'
import Stats from '@/layout/home/stats'
import TourFilter from '@/layout/home/tour-filter'
import TourGuide from '@/layout/home/tour-guide'

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
            <Stats />
            <TourGuide />
            <Sponsors />
            <Blogs />
        </section>
    )
}
