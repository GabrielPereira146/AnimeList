import { Genre } from "./genre";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
    titleExibition: string;
    title : string;
    synopsis: string;
    average: number;
    author: string;
    cover: string;
 }

export function Hero({titleExibition,title,synopsis,average,author,cover}: HeroProps) {

    return (
        <div className="relative bg-no-repeat bg-cover bg-top z-0" style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${cover})` }}>
                <div className="flex flex-col px-6 py-6 gap-2 ">
                    <span className="text-2xl font-bold text-zinc-50 ">{titleExibition}</span>
                    <div className="size-auto flex flex-row gap-3 py-5">
                        <img className="w-56 h-80 rounded-lg" src={cover} alt="Anime Cover" />
                        <div className="size-full flex flex-col gap-4 px-3 ">
                            <span className="text-4xl font-medium text-zinc-50 drop-shadow-sm">{title}</span>
                            <div className="flex flex-row gap-1">
                                <Genre>Shounen</Genre>
                                <Genre>Action</Genre>
                                <Genre>Historical</Genre>
                                <Genre>Martial Arts</Genre>
                            </div>
                            <div className="h-36 max-w-max">
                                <span className=" h-36 text-lg text-zinc-950 font-semibold line-clamp-6 drop-shadow-2xl">{synopsis}</span>
                            </div>
                            <span className="text-2xl font-semibold text-zinc-800 ">Nota: {average}</span>
                            <span className="text-base font-bold text-zinc-800 ">{author}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}