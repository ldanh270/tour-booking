import Category from '@/layout/home/category'
import Hero from '@/layout/home/hero'
import TourFilter from '@/layout/home/tour-filter'

export default function Home() {
    return (
        <section>
            <Hero />
            <TourFilter />
            <Category />
        </section>
    )
}
