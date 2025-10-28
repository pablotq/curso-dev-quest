import type { FormEvent } from 'react';
import type { KeyboardEvent } from 'react';
import './App.css'

function App() {

  const handleClick = (name: string) => {
    alert(`Evento alert disparado ${name}`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      alert('Tecla Enter pressionada')
    }
    console.log("a tecla pressionada foi: ", event.key);
    
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    console.log("o valor digitado foi: ", event.currentTarget.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Formulário enviado')
  };
  return (
    <>
      <button onClick={() => handleClick("Pablo")}>Alerta</button>
      <input type="text" onKeyDown={handleKeyPress} />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='DIGITE ALGO' onChange={handleChange}/>
        <button type="submit">Enviar</button>

      </form>
    </>
  )
}

export default App
