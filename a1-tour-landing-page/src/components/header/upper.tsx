import Divider from '@/components/common/divider'
import { NavToggle } from '@/components/common/nav-toggle'
import { LanguageToggle } from '@/components/header/language-toggle'

import Image from 'next/image'
import Link from 'next/link'

export default function Upper() {
    return (
        <section className="border-border text-foreground flex flex-row items-center justify-between border-b px-[4.5rem] py-1.5 text-[14px]">
            <div
                id="left"
                className="flex h-auto w-auto flex-row gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
            >
                <span>
                    <Image
                        src="/icons/address.svg"
                        alt="Address Icon"
                        width={10.5}
                        height={14}
                        className="select-none"
                    />
                    45 New Eskaton Road, Austria
                </span>
                <Divider orientation="vertical" />
                <span>
                    <Image
                        src="/icons/clock.svg"
                        alt="Clock Icon"
                        width={14}
                        height={14}
                        className="select-none"
                    />
                    Sun to Friday: 8.00 am - 7.00 pm, Austria
                </span>
            </div>
            <div
                id="right"
                className="flex h-auto w-auto flex-row gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
            >
                <LanguageToggle />
                <div className="flex-row items-center justify-center gap-6">
                    <Link href="/faq" className="hover:text-secondary cursor-pointer">
                        Faq
                    </Link>
                    <Divider orientation="vertical" />
                    <Link href="/support" className="hover:text-secondary cursor-pointer">
                        Support
                    </Link>
                    <Divider orientation="vertical" />
                    <NavToggle
                        variant="link"
                        dropdownOptions={[
                            {
                                name: 'Sign in',
                                href: '/login',
                            },
                            {
                                name: 'Register',
                                href: '/register',
                            },
                        ]}
                    >
                        Sign in/ Register
                    </NavToggle>
                </div>
            </div>
        </section>
    )
}
