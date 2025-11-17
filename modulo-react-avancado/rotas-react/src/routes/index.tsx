import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout/>}> {/*//! faz o agrupamento de todas as rotas existentes  definidas no Layout.tsx*/}

            {/* index indica que a rota padrão quando acessamos "/" na url */}
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}