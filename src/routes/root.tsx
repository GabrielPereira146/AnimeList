import IconLogo from '../assets/IconLogo.png'
import SloganLogo from '../assets/SloganLogo.png'
import { Outlet, Link } from "react-router-dom";


export default function Root() {
    return (
        <>
            <div id="sidebar" className="w-screen h-20 bg-zinc-100 flex flex-row items-center gap-8 py-3 px-10">
                <div className='flex flex-row items-center'>
                    <img className='size-14' src={IconLogo} />
                    <img className='w-32 h-10' src={SloganLogo} />
                </div>
                <nav className="flex font-medium text-lg text-zinc-800 gap-8">
                    <Link to={`/home`}>Home</Link>
                    <Link to={`/animes`}>Animes</Link>
                    <Link to={`/mangas`}>Mangas</Link>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}