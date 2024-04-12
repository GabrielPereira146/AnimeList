import { LockIcon, MailIcon, User2 } from "lucide-react";
import { InputRegister } from "./input-form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithValidations } from "./input-with-validation";

const createUserFormSchema = z.object({
    username: z.string().min(3, "Username is required"),
    email: z.string().email(),
    password: z.string().min(6, "Password is too short"),
    confirm_password: z.string().min(6, "Confirm password is too short")
})
    .refine(({ password, confirm_password }) => password === confirm_password, {
        message: "Password doesn't match",
        path: ["confirm_password"]
    })


type createUserFormData = z.infer<typeof createUserFormSchema>

export function RegisterUser() {

    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function createUser(data: createUserFormData) {
        console.log("AAA");
    }

    return (
        <div className="size-full flex px-64 py-12">
            <div className='flex flex-row size-full bg-white/10 border-white/35 rounded-xl backdrop-blur-md'>
                <div className='flex flex-col px-20 py-32 gap-32 bg-white/60 rounded-l-xl'>
                    <span className="text-4xl text-center">BEM VINDO</span>
                    <span
                        className="text-[40px] font-bold">
                        <span className="underline decoration-[7.5px]">Insc</span>reva-se
                    </span>
                    <button className='bg-white/60 rounded-full w-64 h-12 text-xl font-semibold shadow-xl'>Fazer Login</button>
                </div>
                <form onSubmit={handleSubmit(createUser)} noValidate className='flex flex-col items-center size-full place-self-center  gap-3 '>
                    <span className="text-4xl font-medium text-center drop-shadow-lg">CADASTRE-SE</span>
                    <InputWithValidations type="text" placeholder="USERNAME" name="username" errors={errors} register={register} iconInput={User2}/>
                    <InputWithValidations type="email" placeholder="EMAIL" name="email" errors={errors} register={register} iconInput={MailIcon}/>
                    <InputWithValidations type="password" placeholder="SENHA" name="password" errors={errors} register={register} iconInput={LockIcon}/>
                    <InputWithValidations type="password" placeholder="CONFIRMAR SENHA" name="confirm_password" errors={errors} register={register} iconInput={LockIcon}/>
                    <div className="flex items-center">
                        <input type="checkbox" className="border-zinc-700/10 bg-white/35 rounded-sm focus:ring-transparent text-pink-800/60" name="Lembrar" id="lembre" />
                        <label className="ms-2 text-base font-medium text-pink-900">Lembrar de mim</label>
                    </div>
                    <button type="submit" className='bg-pink-900 rounded-full w-72 h-16 text-3xl shadow-xl text-white hover:bg-pink-950'>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}


