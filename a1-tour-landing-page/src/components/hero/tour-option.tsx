'use client'

import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

import * as React from 'react'

import { Check, ChevronsUpDown } from 'lucide-react'
import Image from 'next/image'

export function TourOption({
    main,
    dropdownOptions,
    className,
}: {
    main: { label: string; icon: string }
    dropdownOptions?: string[]
    className?: string
}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size="default"
                    className={`size-auto flex flex-row justify-start items-center gap-2 font-text font-normal text-foreground text-[14px] m-0 p-0 cursor-pointer h-full hover:text-secondary hover:bg-none ${className}`}
                >
                    <div className="flex flex-row w-full">
                        <Image
                            src={main.icon}
                            alt={`${main.label} filter`}
                            width={20}
                            height={20}
                            className="fill-background w-5 h-5 mr-2"
                        />
                        <span className="text-secondary flex-1 text-left">{main.label}</span>
                    </div>
                    <Image
                        src="/icons/dropdown-icon-arrow.svg"
                        alt="Dropdown Icon"
                        width={10}
                        height={10}
                    />
                    <span className="sr-only">Toggle filter</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" side="bottom" align="start">
                <Command>
                    <CommandInput placeholder={`Search ${main.label}`} className="h-9" />
                    <CommandList>
                        <CommandEmpty>No {`${main.label.toString}`} found.</CommandEmpty>
                        <CommandGroup>
                            {dropdownOptions?.map((option) => (
                                <CommandItem
                                    key={option}
                                    value={option}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? '' : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {option}
                                    <Check
                                        className={cn(
                                            'ml-auto',
                                            value === option ? 'opacity-100' : 'opacity-0',
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
