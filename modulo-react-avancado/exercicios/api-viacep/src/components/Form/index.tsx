import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

interface Cep {
    cep: string
    logradouro: string
    complemento: string
    unidade: string
    bairro: string
    localidade: string
    uf: string
    estado: string
    regiao: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
};

async function buscaCep(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
};

const validaCEPSchema = z.object({
    cep: z
        .string()
        .nonempty('Campo obrigatório.')
        .regex(/^\d+$/, 'O CEP deve conter apenas números.')
        .length(8, 'O CEP deve conter 8 dígitos.'),
});

type validaCEPFormData = z.infer<typeof validaCEPSchema>

export const Form = () => {
    const [cepData, setCepData] = useState<Cep | null>(null)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm<validaCEPFormData>({
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(validaCEPSchema)
    });

    const getCep: SubmitHandler<validaCEPFormData> = async (data: validaCEPFormData) => {
        const cep = data.cep;
        try {
            const cepData = await buscaCep(cep);
            
            if (cepData.erro) {
                alert('CEP não encontrado');
                setCepData(null);
                return
            }else{
                setCepData(cepData);
            }

            

        } catch (error) {
            alert('Erro ao buscar o CEP. Tente novamente');
        }
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center m-10 gap-4'>
                <h2 className='font-bold text-3xl'>Buscar Endereço</h2>
                <form className='flex flex-col gap-3 items-center' onSubmit={handleSubmit(getCep)}>
                    <label htmlFor="cep">Digite o CEP do endereço que você deseja procurar:</label>
                    <input className='bg-white text-black rounded-sm' type="text" id="cep" placeholder="Digite o CEP" {...register("cep")} />
                    {errors?.cep && <p className='text-red-600'>{errors?.cep.message}</p>}

                    <button className='bg-gray-500 cursor-pointer w-30 h-8 rounded-md hover:bg-gray-600' type="submit" disabled={isSubmitting}>Buscar</button>
                </form>

                {cepData  && (
                    <>
                    <h2 className='text-2xl text-green-600 '>Endereço encontrado!</h2>
                    <div className='flex flex-col gap-3 border rounded-2xl p-4'>
                        <p><span className='font-bold'>CEP:</span> {cepData?.cep}</p>
                        <p><span className='font-bold'>Logradouro:</span> {cepData?.logradouro}</p>
                        <p><span className='font-bold'>Bairro:</span>  {cepData?.bairro}</p>
                        <p><span className='font-bold'>Cidade:</span>  {cepData?.localidade}</p>
                        <p><span className='font-bold'>Estado:</span>  {cepData?.uf}</p>
                    </div>
                    </>
                )}

            </div>
        </>
    )
}