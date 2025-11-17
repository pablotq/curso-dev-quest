import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { products } from "../mocks/products";
import { ProductDetail } from "../pages/ProductDetail";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}> {/*//! faz o agrupamento de todas as rotas existentes  definidas no Layout.tsx*/}

            {/* index indica que a rota padrão quando acessamos "/" na url */}
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products products={products} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
        </Routes>
    )
}