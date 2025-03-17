import { Link, useSearchParams } from "react-router-dom";

export default function Produto() {
  const [params] = useSearchParams();

  const nome = params.get("nome");
  const preco = params.get("preco");

  return (
    <div className="rounded-md p-7">
      <Link
        to=".."
        className={`bg-zinc-400 text-white text-center p-2 m-2 block rounded w-full hover:bg-orange-500`}
      >
        Voltar
      </Link>
      <span className="text-2xl">
        {nome} custa {preco}
      </span>
    </div>
  );
}

/* Para usar parametros de busca que são definidos por "?chave=valor" e dividos por "&" dentro da URL, utilizamos o hook disponibilizados pelo reat-router-dom "useSearchParams* ele não retonar os parametros em si, mas um conjunto de funções que podemos utilizar para acessalos como o get(nomedoparametro) ou o has(nomedorpoduto) pra saber se existe. */
