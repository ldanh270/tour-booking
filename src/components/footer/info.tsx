'use client'

import { Button } from '@/components/ui/button'

import Image from 'next/image'
import Link from 'next/link'

const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Tour Guide', href: '/guides' },
    { label: 'Contact Us', href: '/contact' },
]

const SOCIALS = [
    {
        label: 'Facebook',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                    fill="currentColor"
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z"
                />
            </svg>
        ),
        href: '/',
    },
    {
        label: 'Twitter',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                    fill="currentColor"
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                />
            </svg>
        ),
        href: '/',
    },
    {
        label: 'LinkedIn',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
                    <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
                </circle>
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                >
                    <path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.15s"
                            dur="0.2s"
                            values="12;0"
                        />
                    </path>
                    <path strokeDasharray="12" strokeDashoffset="12" d="M10 10v10">
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.45s"
                            dur="0.2s"
                            values="12;0"
                        />
                    </path>
                    <path
                        strokeDasharray="24"
                        strokeDashoffset="24"
                        d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.65s"
                            dur="0.2s"
                            values="24;0"
                        />
                    </path>
                </g>
            </svg>
        ),
        href: '/',
    },
    {
        label: 'WhatsApp',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                    fill="currentColor"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
            </svg>
        ),
        href: '/',
    },
    {
        label: 'Instagram',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
            </svg>
        ),
        href: '/',
    },
]

const INSTAGRAM = [
    { src: '/footer/instagram_posts/image1.svg', alt: 'Paris' },
    { src: '/footer/instagram_posts/image2.svg', alt: 'Beach' },
    { src: '/footer/instagram_posts/image3.svg', alt: 'Sea' },
    { src: '/footer/instagram_posts/image4.svg', alt: 'Family' },
    { src: '/footer/instagram_posts/image5.svg', alt: 'Resort' },
    { src: '/footer/instagram_posts/image6.svg', alt: 'Yacht' },
]

export default function Info() {
    return (
        <section className="mx-auto inline-flex w-full items-center justify-center px-80 pb-10">
            <div className="flex flex-row items-center justify-center gap-26 *:flex-auto **:flex-nowrap">
                {/* Brand */}
                <div className="max-w-76">
                    <div className="flex items-center gap-2">
                        <Image
                            src="footer/logo.svg"
                            alt="Tours"
                            width={56}
                            height={56}
                            className="fill-foreground"
                        />
                        <span className="text-primary-foreground text-[2rem] leading-6.5 font-extrabold">
                            Tours
                        </span>
                    </div>
                    <p className="text-secondary mt-4 text-sm leading-6">
                        Rapidiously myocardi nate cross-platform intellectual capital model.
                        Appropriately create interactive infrastructures
                    </p>
                    <div className="mt-4 flex gap-3">
                        {SOCIALS.map((social) => (
                            <Link key={social.label} href={social.href}>
                                <Button className="bg-element text-primary hover:text-background flex h-8 w-8 items-center justify-center rounded-full">
                                    {social.icon}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Content */}
                <div className="grid grid-cols-3 items-start gap-x-12 gap-y-6">
                    {/* Row 1: Titles */}
                    <h4 className="font-title text-primary-foreground text-2xl font-semibold">
                        Quick Links
                    </h4>
                    <h4 className="font-title text-primary-foreground text-2xl font-semibold">
                        Get In Touch
                    </h4>
                    <h4 className="font-title text-primary-foreground text-2xl font-semibold">
                        Instagram Post
                    </h4>

                    {/* Row 2: Details */}
                    {/* Quick links */}
                    <div className="w-full">
                        <ul className="mt-0 space-y-3 text-sm">
                            {QUICK_LINKS.map((q) => (
                                <li key={q.label} className="flex items-center gap-2">
                                    <span className="text-secondary">›</span>
                                    <Link
                                        href={q.href}
                                        className="text-secondary hover:text-foreground"
                                    >
                                        {q.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in touch */}
                    <div className="w-full">
                        <ul className="*:text-secondary mt-0 space-y-3 text-sm">
                            <div className="flex flex-row items-center justify-start gap-4">
                                <Button className="bg-element text-primary hover:text-background flex h-8 w-8 items-center justify-center rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect width="24" height="24" fill="none" />
                                        <path
                                            fill="currentColor"
                                            d="M19 12q0-2.925-2.037-4.962T12 5V3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12zm-4 0q0-1.25-.875-2.125T12 9V7q2.075 0 3.538 1.463T17 12zm4.95 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
                                        />
                                    </svg>
                                </Button>
                                <div>
                                    <li>+01 234 567 890</li>
                                    <li>+09 999 999 999</li>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-4">
                                <Button className="bg-element text-primary hover:text-background flex h-8 w-8 items-center justify-center rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect width="24" height="24" fill="none" />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m7 9l3.75 3a2 2 0 0 0 2.5 0L17 9m4 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                                        />
                                    </svg>
                                </Button>
                                <div>
                                    <li>mailinfo00@tours.com</li>
                                    <li>support24@tours.com</li>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-4">
                                <Button className="bg-element text-primary hover:text-background flex h-8 w-8 items-center justify-center rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <rect width="24" height="24" fill="none" />
                                        <path
                                            fill="currentColor"
                                            d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"
                                        />
                                    </svg>
                                </Button>
                                <li>789 Inner Lane, Holy park, California, USA</li>
                            </div>
                        </ul>
                    </div>

                    {/* Instagram */}
                    <div className="w-full">
                        <div className="mt-0 grid grid-cols-3 gap-3">
                            {INSTAGRAM.map((image) => (
                                <Image
                                    key={image.alt}
                                    src={image.src}
                                    alt={image.alt}
                                    width={96}
                                    height={96}
                                    className="aspect-square rounded-3xl object-cover transition-transform group-hover:scale-105"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
