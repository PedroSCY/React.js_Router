import { Route } from "react-router-dom";
import Consulta, { loaderConsulta } from "../pages/entendendoLoaderComResponse/consulta";

const rotas = (
    <Route path="entendendoLoadersComResponse">
        <Route index loader={loaderConsulta} element={<Consulta/>}/>
    </Route>
)

export default rotas;