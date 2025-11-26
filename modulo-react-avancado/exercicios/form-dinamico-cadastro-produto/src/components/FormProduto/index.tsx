import { z } from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

interface Produto {
    id: number
    nome: string
    preco: number
    categoria: string
};

const produtoSchema = z.object({
    nome: z.string().nonempty('Nome do produto é obrigatório.'),
    preco: z.string().nonempty('Preço do produto é obrigatório.'),
    categoria: z.string().nonempty('Categoria do produto é obrigatória.'),
});

type produtoFormData = z.infer<typeof produtoSchema>

export const ProdutoForm = () => {
    const [produto, setProduto] = useState<Produto[]>([]);

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<produtoFormData>({
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(produtoSchema)
    });

    const addProduto: SubmitHandler<produtoFormData> = (data: produtoFormData) => {
        const nome = data.nome;
        const preco = data.preco;
        const categoria = data.categoria;

        const newProduto = {
            id: Date.now(),
            nome,
            preco: Number(preco),
            categoria
        }

        setProduto(prev => [...prev, newProduto]);
        reset();
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center m-10 gap-4 bg-[#333] text-white'>
                <h2 className='font-bold text-3xl'>Lista de Produtos</h2>
                <form className='flex flex-col gap-3 items-center' onSubmit={handleSubmit(addProduto)}>
                    <label htmlFor="nome">Nome:</label>
                    <input className='bg-white text-black rounded-sm' type="text" id="nome" placeholder="Nome do Produto" {...register("nome")} />
                    {errors?.nome && <p className='text-red-600'>{errors?.nome.message}</p>}

                    <label htmlFor="nome">Preço:</label>
                    <input className='bg-white text-black rounded-sm' type="text" id="nome" placeholder="Preço do Produto" {...register("preco")} />
                    {errors?.preco && <p className='text-red-600'>{errors?.preco.message}</p>}

                    <label htmlFor="categoria">Categoria:</label>
                    <input className='bg-white text-black rounded-sm' type="text" id="categoria" placeholder="Categoria do Produto" {...register("categoria")} />
                    {errors?.categoria && <p className='text-red-600'>{errors?.categoria.message}</p>}

                    <button className='bg-gray-500 cursor-pointer w-30 h-8 rounded-md m-4 hover:bg-gray-600' type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>

                {produto.map(item => (
                    <>
                        <h2>Lista de Produtos:</h2>
                        <ul key={item.id}>
                            <li>
                                <p>{item.nome}</p>
                                <p>{item.preco}</p>
                                <p>{item.categoria}</p>
                            </li>
                        </ul>
                    </>
                ))}

            </div>
        </>
    )
}