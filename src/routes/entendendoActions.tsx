import { Route } from "react-router-dom";
import Formulario from "../pages/entendendoActions/Formulario";
import Exibir, {actionFormulario } from "../pages/entendendoActions/Exibir";

const rotas = (
    <Route path="/entendendoActions">
        <Route index element={<Formulario />} />
        <Route path="exibir" action={actionFormulario} element={<Exibir />} />
    </Route>
)

// Movi a action para o Exibir.

export default rotas;

/* Posso esta equivocado, mas pelo que entendi, ao definirmos a rota da action no formulario, fazemos com que a rota definida que no caso é a rota exibir seja chamada ao submeter o formulário. E a função actionFormulario é a função que será chamada ao submeter o formulário, pois é a action defina na rota. 
Isso faz com que o elemento da rota exibir continue sendo exibido, mas a função actionFormulario seja executada em paralelo. */

/* Como eu defini essa rota como uma action, o Form do react-router-dom envia um objeto com um conjunto de props para a função actionFormulario, que sao os dados do formulário, em uma requisição,que podemos usar esses dados para fazer o que quisermos, como enviar para um servidor, salvar no localStorage e etc, parametros e um contexto.  {context,params,request} */

// O request disponibiliza no prototype o metodo assincrono formData que retorna um objeto FormData com os dados do formulário, podemos acessar os dados atravez do metodo get.

/* O React sempre espera um retorno de uma função de action, por isso é necessário retornar props ou qualquer outra coisa, mesmo que não seja necessário. O retorno é armazenado e pode ser acessado atravez do useActionData pelo compenente associado a rota que definimos a action*/