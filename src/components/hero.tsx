import { ChevronLeft, ChevronRight } from "lucide-react";
import { Genre } from "./genre";
import { useWorkData } from "../hooks/useWorkData";
import {useState } from "react";
import { useAnimeData } from "../hooks/useAnimeData";
import { useMangaData } from "../hooks/useMangaData";

interface HeroProps {
    workType: string;

}


export function Hero({ workType}: HeroProps) {

    const { data } = workType === "ANIME" ? useAnimeData("Popular") : workType === "MANGA" ? useMangaData("Popular") : useWorkData("Best");
    const [currentIndex, setCurrentIndex] = useState(0);



    function goToNextPage() {
        if (data && currentIndex < data.length - 1)
            setCurrentIndex(currentIndex + 1)
        else
            setCurrentIndex(0)
    }

    function goToPrevPage() {
        if (currentIndex > 0)
            setCurrentIndex(currentIndex - 1)
        else if (data)
            setCurrentIndex(data.length - 1)
    }

    if (data && data.length > 0) {
        const workData = data[(currentIndex % data.length)];
        return (
            <div className="relative bg-no-repeat bg-cover bg-top z-0" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${workData.cover})` }}>
                <div className="flex flex-col px-6 py-6 gap-2 bg-gradient-to-b from-black">
                    <span className="text-2xl font-bold text-zinc-200 ">Popular New Titles</span>
                    <div className="size-auto flex flex-row gap-3 py-5">
                        <img className="w-56 h-80 rounded-lg" src={workData.cover} alt="Anime Cover" />
                        <div className="size-full flex flex-col gap-4 px-3 ">
                            <span className="text-4xl font-medium text-zinc-200 drop-shadow-sm">{workData.title}</span>
                            <div className="flex flex-row gap-1">
                                <Genre>{workData.status}</Genre>
                                <Genre>Action</Genre>
                                <Genre>Historical</Genre>
                                <Genre>Martial Arts</Genre>
                            </div>
                            <div className="h-36 max-w-max">
                                <span className=" h-36 text-lg text-zinc-200 font-semibold line-clamp-6 drop-shadow-2xl">{workData.synopsis}</span>
                            </div>
                            <span className="text-2xl font-semibold text-zinc-800 ">Nota: {workData.averageGrade}</span>
                            <span className="text-base font-bold text-zinc-800 ">{workData.author}</span>
                        </div>
                    </div>
                    <div className="flex flex-row self-end gap-4">
                        <button onClick={goToPrevPage} className="bg-transparent hover:bg-pink-800/35 size-10 rounded-full flex items-center justify-center">
                            <ChevronLeft className="size-8 text-black" style={{ marginLeft: "-3px" }} />
                        </button>
                        <button onClick={goToNextPage} className="bg-transparent hover:bg-pink-800/35 size-10 rounded-full flex items-center justify-center">
                            <ChevronRight className="size-8 text-black" style={{ marginRight: "-3px" }} />
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-auto h-[1920px] bg-white">
                {/* Exibição de mensagem de erro ou fallback */}
                <p>No data available.</p>
            </div>
        );
    }
}