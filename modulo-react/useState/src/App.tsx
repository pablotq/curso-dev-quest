import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyInput from './components/MyInput'

function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count => count + 1);
  }

  const decrementar = () => {
    setCount(count => count - 1);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>O contador é {count}</h2>
        <button onClick={() => incrementar()}>
          Incrementar
        </button>
        <button onClick={() => decrementar()}>
          Decrementar
        </button>
        <br/>
        <br/>
        <button onClick={() => setCount(0)}>
          Resetar
        </button>    
        <br/>
        <br/>
        <MyInput></MyInput>
      </div>
    </>
  )
}

export default App
