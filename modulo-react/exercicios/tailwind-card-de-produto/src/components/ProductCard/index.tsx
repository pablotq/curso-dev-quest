
interface ProductCardProps{
    name: string;
    price: number | string;
    color: string;
    size: "PP" | "P" | "M" | "G" | "GG";
    image: string;
}

const ProductCard = ({name, price, color, size, image}: ProductCardProps) => {
    return(
        <div className="text-white max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img src={image} alt={name} />

          <div className="py-10 px-5 flex flex-col gap-4 bg-[#130234]">
            <p className="text-xl">{name}</p>
            <p>Cor: {color}</p>
            <p>Tamanho: {size}</p>
            <p className="text-[#6BB27C] self-end text-xl font-semibold">R$ {price}</p>
            <button className="bg-purple-600 py-3 rounded hover:bg-purple-700 cursor-pointer">Adicionar ao carrinho</button>
          </div>
        </div>
    )
}

export default ProductCard;