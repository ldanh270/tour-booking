// Button variants
export const buttonVariants = [
    'default',
    'outline',
    'secondary',
    'ghost',
    'link',
    'destructive',
    ,
] as const
export type ButtonVariant = (typeof buttonVariants)[number]

// Button sizes
export const ButtonSizes = ['default', 'sm', 'lg', 'icon', null, undefined] as const

// type cho variant
export type ButtonSize = (typeof ButtonSizes)[number]
