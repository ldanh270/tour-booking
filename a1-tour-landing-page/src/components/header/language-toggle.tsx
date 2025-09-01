'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useState } from 'react'

import Image from 'next/image'

export function LanguageToggle() {
    const [open, setOpen] = useState(false)
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="font-text flex h-[34px] w-[100px] cursor-pointer flex-row items-center justify-center gap-0 rounded-full px-3 font-normal"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <span className="scale-100 rotate-0">Language</span>
                    <span className="absolute scale-0 rotate-90">Ngôn ngữ</span>
                    <Image
                        src="/icons/dropdown-icon-triangle.svg"
                        alt="Dropdown Icon"
                        width={8}
                        height={10}
                        quality={100}
                        className="h-full"
                    />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="center"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="*:cursor-pointer"
            >
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Tiếng Việt</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
