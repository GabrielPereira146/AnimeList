import Img from '../assets/backgroundDark.jpg';

export function SpecificWork() {
  return (
    <div className='h-svh bg-pink-800 flex flex-row'>
      <div className='w-1/2 h-full flex flex-col pl-28 items-start justify-center gap-5'>
        <span className="text-7xl font-bold text-zinc-200 ">boku no hero academia</span>
        <div className="size-auto flex flex-col gap-3">
          <div className='flex flex-row gap-5'>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-lg font-medium text-zinc-200 drop-shadow-sm">Genre: </span>
              <span className='text-sm text-zinc-200 drop-shadow-sm'>Action</span>
              <span className='text-sm text-zinc-200 drop-shadow-sm'>Historical</span>
              <span className='text-sm text-zinc-200 drop-shadow-sm'>Martial Arts</span>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <span className="text-lg font-medium text-zinc-200 ">Author: </span>
              <span className='text-sm text-zinc-200 drop-shadow-sm'>Nome do author</span>
            </div>
          </div>
          <div className="h-36 max-w-max">
            <span className=" h-36 text-sm text-zinc-200 line-clamp-6 drop-shadow-2xl">Em um mundo onde quase toda a população possui algum poder sobre-humano, Izuku Midoriya é um dos poucos casos de pessoas comuns. Mas esse não é o maior de seus problemas. Exatamente por ser desprovido de qualquer poder, Izuku sofre constantemente nas mãos de seus colegas de classe.</span>
          </div>
          <span className="text-2xl font-semibold text-zinc-800 ">Nota:</span>
        </div>
      </div>
      <div
        className="w-1/2 h-full relative bg-no-repeat bg-cover bg-top z-0"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(157, 23, 77, 0), rgba(157, 23, 77, 1)), url(${Img})`
        }}
      >
      </div>

    </div>

  );
}