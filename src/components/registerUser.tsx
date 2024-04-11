import { LockIcon, MailIcon, User2 } from "lucide-react";

export function RegisterUser() {

    function validatePassword(confsenha:string, senha:string){

    }


    return (
        <div className="size-full flex px-64 py-24">
            <div className='flex flex-row size-full bg-white/10 border-white/35 rounded-xl backdrop-blur-md'>
                <div className='flex flex-col px-20 py-32 gap-32 bg-white/60 rounded-l-xl'>
                    <span className="text-4xl text-center">BEM VINDO</span>
                    <span className="text-5xl font-bold">Inscreva-se</span>
                    <button className='bg-white/60 rounded-full w-64 h-12 text-xl shadow-xl'>Fazer Login</button>
                </div>
                <div className='flex flex-col items-center size-full px-20 py-32 gap-5 '>
                    <span className="text-4xl font-medium text-center drop-shadow-lg">CADASTRE-SE</span>
                    <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
                        <User2 className="size-9"></User2>
                        <input className="focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-2xl placeholder-pink-800/60 text-pink-800/60" type="text" placeholder="USUARIO" />
                    </div>
                    <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
                        <MailIcon className="size-9"></MailIcon>
                        <input className="focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-2xl placeholder-pink-800/60 text-pink-800/60" type="email" placeholder="EMAIL" />
                    </div>
                    <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
                        <LockIcon className="size-9"></LockIcon>
                        <input className=" focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-2xl placeholder-pink-800/60 text-pink-800/60" type="password" placeholder="SENHA" />
                    </div>
                    <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
                        <LockIcon className="size-9"></LockIcon>
                        <input className=" focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-2xl placeholder-pink-800/60 text-pink-800/60" type="password" placeholder="CONFIRMAR SENHA" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="border-zinc-700/10 bg-white/35 rounded-sm focus:ring-transparent text-pink-800/60" name="Lembrar" id="lembre" />
                        <label className="ms-2 text-base font-medium text-pink-900">Lembrar de mim</label>
                    </div>
                    <button className='bg-pink-900 rounded-full w-72 h-16 text-3xl shadow-xl text-white '>CADASTRAR</button>

                </div>
            </div>
        </div>
    )
}