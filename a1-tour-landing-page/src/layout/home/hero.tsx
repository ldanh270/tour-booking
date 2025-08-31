import ForwardArrow from '@/components/common/forward-arrow'
import { VerticalMarker } from '@/components/hero/vertical-marker'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div className="w-full h-[805px] bg-[url('/hero/background.svg')] bg-cover bg-center flex flex-col justify-center items-stretch">
            <div className="w-full flex flex-row justify-between items-center">
                <div
                    id="banner"
                    className="flex flex-col h-full justify-center items-start **:text-background w-[700px] ml-[300px] *:select-none"
                >
                    <span className="font-accent text-accent text-[40px]">
                        Get unforgetable pleasure with us
                    </span>
                    <span className="font-bold font-title text-[80px]">
                        Explore beauty of the whole world
                    </span>
                    <div className="flex flex-row gap-4">
                        <Button variant="default" className="rounded-full w-52 h-16">
                            <span className="text-[1rem]">Explore Tours</span>
                            <ForwardArrow />
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent rounded-full w-52 h-16 hover:bg-secondary"
                        >
                            <span className="text-[1rem]">Our Services</span>
                            <ForwardArrow />
                        </Button>
                    </div>
                </div>
                <div
                    id="control"
                    className="flex flex-col justify-center items-center gap-7 mr-[73px]"
                >
                    <Button variant="secondary" size="icon" className="size-16 rounded-full">
                        <ForwardArrow className="-rotate-90" />
                    </Button>
                    <VerticalMarker />
                    <VerticalMarker active />
                    <VerticalMarker />
                    <Button variant="secondary" size="icon" className="size-16 rounded-full">
                        <ForwardArrow className="rotate-90" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
