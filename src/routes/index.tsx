import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../components/template/Layout";
import rotasTiposDeLinks from "./tiposDeLinks";
import rotasNavegacaoComNavLink from "./navegacaoComNavLink";
import rotasPagina404 from "./pagina404";
import Pagina404 from "../pages/shared/pagina404";
import rotasParametrosDeRotas from "../routes/parametrosDeRota";
import rotasParamentrosDeBusca from "../routes/parametrosDeBusca";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {rotasTiposDeLinks},{rotasNavegacaoComNavLink},{rotasPagina404},
      {rotasParametrosDeRotas}, {rotasParamentrosDeBusca}
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

export default router;
