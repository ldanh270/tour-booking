import Image from 'next/image'

export default function Logo() {
    return (
        <div className="bg-[url('/bg-mask.svg')] bg-cover bg-center w-3xl flex flex-row justify-center items-center py-4.5 px-20">
            <Image src="logo.svg" alt="Logo" width={95} height={56} />
            <span className="text-background font-title font-extrabold text-[26px]">Tours</span>
        </div>
    )
}
