import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import Contato from "../pages/shared/contato";
import MenuTiposDeLink from "../components/tiposDeLinks/Menu";

const rotas = (
  <Route path="tiposDeLinks">
    <Route index element={<Inicio menu={<MenuTiposDeLink />} />} />
    <Route path="sobre" element={<Sobre menu={<MenuTiposDeLink />} />} />
    <Route path="contato" element={<Contato menu={<MenuTiposDeLink />} />} />
  </Route>
);

export default rotas;
