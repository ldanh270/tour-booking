'use client'

import { useState } from 'react'

import Image from 'next/image'

export default function Subscribe() {
    const [email, setEmail] = useState('')

    return (
        <section className="mx-auto w-full px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 items-center gap-4 px-[300px] md:grid-cols-[1fr_auto_auto]">
                <h3 className="font-title text-2xl leading-snug font-semibold md:text-4xl">
                    Get Updated The Latest <br className="hidden md:block" />
                    Newsletter
                </h3>

                <div className="md:col-span-2">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex w-full items-center gap-4"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-foreground placeholder:text-muted-foreground focus:border-primary h-16 w-full rounded-full border bg-white px-5 text-sm md:w-[520px]"
                        />
                        <button
                            type="submit"
                            className="bg-primary-foreground inline-flex h-16 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-medium text-white hover:opacity-90"
                        >
                            <span>Subscribe Now</span>
                            <Image
                                src="footer/icons/submit.svg"
                                width={24}
                                height={24}
                                alt="Submit Icon"
                                className=""
                            />
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-border mt-8 h-px w-full" />
        </section>
    )
}
