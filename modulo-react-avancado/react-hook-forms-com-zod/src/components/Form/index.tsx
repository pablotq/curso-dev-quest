import "./Form.css";
import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const passwordSchema = z
  .string()
  .nonempty('Campo obrigatório.')
  .min(6, { message: "A senha deve ter pelo menos 6 caracteres" })
  .refine((val) => /[A-Z]/.test(val), { error: "A senha deve conter letra maiúscula" })
  .refine((val) => /[a-z]/.test(val), { error: "A senha deve conter letra minúscula" })
  .refine((val) => /[0-9]/.test(val), { error: "A senha deve conter número" })
  .refine((val) => /[!@#$%^&*]/.test(val), { error: "A senha deve conter caractere especial" });



const registerUserForSchema = z.object({
    email: z.email('Preencha o e-mail corretamente').nonempty('Campo obrigatório.'),
    password: passwordSchema,
    confirmPassword: z.string().nonempty('Informe a senha novamente.'),
    telefone: z
        .string()
        .nonempty('Campo obrigatório.')
        .regex(/^\d+$/, 'O telefone deve conter apenas números.')
        .min(10, 'O telefone deve ter pelo menos 10 dígitos.')
        .max(11, 'O telefone deve ter no máximo 11 dígitos.')
})
   .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
    });


type registerUserFormData = z.infer<typeof registerUserForSchema>


export const Form = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<registerUserFormData>({ //tipar o useForm permite que ao usar o register use apenas argumentos válidos
        mode: 'onBlur', // quando sair do input, fará a validação
        criteriaMode: 'all', // pegar todos os erros
        resolver: zodResolver(registerUserForSchema) // define que quem fará as verificações será o zod
    })

    const onSubmit: SubmitHandler<registerUserFormData> = async (data: registerUserFormData) => {
        await fetch('https://localhost:3333/users', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    }    

    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Informe seu e-mail" {...register("email")} />
            {errors?.email && <p>{errors?.email.message}</p>}

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" placeholder=" (DDD + número)" {...register("telefone")} />
            {errors?.telefone && <p>{errors?.telefone.message}</p>}

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Informe sua senha" {...register("password")} />
            {errors?.password && <p>{errors?.password.message}</p>}

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input type="password" id="confirmPassword" placeholder="Informe sua senha novamente" {...register("confirmPassword")} />
            {errors?.confirmPassword && <p>{errors?.confirmPassword.message}</p>}

            <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
    )
}