import { Hero } from "../components/hero";
import { OverflowScroll } from "../components/overflow-scroll";

export function Mangas() {
    const getSeason = () => {
        const now = new Date();
        const month = now.getMonth() + 1; // Adiciona 1 porque o mês é indexado a partir de 0
        if (month >= 3 && month <= 5) {
            return "Spring";
        } else if (month >= 6 && month <= 8) {
            return "Summer";
        } else if (month >= 9 && month <= 11) {
            return "Autumn";
        } else {
            return "Winter";
        }
    };

    // Obtém o ano atual
    const currentYear = new Date().getFullYear();

    const MangaSeason = `${getSeason()} ${currentYear} MANGA`


    return (
        <div className="w-auto h-full bg-white">
            {/* HERO */}
            <Hero workType={"MANGA"} />
            <div className="flex flex-col px-6 py-10 gap-6">
                <span className="font-bold text-xl"> {MangaSeason}</span>
                <OverflowScroll workType="MANGA" search={"MangaSeason"} />
                <span className="font-bold text-xl">TOP ANIMES</span>
                <OverflowScroll workType="MANGA" search={"Top"} />
            </div>
        </div>
    );
}