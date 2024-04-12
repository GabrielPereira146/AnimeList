import { Calendar, LockIcon, MailIcon, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithValidations } from "./input-with-validation";
import { useState } from "react";
import { motion } from "framer-motion";

const createUserFormSchema = z.object({
    username: z.string().min(3, "Username is required"),
    dateNasc: z.coerce.date(),
    email: z.string().email(),
    password: z.string().min(6, "Password is too short"),
    confirm_password: z.string().min(6, "Confirm password is too short")
})
    .refine(({ password, confirm_password }) => password === confirm_password, {
        message: "Password doesn't match",
        path: ["confirm_password"]
    })

const loginUserFormSchema = z.object({
    username: z.string().min(3, "Username is required"),
    password: z.string().min(6, "Password is too short"),
})

type createUserFormData = z.infer<typeof createUserFormSchema>
type loginUserFormData = z.infer<typeof loginUserFormSchema>

export function RegisterUser() {



    const [isFocused, setIsFocused] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);

    const toggleLoginMode = () => {
        setIsLoginMode(prevMode => !prevMode);
    }
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    const { register: loginRegister, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm<loginUserFormData>({
        resolver: zodResolver(loginUserFormSchema)
    })

    function createUser(data: createUserFormData) {
        console.log("AAA");
    }

    function loginUser(data: loginUserFormData) {
        console.log("AAA");
    }

    const spanText1 = isLoginMode ? "Ent" : "Insc";
    const spanText2 = isLoginMode ? "rar" : "reva-se";

    return (
        <div className="size-full flex px-64 py-12">
            <div className="size-full">
                <div className='flex size-full bg-white/10 border-white/35 rounded-xl backdrop-blur-md'>
                    <motion.div className={`flex flex-col h-full w-2/5 items-center py-32 gap-32 bg-white/60 ${isLoginMode ? 'rounded-r-xl' : 'rounded-l-xl'}`}
                        initial={{ x: 0 }}
                        animate={{ x: isLoginMode ? "250%" : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-4xl text-center">BEM VINDO</span>
                        <span
                            className="text-[40px] font-bold">
                            <span className="underline decoration-[7.5px]">{spanText1}</span>{spanText2}
                        </span>
                        <button onClick={toggleLoginMode} className='bg-white/60 rounded-full w-64 h-12 text-xl font-semibold shadow-xl'>
                            {isLoginMode ? "Registrar" : "Fazer Login"}
                        </button>
                    </motion.div>
                    <motion.div className={`flex flex-col items-center size-full place-self-center gap-3`}
                        initial={{ x: 0}}
                        animate={{ x: isLoginMode ? "-40%" : 0}}   
                        transition={{ duration: 1 }}
                    >
                        {isLoginMode ? (
                            <form onSubmit={handleLoginSubmit(loginUser)} noValidate className='flex flex-col items-center size-full place-self-center  gap-3 '>
                                <span className="text-4xl font-medium text-center drop-shadow-lg">FAÇA LOGIN</span>
                                <InputWithValidations type="text" placeholder="USERNAME" name="username" errors={loginErrors} register={loginRegister} iconInput={User2} />
                                <InputWithValidations type="password" placeholder="SENHA" name="password" errors={loginErrors} register={loginRegister} iconInput={LockIcon} />
                                <button type="submit" className='bg-pink-900 rounded-full w-72 h-16 text-3xl shadow-xl text-white hover:bg-pink-950'>LOGIN</button>
                            </form>
                        ) : (
                            <form onSubmit={handleSubmit(createUser)} noValidate className='flex flex-col items-center size-full place-self-center  gap-3 '>
                                <span className="text-4xl font-medium text-center drop-shadow-lg">CADASTRE-SE</span>
                                <InputWithValidations type="text" placeholder="USERNAME" name="username" errors={errors} register={register} iconInput={User2} />
                                {isFocused ? (
                                    <InputWithValidations type="date" name="dateNasc" errors={errors} register={register} iconInput={Calendar} onFocus={handleFocus} onBlur={handleBlur} />
                                ) : (
                                    <InputWithValidations type="text" placeholder="DATA DE NASCIMENTO" name="dateNasc" errors={errors} register={register} iconInput={Calendar} onFocus={handleFocus} />
                                )}
                                <InputWithValidations type="email" placeholder="EMAIL" name="email" errors={errors} register={register} iconInput={MailIcon} />
                                <InputWithValidations type="password" placeholder="SENHA" name="password" errors={errors} register={register} iconInput={LockIcon} />
                                <InputWithValidations type="password" placeholder="CONFIRMAR SENHA" name="confirm_password" errors={errors} register={register} iconInput={LockIcon} />
                                <div className="flex items-center">
                                    <input type="checkbox" className="border-zinc-700/10 bg-white/35 rounded-sm focus:ring-transparent text-pink-800/60" name="Lembrar" id="lembre" />
                                    <label className="ms-2 text-base font-medium text-pink-900">Lembrar de mim</label>
                                </div>
                                <button type="submit" className='bg-pink-900 rounded-full w-72 h-16 text-3xl shadow-xl text-white hover:bg-pink-950'>CADASTRAR</button>
                            </form>
                        )}
                    </motion.div>


                </div>
            </div>

        </div >
    )
}


