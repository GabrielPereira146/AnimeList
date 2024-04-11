
export function RegisterUser() {
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
                    <div className=" shadow-xl rounded-full w-96 h-12">
                        <input className=" border-transparent bg-white/35 rounded-full w-96 h-12" type="text" value={"USUARIO"} />
                    </div>

                    <input className="bg-white/35 shadow-xl rounded-full w-96 h-12 border-transparent" type="text" />
                    <input className="bg-white/35 shadow-xl rounded-full w-96 h-12 border-transparent" type="text" />
                </div>
            </div>
        </div>
    )
}