import { Route } from "react-router-dom";
import Inicio from "../pages/shared/inicio";
import Sobre from "../pages/shared/sobre";
import ErroDoLoader from "../pages/lidandoComErrosDoLoader/erroDoLoader";

const links = [
  { url: "/lidandoComErrosDoLoader", text: "Início" },
  { url: "/lidandoComErrosDoLoader/sobre", text: "Sobre" },
];

const rotas = (
  <Route path="lidandoComErrosDoLoader" errorElement={<ErroDoLoader texto="Algo de errado não está certo" links={links}/>}>
    <Route
      index
      element={<Inicio links={links} />}
    //   errorElement={<ErroDoLoader texto="Não foi possivel acessar Início" links={links}/>}
      loader={() => {
        throw new Error("Deu ruin");
      }}
    />
    <Route
      path="sobre"
      element={<Sobre links={links} />}
      errorElement={<ErroDoLoader texto="Não foi possivel acessar Sobre" links={links}/>}
      loader={() => {
        throw new Error("Deu ruin");
      }}
    />
  </Route>
);

export default rotas;


// Pra evitar a quebra de usabilidade ao se depara com um erro de loader, podemos substituir o loader por um errorElement que é um componente que será renderizado caso ocorra um erro no loader. Podemos defini um errorElement para cada rota especifica ou generalizar para todas as rotas filhas de um Route.