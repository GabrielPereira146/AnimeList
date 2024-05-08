import { Hero } from "../components/hero";

export function Home() {

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

    const AnimeSeason = `${getSeason()} ${currentYear} ANIME`
    const MangaSeason = `${getSeason()} ${currentYear} MANGA`



  
        return (
            <div className="w-auto h-[1920px] bg-white">
                {/* HERO */}
                <Hero/>
                <div className="flex flex-col px-6 py-10 gap-4">
                    <span className="font-bold text-xl"> {AnimeSeason}</span>
                    <span className="font-bold text-xl"> {MangaSeason}</span>
                </div>
            </div>
        );
    

}
