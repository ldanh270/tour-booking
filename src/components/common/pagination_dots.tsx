'use client'

import { useState } from 'react'

export default function PaginationDots() {
    const [active, setActive] = useState(0)

    return (
        <div className="mt-8 flex justify-center gap-3">
            {[...Array(6)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-4 w-4 cursor-pointer rounded-full border transition-colors ${
                        active === index
                            ? 'bg-primary border-primary'
                            : 'border-primary-foreground bg-transparent'
                    }`}
                />
            ))}
        </div>
    )
}
