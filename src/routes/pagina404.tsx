import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import Pagina404 from "../pages/shared/pagina404";

const links = [
  { url: "/pagina404", text: "Início" },
  { url: "/pagina404/sobre", text: "Sobre" },
  { url: "/pagina404/inexistente", text: "Inexistente" },
];

const rotas = (
  <Route path="pagina404">
    <Route index element={<Inicio links={links} />} />
    <Route path="sobre" element={<Sobre links={links} />} />
    <Route path="*" element={<Pagina404 links={links} />} />
  </Route>
);

/*  A pagina 404 pode ser definida usando o path="*" e definindo o elemento que sera renderizado. Isso faz com que qualquer rota não definida renderize esse elemento, o qual podemos personalizar para que indique que é a pagina 404 */

export default rotas;
