import './App.css'
import { BotaoExterno } from './components/BotaoExterno'
import { BotaoModule } from './components/BotaoModule'
import { BotaoStyled } from './components/BotaoStyled'

function App() {

  return (
    <>
      <BotaoExterno />
      {/* o css pega, pois ele é global */}
      <button className='my-button'>Outro my-button</button>
      <BotaoModule/>
      {/* o css não pega, pois ele é feito só para o componente */}
      <button className='myButton'>Outro myButton</button>
      <BotaoStyled/>
    </>
  )
}

export default App
