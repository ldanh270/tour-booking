import Lower from '@/components/header/lower'
import Upper from '@/components/header/upper'

export default function Header() {
    return (
        <section className="w-full h-auto bg-background">
            <Upper />
            <Lower />
        </section>
    )
}
