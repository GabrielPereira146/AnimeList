import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWorkData } from "../hooks/useWorkData";
import { useState } from "react";
import { useAnimeData } from "../hooks/useAnimeData";
import { useMangaData } from "../hooks/useMangaData";

interface HeroProps {
    workType: string;

}

export function Hero({ workType }: HeroProps) {

    const animeData = useAnimeData("Popular");
    const mangaData = useMangaData("Popular");
    const worksData = useWorkData("Popular");
    const data = workType === "ANIME" ? animeData.data : workType === "MANGA" ? mangaData.data : worksData.data;
   // const { data } = workType === "ANIME" ? useAnimeData("Popular") : workType === "MANGA" ? useMangaData("Popular") : useMangaData("Popular");
   
    const [currentIndex, setCurrentIndex] = useState(0);
    //console.log(data);


    function goToNextPage() {
        if (data && data.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }
    }

    function goToPrevPage() {
        if (data && data.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
        }
    }
    if (!data || data.length === 0) {
        return (
            <div className="w-auto h-[1920px] bg-white">
                <p>No data available.</p>
            </div>
        );
    }

    const workData = data[currentIndex];
    
    if (!workData || !workData.attributes) {
        return (
            <div className="w-auto h-[1920px] bg-white">
                <p>No valid data available.</p>
            </div>
        );
    }

    return (
        <div
            className="relative bg-no-repeat bg-cover bg-top z-0"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), 
                url(${workData.attributes.coverImage ? workData.attributes.coverImage.original : workData.attributes.posterImage.original})` }}
        >
            <div className="flex flex-col px-6 py-6 gap-2 bg-gradient-to-b from-black">
                <span className="text-2xl font-bold text-zinc-200">Popular Titles</span>
                <div className="size-auto flex flex-row gap-3 py-5">
                    <img className="w-56 h-80 rounded-lg" src={workData.attributes.posterImage.original} alt="Work Cover" />
                    <div className="size-full flex flex-col gap-4 px-3">
                        <div>
                            <span className="text-4xl font-medium text-zinc-200 drop-shadow-sm">{workData.attributes.titles.en}</span>
                            <h1 className="text-zinc-200 drop-shadow-sm">{workData.attributes.titles.en_jp}</h1>
                        </div>
                        <div className="h-36 max-w-max">
                            <span className="h-36 text-lg text-zinc-200 font-semibold line-clamp-6 drop-shadow-2xl">{workData.attributes.synopsis}</span>
                        </div>
                        <span className="text-2xl font-semibold text-zinc-800">Grade: {workData.attributes.averageRating}</span>
                    </div>
                </div>
                <div className="flex flex-row self-end gap-4">
                    <button onClick={goToPrevPage} className="bg-transparent hover:bg-pink-800/35 size-10 rounded-full flex items-center justify-center z-10">
                        <ChevronLeft className="size-8 text-black" style={{ marginLeft: "-3px" }} />
                    </button>
                    <button onClick={goToNextPage} className="bg-transparent hover:bg-pink-800/35 size-10 rounded-full flex items-center justify-center z-10">
                        <ChevronRight className="size-8 text-black" style={{ marginRight: "-3px" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}