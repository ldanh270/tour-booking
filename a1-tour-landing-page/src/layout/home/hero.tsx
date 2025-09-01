import ForwardArrow from '@/components/common/forward-arrow'
import { VerticalMarker } from '@/components/hero/vertical-marker'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <div className="flex h-[805px] w-full flex-col items-stretch justify-center bg-[url('/hero/background.svg')] bg-cover bg-center">
            <div className="flex w-full flex-row items-center justify-between">
                <div
                    id="banner"
                    className="**:text-background ml-[300px] flex h-full w-[700px] flex-col items-start justify-center *:select-none"
                >
                    <span className="font-accent text-accent text-[40px]">
                        Get unforgetable pleasure with us
                    </span>
                    <span className="font-title text-[80px] font-bold">
                        Explore beauty of the whole world
                    </span>
                    <div className="flex flex-row gap-4">
                        <Button variant="default" className="h-16 w-52 rounded-full">
                            <span className="text-[1rem]">Explore Tours</span>
                            <ForwardArrow />
                        </Button>
                        <Button
                            variant="outline"
                            className="hover:bg-secondary h-16 w-52 rounded-full bg-transparent"
                        >
                            <span className="text-[1rem]">Our Services</span>
                            <ForwardArrow />
                        </Button>
                    </div>
                </div>
                <div
                    id="control"
                    className="mr-[73px] flex flex-col items-center justify-center gap-7"
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
