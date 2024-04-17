import { Genre } from "./genre";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
    titleExibition: string;
    title : string;
    listGenres : string[];
    synopsis: string;
    average: number;
    author: string;
    cover: string;
 }

export function Hero({titleExibition,title,listGenres,synopsis,average,author,cover}: HeroProps) {

    return (
        <div className="relative bg-no-repeat bg-cover bg-center z-0 " style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${cover})` }}>
                <div className="flex flex-col px-6 py-6 gap-2 ">
                    <span className="text-2xl font-bold text-zinc-800 ">{titleExibition}</span>
                    <div className="size-auto flex flex-row gap-3 py-5">
                        <img className="w-56 h-80 rounded-lg" src={cover} alt="Anime Cover" />
                        <div className="size-full flex flex-col gap-4 px-3 ">
                            <span className="text-4xl font-medium text-zinc-800 drop-shadow-sm">{title}</span>
                            <div className="flex flex-row gap-1">
                                <Genre>Shounen</Genre>
                                <Genre>Action</Genre>
                                <Genre>Historical</Genre>
                                <Genre>Martial Arts</Genre>
                            </div>
                            <div className="h-36 max-w-max">
                                <span className=" h-36 text-base text-zinc-800 font-medium line-clamp-6">{synopsis}</span>
                            </div>
                            <span className="text-2xl font-semibold text-zinc-800 "><span>Nota:</span>{average}</span>
                            <span className="text-base font-bold text-zinc-800 ">{author}</span>
                        </div>
                    </div>
                    <div className='flex flex-row w-auto items-center self-end gap-2'>
                        <button className='border border-zinc-800 rounded-full bg-zinc-800/10 '><ChevronLeft className='text-zinc-800' /></button>
                        <button className='border border-zinc-800 rounded-full bg-zinc-800/10 '><ChevronRight className='text-zinc-800' /></button>
                    </div>
                </div>
            </div>
    )
}