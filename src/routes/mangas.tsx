import { Hero } from "../components/hero";
import { OverflowScroll } from "../components/overflow-scroll";

export function Mangas() {

    return (
        <div className="w-auto h-full bg-white">
            {/* HERO */}
            <Hero workType={"MANGA"} />
            <div className="flex flex-col px-6 py-10 gap-6">
                <span className="font-bold text-xl">Latest Updates</span>
                <OverflowScroll workType="MANGA" search={"Recent"} />
                <span className="font-bold text-xl">TOP MANGA</span>
                <OverflowScroll workType="MANGA" search={"Top"} />
            </div>
        </div>
    );
}