import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useAnimeData } from "../hooks/useAnimeData";
import { useMangaData } from "../hooks/useMangaData";

interface OverflowScrollProps {
    workType: string;
    search: string;
}


export function OverflowScroll({ workType, search }: OverflowScrollProps) {

    const containerRef = useRef(null);

    const { data } = workType === "ANIME" ? useAnimeData(search) : useMangaData(search);

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -1700, 
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 1700, 
            behavior: "smooth"
        });
    };

    return (
        <div className=" flex flex-col relative justify-center">
            <button onClick={scrollRight} className=" flex absolute bg-transparent hover:bg-black/50 h-2/5 w-16 rounded-s-full self-end justify-center items-center">
                <ChevronRight className="size-14 text-pink-800" style={{ marginLeft: "16px" }} />
            </button>
            <button onClick={scrollLeft} className=" flex absolute bg-transparent hover:bg-black/50 h-2/5 w-16 rounded-e-full self-start justify-center items-center" >
                <ChevronLeft className="size-14 text-pink-800" style={{ marginRight: "16px" }} />
            </button>
            <div className="flex gap-6 px-10 overflow-x-hidden" ref={containerRef}>
                {data?.map((animeData) => {
                    return (
                        <img className="w-56 h-80 rounded-lg" src={animeData.cover} alt="Anime Cover" />
                    )
                }
                )}
            </div>
        </div>
    )
}