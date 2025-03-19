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
import rotasParametrosDeRotas from "./parametrosDeRota";
import rotasParamentrosDeBusca from "./parametrosDeBusca";
import rotasEntendendoUseLocation from "./entendendoUseLocation";
import rotasEntendendoActions from "./entendendoActions";
import rotasEntendendoLoaders from "./entendendoLoaders"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {rotasTiposDeLinks}
      {rotasNavegacaoComNavLink}
      {rotasPagina404}
      {rotasParametrosDeRotas}
      {rotasParamentrosDeBusca}
      {rotasEntendendoUseLocation}
      {rotasEntendendoActions}
      {rotasEntendendoLoaders}
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

export default router;
