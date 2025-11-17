import { useParams } from "react-router-dom"
import { products } from "../../mocks/products";

export const ProductDetail = () => {
    const { id } = useParams();

    const productDetail = products.find(product => product.id === Number(id))


    return (
        <>
            <h2>Detalhes do Produto</h2>

            <div className='product-card'>
                <img src={productDetail?.image} alt={productDetail?.name} />
                <div className="product-info">
                    <h3>{productDetail?.name}</h3>
                    <p className='product-price'>
                        R$ {productDetail?.price},00
                    </p>
                    <button type='button'>Adicionar ao carrinho</button>
                </div>
            </div>
        </>
    )
}
