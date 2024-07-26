import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister, } from "react-hook-form";
import { LucideIcon } from "lucide-react";

interface InputWithValidationsProps<FormData extends FieldValues> extends
    DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    iconInput: LucideIcon;
    name: Path<FormData>;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}

export const InputWithValidations = <FormData extends FieldValues>({
    iconInput: Icon,
    name,
    register,
    errors,
    ...rest
}: InputWithValidationsProps<FormData>) => {
    return (
        <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-row items-center shadow-xl rounded-full pl-3 bg-white/35 w-96 h-12">
                <Icon className="size-9" />
                <input  {...rest} {...register(name)} autoComplete="off" className="focus:ring-transparent focus:border-transparent border-transparent bg-transparent rounded-e-full w-full h-12 font-semibold text-xl placeholder-pink-800/60 text-pink-800" />
            </div>
            {errors?.[name]?.message && <span className="px-6 text-md font-medium text-center drop-shadow-lg">{String(errors?.[name]?.message)}</span>}
        </div>
    );
}