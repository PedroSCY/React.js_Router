import { Route } from "react-router-dom";
import Produtos, { pegarProdutos } from "../pages/entendendoLoaders/produtos";
import VisualizarProduto, { pegarProduto } from "../pages/entendendoLoaders/visualizarProduto";

const rotas = (
    <Route path="entendendoLoaders">
        <Route index loader={pegarProdutos} element={<Produtos/>} />
        <Route path=":id" loader={pegarProduto} element={<VisualizarProduto/>} />
    </Route>
)

export default rotas;

// O conceito de Loaders é muito semelhante ao de Actions, mas é usado pra carregar dados, como requisicoes do tipo get. Com ele executamos uma função de carregamento de dados em paralelo a renderização da pagina, dispensando por exemplo o use de useEffect pra busacar esses dados.
//Alem disso, bossibilita a exibição de um componente de carregamento enquanto os dados não são carregados.
// Para isso, usamos o atributo loader no elemento Route, que recebe uma função que retorna uma Promise, e o elemento que será renderizado enquanto a Promise não for resolvida.