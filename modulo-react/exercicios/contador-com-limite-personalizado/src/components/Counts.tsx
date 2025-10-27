import { useState } from "react";

const Counts = () => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [count, setCount] = useState(0);

    const incrementar = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }

    const decrementar = () => {
        if (count > min) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <h2>Defina os limites do contador</h2>
            <label>Valor Mínimo:</label>
            <input type="number" placeholder="Valor Inicial" value={min} onChange={(event) => setMin(Number(event.target.value))} />
            <label>Valor Máximo:</label>
            <input type="number" placeholder="Valor Máximo" value={max} onChange={(event) => setMax(Number(event.target.value))} />
            <h2>Contador: {count}</h2>
            <p></p>
            <button onClick={() => incrementar()}>+</button>
            <button onClick={() => decrementar()}>-</button>

            {count === min && (
                <p style={{ color: "red" }}>Você atingiu o valor mínimo!</p>
            )}
            {count === max && (
                <p style={{ color: "red" }}>Você atingiu o valor máximo!</p>
            )}
        </>
    );
}

export default Counts;