import { useState } from "react";
import type { FormEvent } from 'react';
import type { KeyboardEvent } from 'react';

const Formulario = () => {

    const [texto, setTexto] = useState('');
    const [resultado, setResultado] = useState('');

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        setTexto(event.currentTarget.value);
    }

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => 
        event.key === 'Enter' && handleClick();

    const handleClick = () => {
        setResultado(texto);
    }


    return (
        <>
            <input type="text" placeholder='DIGITE ALGO' value={texto} onChange={handleChange} onKeyDown={handleSubmit} />
            <button onClick={handleClick}>Enviar</button>
            {resultado && <p>Você digitou: {resultado}</p>}
        </>
    )
}

export default Formulario;