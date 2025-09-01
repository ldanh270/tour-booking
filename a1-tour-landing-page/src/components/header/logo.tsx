import Image from 'next/image'

export default function Logo() {
    return (
        <div className="flex w-3xl flex-row items-center justify-center bg-[url('/bg-mask.svg')] bg-cover bg-center px-20 py-4.5">
            <Image src="logo.svg" alt="Logo" width={95} height={56} />
            <span className="text-background font-title text-[26px] font-extrabold">Tours</span>
        </div>
    )
}
