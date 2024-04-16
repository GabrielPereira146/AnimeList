import { Link } from 'react-router-dom';
import IconLogo from '../assets/IconLogo.png'
import SloganLogo from '../assets/SloganLogo.png'



export function Header() {
    return (
        <div className="w-full h-20 bg-zinc-100 flex flex-row items-center gap-8 py-3 px-10 fixed top-0 left-0 z-50">
            <div className='flex flex-row items-center'>
                <img className='size-14' src={IconLogo} />
                <img className='w-32 h-10' src={SloganLogo} />
            </div>
            <nav className="flex font-medium text-lg text-zinc-800 gap-8">
                <Link to={`/`}>Home</Link>
                <Link to={`/animes`}>Animes</Link>
                <Link to={`/mangas`}>Mangas</Link>
            </nav>
        </div>
    )
}