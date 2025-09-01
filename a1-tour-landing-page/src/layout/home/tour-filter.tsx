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
        <div className="bg-background border-primary relative bottom-13 mx-auto flex w-fit flex-row items-center justify-center gap-6 rounded-2xl border-2 px-8 py-6">
            {filters.map((item) => (
                <TourOption
                    key={item.label}
                    main={item}
                    dropdownOptions={item.options}
                    className="after:bg-border relative w-62 after:block after:h-10 after:w-[1px] after:content-[''] hover:bg-transparent"
                />
            ))}
            <Button
                variant="default"
                size="default"
                className="text-background h-14 w-40 rounded-full"
            >
                Search
            </Button>
        </div>
    )
}
