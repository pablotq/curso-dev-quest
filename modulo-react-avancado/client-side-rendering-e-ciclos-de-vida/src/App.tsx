import { useEffect, useState } from 'react'
import './App.css'
import { MostraInicializacao } from './components/MostraInicializacao/inedx'

function Contador() {
  useEffect(() => {
    // criamos um intervalo que será executado a cada 1 segundo
    const interval = setInterval(() => {
      console.log('Intervalo rodando...');
    }, 1000);


    //cleanup
    return () => {
      console.log('Limpando o intervalo antes de desmontar o componente');
      clearInterval(interval);
    }
  }, []);

  return <h2>Sou o componente Contador</h2>
}

function App() {
  const [count, setCount] = useState(0);
  const [mostrar, setMostar] = useState(true);

  useEffect(() => {
    console.log("executa o useEffect toda vez que o count mudar");
  }, [count])

  return (
    <>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Incrementar</button>

      <h1></h1>
      <button onClick={() => setMostar(prev => !prev)}>
        {mostrar ? 'Remover contador' : 'Mostrar contador'}
      </button>
      {mostrar && <Contador />}


      {/* <MostraInicializacao mensagem='Olá Mundo!'/> */}
    </>
  )
}

export default App
