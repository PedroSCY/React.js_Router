/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route } from "react-router-dom";
import Exibir from "../pages/usandoLoaderDeOutraRota/exibir";
import Editar from "../pages/usandoLoaderDeOutraRota/editar";

function dadosLoader() {
    return Response.json({nome: "Pedro", idade: 24} as any, {status: 200});
}

const rotas = (
    <Route path="usandoLoaderDeOutraRota" id="loaderRotaPai" loader={dadosLoader}>
        <Route index element={<Exibir/>}/>
        <Route path="editar" element={<Editar/>}/>
    </Route>
)

export default rotas;

// O Response.json é usado para criar um objeto de resposta com um corpo JSON. Ele basicamente resume o que seria feito com o new response e depois o response.json().