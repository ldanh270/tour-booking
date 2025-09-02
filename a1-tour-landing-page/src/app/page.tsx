import Category from '@/layout/home/category'
import Destination from '@/layout/home/destination'
import Hero from '@/layout/home/hero'
import TourFilter from '@/layout/home/tour-filter'

export default function Home() {
    return (
        <section>
            <Hero />
            <TourFilter />
            <Category />
            <Destination />
        </section>
    )
}
