import { Route } from "react-router-dom";
import Produtos from "../pages/parametrosDeRota/Produtos";
import Produto from "../components/parametrosDeRota/Produto";

const rotas = (
  <Route path="parametrosDeRota" element={<Produtos />}>
    <Route path=":nome/:preco" element={<Produto/>}></Route>
  </Route>
);

/* É possivel usar parametros atravez da URL, usando ":" antes de nomear o parametro. os tornando dinamicos. E posteriormente regatamos seus valores atravez do hook useParams */

export default rotas;
