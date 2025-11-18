import { useEffect, useState } from "react";

export const MostraInicializacao = ({ mensagem }: { mensagem: string }) => {
    const [estado, setEstado ] = useState('inicialização');

    console.log(estado);
    console.log(mensagem);

    useEffect(() => {
        console.log('Executa o useEffect ao renderizar o componente');
        
    }, []);

    return (
        <div>
            <h2>Estado Interno</h2>
            <p>{estado}</p>

            <h2>Props recebidas</h2>
            <pre>{JSON.stringify({ mensagem }, null, 2)}</pre>
        </div>
    )
}