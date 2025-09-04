import ForwardArrow from '@/components/common/forward-arrow'
import { NavToggle } from '@/components/common/nav-toggle'
import Logo from '@/components/header/logo'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

const navPages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Destinations',
        href: '/destinations',
        child: [
            { name: 'Europe', href: '/destinations/europe' },
            { name: 'Asia', href: '/destinations/asia' },
            { name: 'America', href: '/destinations/america' },
            { name: 'Africa', href: '/destinations/africa' },
            { name: 'Oceania', href: '/destinations/oceania' },
        ],
    },
    { name: 'Services', href: '/services' },
    {
        name: 'Trip',
        href: '/trip',
        child: [
            { name: 'Adventure', href: '/trip/adventure' },
            { name: 'Family', href: '/trip/family' },
            { name: 'Honeymoon', href: '/trip/honeymoon' },
            { name: 'Wildlife', href: '/trip/wildlife' },
            { name: 'Cruise', href: '/trip/cruise' },
        ],
    },
    {
        name: 'Pages',
        href: '/pages',
        child: [
            { name: 'Gallery', href: '/pages/gallery' },
            { name: 'Testimonials', href: '/pages/testimonials' },
            { name: 'FAQ', href: '/pages/faq' },
            { name: 'Pricing', href: '/pages/pricing' },
            { name: '404', href: '/pages/404' },
        ],
    },
    {
        name: 'Blog',
        href: '/blog',
        child: [
            { name: 'Latest Posts', href: '/blog/latest' },
            { name: 'Travel Tips', href: '/blog/travel-tips' },
            { name: 'Destination Guides', href: '/blog/destination-guides' },
            { name: 'Cultural Insights', href: '/blog/cultural-insights' },
            { name: 'Food & Drink', href: '/blog/food-drink' },
            { name: 'Adventure Stories', href: '/blog/adventure-stories' },
            { name: 'Travel News', href: '/blog/travel-news' },
            { name: 'Interviews', href: '/blog/interviews' },
            { name: 'Photo Diaries', href: '/blog/photo-diaries' },
            { name: 'Travel Gear Reviews', href: '/blog/travel-gear-reviews' },
        ],
    },
    { name: 'Contact Us', href: '/contact' },
]

export default function Lower() {
    return (
        <section className="flex w-full flex-row items-center justify-start *:h-full">
            <Logo />
            <ul id="navbar" className="flex w-auto list-none flex-row gap-[47px]">
                {navPages.map((page) => (
                    <li key={page.name} className="w-fit whitespace-nowrap">
                        {page.child ? (
                            <NavToggle variant="link" dropdownOptions={page.child}>
                                {page.name}
                            </NavToggle>
                        ) : (
                            <Button
                                variant="link"
                                size="default"
                                className="font-text text-foreground hover:text-secondary m-0 flex size-auto cursor-pointer flex-row gap-2 p-0 text-[14px] font-normal"
                            >
                                <Link href={page.href}>{page.name}</Link>
                            </Button>
                        )}
                    </li>
                ))}
            </ul>
            <div id="request" className="mx-[72px] flex w-full flex-row items-center justify-end">
                <Button
                    variant="secondary"
                    className="bg-primary-foreground cursor-pointer rounded-full"
                >
                    <span className="text-background">Request A Quote</span>
                    <ForwardArrow />
                </Button>
            </div>
        </section>
    )
}
