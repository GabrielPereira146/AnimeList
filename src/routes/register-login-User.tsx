import { Calendar, LockIcon, MailIcon, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithValidations } from "../components/input-with-validation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUserDataMutate } from "../hooks/useUserDataMutate";

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

export function RegisterLoginUser() {


    const [isTransition, setIsTransition] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);
    const [changeMode, setChangeMode] = useState(false);
    const {mutate} = useUserDataMutate();



    const toggleLoginMode = () => {
        setChangeMode(prevMode => !prevMode);
        setIsTransition((prev) => !prev);
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
        mutate(data);
    }

    function loginUser(data: loginUserFormData) {
        console.log(data);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsTransition(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [isTransition]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isTransition) {
                setIsLoginMode(prevMode => !prevMode);
            }
        }, 400);
    
        return () => clearTimeout(timeout);
    }, [isTransition]);

    const spanText1 = isLoginMode ? "Ent" : "Insc";
    const spanText2 = isLoginMode ? "rar" : "reva-se";

    const animation = {
        opacity: isTransition ? 1 : 0,
        transition: { duration: 0.4 },
        transitionEnd: { x: changeMode ? "-50%" : 0, }
    }

    return (
        <div className="size-full flex px-64 py-12" >
            <div className='flex flex-row size-full bg-white/10 border-white/35 rounded-xl backdrop-blur-md'>
                <motion.div className={`flex flex-col basis-1/3 items-center py-32 gap-32 bg-white/60 ${changeMode ? 'rounded-r-xl' : 'rounded-l-xl'}`}
                    initial={{ x: 0 }}
                    animate={{ x: changeMode ? "200%" : 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-4xl text-center">BEM VINDO</span>
                    <span
                        className="text-[40px] font-bold">
                        <span className="underline decoration-[5px] underline-offset-8">{spanText1}</span>{spanText2}
                    </span>
                    <button onClick={toggleLoginMode} className='bg-white/60 rounded-full w-64 h-12 text-xl font-semibold shadow-xl'>
                        {isLoginMode ? "Registrar" : "Fazer Login"}
                    </button>
                </motion.div>
                <motion.div className="flex basis-2/3  justify-center items-center"
                    animate={animation}
                >
                    {isLoginMode ? (
                        <form onSubmit={handleLoginSubmit(loginUser)} noValidate className='flex flex-col items-center basis-2/3 place-self-center gap-3 '>
                            <span className="text-4xl font-medium text-center drop-shadow-lg">FAÇA LOGIN</span>
                            <InputWithValidations type="text" placeholder="USERNAME" name="username" errors={loginErrors} register={loginRegister} iconInput={User2} />
                            <InputWithValidations type="password" placeholder="SENHA" name="password" errors={loginErrors} register={loginRegister} iconInput={LockIcon} />
                            <button type="submit" className='bg-pink-900 rounded-full w-72 h-16 text-3xl shadow-xl text-white hover:bg-pink-950'>LOGIN</button>
                        </form>

                    ) : (
                        <form onSubmit={handleSubmit(createUser)} noValidate className='flex flex-col items-center basis-2/3 place-self-center gap-3 '>
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


    )
}


