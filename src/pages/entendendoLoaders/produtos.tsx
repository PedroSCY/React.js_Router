/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import { Link, useLoaderData} from "react-router-dom";

export default function Produtos() {
  //   const [produtos, setProdutos] = useState<any>([]);

  //   useEffect(() => {
  //     (async () => {
  //       const produtosAPI = await pegarProdutos();
  //       setProdutos(produtosAPI);
  //     })();
  //   }, []);

  const produtos: any = useLoaderData();

  const produtosEmItens = produtos.map((produto) => {
    return (
      <li
        className={` text-gray-300 text-center border-gray-300 border-solid border-2 rounded-md p-3 m-2 hover:text-orange-500 hover:border-orange-500`}
      >
        <Link to={`/entendendoLoaders/${produto.id}`}>
          O produto {produto.id} de nome {produto.title} cusata R${" "}
          {produto.price}
        </Link>
      </li>
    );
  });

  return (
    <Pagina titulo="Produtos Disponiveis">
      <ul className="p-0 overflow-clip">{produtosEmItens}</ul>
    </Pagina>
  );
}

export async function pegarProdutos() {
  return await fetch("https://fakestoreapi.com/products?limit=10");
}

// Ao invez do useActions, usamos o useLoaderData, que retorna os dados carregados pela função loader, que é passada como atributo no elemento Route.
