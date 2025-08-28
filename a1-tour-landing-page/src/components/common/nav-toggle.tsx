'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ButtonSize, ButtonVariant } from '@/constants/ui-attibutes/button'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export function NavToggle({
    children,
    variant = 'outline',
    size = 'default',
    dropdownOptions,
    className,
}: {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    dropdownOptions?: { name: string; href: string }[]
    className?: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={variant}
                    size={size}
                    className={`size-auto flex flex-row gap-2 font-text font-normal text-foreground text-[14px] m-0 p-0 cursor-pointer hover:text-secondary ${className}`}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    {children}
                    <Image
                        src="/icons/dropdown-icon-arrow.svg"
                        alt="Dropdown Icon"
                        width={10}
                        height={10}
                    />
                    <span className="sr-only">
                        Toggle {typeof children === 'string' ? children : 'menu'}
                    </span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="center"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {dropdownOptions?.map((option) => (
                    <DropdownMenuItem key={option.href} asChild>
                        <Link href={option.href} className="cursor-pointer">
                            {option.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
