import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import CorpoFormulario from "../../components/template/CorpoFormulario";
import { useFetcher } from "react-router-dom";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  console.log(fetcher);

  useEffect(() => {
    if (state !== "idle" && data) {
      window.alert(`${data.nome} tem ${data.idade} anos`);
    }
  }, [data, state]);

  return (
    <Pagina titulo="Formulario - Entendendo useFetcher">
      <fetcher.Form
        method="post"
        action="/entendendoUseFetcher/exibir"
        className="flex flex-col justify-center text-xl text-center"
      >
        <CorpoFormulario
          nome={nome}
          setNome={setNome}
          idade={idade}
          setIdade={setIdade}
        />
      </fetcher.Form>
    </Pagina>
  );
}

//Diferente o Form que recebemos do react-router-dom, o useFetcher.Form do hook useFetcher possibilita a execução de actions de uma determinada rota sem fazer o redirecionamento de paginas.
