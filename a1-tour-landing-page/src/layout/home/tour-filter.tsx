import { TourOption } from '@/components/hero/tour-option'
import { Button } from '@/components/ui/button'

import Image from 'next/image'

const filters: { label: string; icon: string; options: string[] }[] = [
    {
        label: 'Destination',
        icon: 'hero/filters/destination.svg',
        options: ['Da Nang', 'Ha Noi', 'Ho Chi Minh City', 'Hue', 'Nha Trang'],
    },
    {
        label: 'Activity',
        icon: 'hero/filters/activity.svg',
        options: ['Beach', 'Mountain', 'City Tour', 'Adventure', 'Relax'],
    },
    {
        label: 'Days',
        icon: 'hero/filters/clock.svg',
        options: ['0–3 Days', '4–6 Days', '7–10 Days', '10+ Days'],
    },
    {
        label: 'Price',
        icon: 'hero/filters/price.svg',
        options: ['$100 – $200', '$200 – $400', '$400 – $600', '$600 – $1000', '$1000+'],
    },
]

export default function TourFilter() {
    return (
        <div className="relative bottom-13 bg-background flex flex-row justify-center items-center px-8 py-6 gap-6 border-2 border-primary rounded-2xl w-fit mx-auto">
            {filters.map((item) => (
                <TourOption
                    key={item.label}
                    main={item}
                    dropdownOptions={item.options}
                    className="w-62 relative after:content-[''] after:block after:w-[1px] after:h-10 after:bg-border hover:bg-transparent"
                />
            ))}
            <Button
                variant="default"
                size="default"
                className="rounded-full w-40 h-14 text-background"
            >
                Search
            </Button>
        </div>
    )
}
