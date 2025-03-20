import { Route } from "react-router-dom";
import ProdutosCarregamento, {
  pegarProdutos,
} from "../pages/adicionandoCarregamento/produtosCarregamento";

const rotas = (
  <Route
    path="adicionandoCarregamento"
    element={<ProdutosCarregamento />}
    loader={pegarProdutos}
  />
);

export default rotas;
