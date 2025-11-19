import { Suspense, lazy, useState } from 'react'

const Modal = lazy(() => import('./components/Modal'))

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div>
      <h1>Exemplo de Lazy Loading com Modal</h1>
      <button onClick={toggleModal}>Abrir Modal</button>

      <Suspense fallback={<p>Carregando Modal...</p>}>
        {isModalOpen && <Modal />}
      </Suspense>
    </div>
  )
}

export default App