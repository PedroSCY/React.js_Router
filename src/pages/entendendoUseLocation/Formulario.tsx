import { useState } from "react";
import Pagina from "../../components/template/Pagina";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  const navigate = useNavigate()

  function envia(e) {
    e.preventDefault();
    navigate("/entendendoUseLocation/exibir", { state: { nome: nome ? nome : "desconhecido", idade } });
  }


  return (
    <Pagina titulo="Formulario - useLocation">
      <form method="post" onSubmit={envia} className="flex flex-col justify-center text-xl text-center">
        <CorpoFormulario
          nome={nome}
          setNome={setNome}
          idade={idade}
          setIdade={setIdade}
        />
      </form>
    </Pagina>
  );
}

/* O useLocation é um hook do React Router que retorna um objeto com informações sobre a localização atual. Ele pode ser usado para pegar informações da URL atual, como o pathname, search e hash, mas o mais interessante é que ele pode ser usado para pegar informações passadas por meio do useNavigate.
Usando o useNavigate, podemos passar informações para a próxima rota, como o nome e a idade, que são passados para a rota /entendendoUseLocation/exibir, e depois recuperados por meio do useLocation, já que essas informações ficam disponíveis no objeto location.state. */

/*  O useNavigate é um hook do React Router que retorna uma função que pode ser usada para navegar para uma nova rota, meio que de forma forçada.*/
