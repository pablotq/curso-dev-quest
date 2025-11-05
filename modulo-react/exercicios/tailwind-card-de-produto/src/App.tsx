import ProductCard from "./components"
import Camiseta from '/images/camiseta-2.webp';


function App() {

  return (
    <>
      <section className='h-screen flex items-center justify-center bg-black'>
        <ProductCard image={Camiseta} name="Camiseta Dev em Dobro" color="roxo" size="M" price={"89,00"}/>
      </section>
    </>
  )
}

export default App
5