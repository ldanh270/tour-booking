'use client'

import Image from 'next/image'

export default function Copywrite() {
    return (
        <section className="**:text-background border-t bg-[url('/footer/background.svg')]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs md:flex-row">
                <p>Copyright 2025 Tours . All Rights Reserved.</p>
                <div className="text-secondary flex items-center gap-2">
                    <span>We Accept</span>
                    <Image src="/footer/cards.svg" alt="cards" width={224} height={32} />
                </div>
            </div>
        </section>
    )
}
