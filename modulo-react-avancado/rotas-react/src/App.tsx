
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Router } from './routes'

function App() {

  return (
    <>
    {/* observa a url do navegador. Quando a urls mudar, seja clicando ou de outra forma, ele avisa aos componentes Route para renderizarem o conteúdo correto */}
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </>
  )
}

export default App
