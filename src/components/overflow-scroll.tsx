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
    <div className="flex flex-col relative justify-center">
        <button onClick={scrollRight} className="absolute bg-transparent hover:bg-black/50 h-2/5 w-16 rounded-s-full self-end justify-center items-center z-10">
            <ChevronRight className="size-14 text-pink-800" style={{ marginLeft: "16px" }} />
        </button>
        <button onClick={scrollLeft} className="absolute bg-transparent hover:bg-black/50 h-2/5 w-16 rounded-e-full self-start justify-center items-center z-10">
            <ChevronLeft className="size-14 text-pink-800" style={{ marginRight: "16px" }} />
        </button>
        <div className="flex gap-6 px-5 overflow-x-hidden" ref={containerRef} style={{ scrollSnapType: 'x mandatory' }}>
            {data?.map((animeData) => (
                <div key={animeData.id} className="relative flex-shrink-0 w-56">
                    <div className="relative group">
                        <img className="w-full h-80 rounded-lg" src={animeData.attributes.posterImage.original} alt="Anime Cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition duration-300 ease-in-out rounded-lg"></div>
                        <div className="absolute inset-0 pl-4 py-2 text-white transform opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-start items-start">
                            <h3 className="text-lg font-semibold">{animeData.attributes.canonicalTitle}</h3>
                            <p className="text-sm mt-2 line-clamp-6">{animeData.attributes.synopsis}</p>
                            <p className="text-sm mt-2 justify-self-end">Status: {animeData.attributes.status}</p>
                            <p className="text-sm mt-2 justify-self-end">Rating: {animeData.attributes.averageRating}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

}