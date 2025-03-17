import { Route } from "react-router-dom";
import Produtos from "../pages/parametrosDeBusca/Produtos";
import Produto from "../components/parametrosDeBusca/Produto";

const rotas = (
    <Route path="parametrosDeBusca" element={<Produtos />}>
      <Route path="produto" element={<Produto/>}></Route>
    </Route>
  );

  export default rotas

  // /usuarios/:id -> parametros de rota porque estou acessando um recurso especifico.
  // /usuarios?ordenadosPor=dataDeNascimento -> parametros de busca porque estou filtrando os resultados.

  // /compras/:id?entregues=true&compradosApos=2020 -> É possivel usar parametros de rota e de busca juntos.