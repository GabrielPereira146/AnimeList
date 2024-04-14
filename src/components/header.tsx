import { ComponentProps } from 'react';
import background from '../assets/backgroundLight.jpg'
import { twMerge } from 'tailwind-merge';


interface HeaderProps extends ComponentProps<'div'> {
}

export function Header(props: HeaderProps) {
    return (
        <div  {...props} className={twMerge("flex h-[400px] gradient-mask-b-0 relative", props.className)} >
            <img className='w-full ' src={background} alt="a" />
        </ div>
    )
}