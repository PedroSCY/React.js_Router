import { useState } from "react";
import Pagina from "../../components/template/Pagina";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import { Form } from "react-router-dom";


export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  return (
    <Pagina titulo="Formulario - Entendendo Actions">
      <Form method="post" action="/entendendoActions/exibir" className="flex flex-col justify-center text-xl text-center">
        <CorpoFormulario
          nome={nome}
          setNome={setNome}
          idade={idade}
          setIdade={setIdade}
        />
      </Form>
    </Pagina>
  );
}


/* O Form disponilizado pelo react-router-dom que facilita a manipulação de formulários e a criação de actions, que são funções que podem ser chamadas para manipular o estado do formulário. Com ele não é necessario usar o preventDefault para evitar o recarregamento da página ao submeter o formulário, pois ele já faz isso automaticamente.
Ao invez de usar o onSubmit, usamos o action para definir a rota que será chamada ao submeter o formulário. Nesse caso, a rota /entendendoActions/exibir. A partir daqui entendo que a action é o que o proprio nome diz, uma ação que será executada ao submeter o formulário. E essa ação é identificada por uam rota que será chamada. */

