import { LucideIcon } from "lucide-react";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {
    iconInput: LucideIcon;
}


const InputRegister = forwardRef<HTMLInputElement,InputProps>(({ iconInput: Icon, ...props}, ref) => {

    return (
        <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
            <Icon className="size-9" />
            <input ref={ref} {...props}  autoComplete="off" className="focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-2xl placeholder-pink-800/60 text-pink-800 " />
        </div>
    )
})

InputRegister.displayName = 'InputRegister'
export {InputRegister}