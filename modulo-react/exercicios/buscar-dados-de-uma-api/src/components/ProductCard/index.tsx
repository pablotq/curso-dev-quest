import { useEffect, useState } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const ProductCard = () => {
  const [products, SetProducts] = useState<Products[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        SetProducts(data);

      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [])

  if (loading) {
    return <p className="text-white text-2xl">Carregando produtos...</p>
  }

  return (
    <div className="bg-black grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {products.map((product) => (
        <div className="text-white border border-[#ddd] rounded-lg p-3 flex flex-col gap-1" key={product.id} >
          <img className="w-25 h-25 object-contain self-center"
            src={product.image}
            alt={product.title}
          />
          <h2 className="text-l font-semibold text-center">{product.title}</h2>
          <p >Preço: <span className="text-[#6BB27C] font-semibold">R$ {product.price}</span></p>
          <p className="text-sm">Categoria: {product.category}</p>
          <p>⭐ {product.rating.rate} <span className="text-[#999]"> ({product.rating.count} ratings)</span></p>
        </div>

      ))}
    </div>
  )
}

export default ProductCard;