import Divider from '@/components/common/divider'
import { NavToggle } from '@/components/common/nav-toggle'
import { LanguageToggle } from '@/components/header/language-toggle'

import Image from 'next/image'
import Link from 'next/link'

export default function Upper() {
    return (
        <section className="flex flex-row justify-between items-center px-[4.5rem] py-1.5 border-b border-border text-[14px] text-foreground">
            <div
                id="left"
                className="flex flex-row w-auto h-auto gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
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
                className="flex flex-row w-auto h-auto gap-6.5 *:flex *:flex-row *:justify-between *:gap-2"
            >
                <LanguageToggle />
                <div className="flex-row items-center justify-center gap-6">
                    <Link href="/faq" className="cursor-pointer hover:text-secondary">
                        Faq
                    </Link>
                    <Divider orientation="vertical" />
                    <Link href="/support" className="cursor-pointer hover:text-secondary">
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
