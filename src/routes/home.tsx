import { Form } from "react-router-dom";
import AnimeCover from '../assets/backgroundLight.jpg'
import { Genre } from "../components/genre";


export default function Home() {

    return (
        <div className="w-screen h-screen bg-white">
            <div className="relative">
                <div className="flex h-[400px] gradient-mask-b-0 absolute inset-0">
                    <img className='w-full h-full' src={AnimeCover} alt="a" />
                </div>
                <div className="absolute inset-0 flex flex-col px-6 py-6 gap-2">
                    <span className="text-2xl font-bold text-zinc-800 drop-shadow-sm">Popular New Titles</span>
                    <div className="size-full flex flex-row gap-3 py-5" style={{ backgroundColor: "transparent" }}>
                        <img className="w-56 h-80 rounded-lg" src={AnimeCover} alt="Anime Cover" />
                        <div className="size-full flex flex-col gap-4 px-3 ">
                            <span className="text-4xl font-medium text-zinc-800 drop-shadow-sm">Kimetsu no Yaiba: Hashira Geiko-hen</span>
                            <div className="flex flex-row gap-1  ">
                                <Genre>Shounen</Genre>
                                <Genre>Action</Genre>
                                <Genre>Historical</Genre>
                                <Genre>Martial Arts</Genre>
                            </div>
                            <p className="h-36 text-base text-zinc-800 font-medium">Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.</p>
                            <span className="text-2xl font-semibold text-zinc-800 "><span>Nota:</span>N/A</span>
                            <span className="text-base font-bold text-zinc-800 ">Koyoharu Gotouge</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


    );
}
