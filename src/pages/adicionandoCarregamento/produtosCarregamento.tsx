/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
import Pagina from "../../components/template/Pagina";
import { Await, useLoaderData } from "react-router-dom";
import { IconLoader2 } from "@tabler/icons-react";
import { Suspense } from "react";

export default function ProdutosCarregamento() {
  const {produtos} = useLoaderData() 
  // console.log(produtos)

  const produtosEmItens = (p: any) =>
    p.map((produto) => {
      return (
        <li
          className={` text-gray-300 text-center border-gray-300 border-solid border-2 rounded-md p-3 m-2 hover:text-orange-500 hover:border-orange-500`}
          key={produto.id}
        >
          O produto {produto.id} de nome {produto.title} custa R$ {produto.price}
        </li>
      );
    });

  return (
    <Pagina titulo="Produtos Disponiveis">
      <ul className="p-0 overflow-clip">
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center text-xl">
              <IconLoader2 className="animate-spin" />
              Carregando...
            </div>
          }
        >
          <Await resolve={produtos}>
            {produtosEmItens}
          </Await>
        </Suspense>
      </ul>
    </Pagina>
  );
}

export async function pegarProdutos() {
  return {
    produtos: fetch("https://fakestoreapi.com/products?limit=10").then((res) =>
      res.json()
    ),
  };
}

/* Pra fazer com que o componente não espera o carregamento dos produtos para ser renderizado,renderizamos um componente do loading, pra fazer isso usamos o componente Suspense do react, que recebe uma propriedade chamada fallback, que é o componente que será renderizado enquanto o componente Await não for resolvido. e dentro do sustepense, usamos o componente Await, que recebe uma propriedade chamada resolve, que é a função que será chamada para resolver o componente, e dentro do componente Await, passamos uma função que recebe os dados que a função resolve retornou, e renderizamos o componente que queremos renderizar com os dados que a função resolve retornou.*/

// O pegarProdutos esta retornando uma promisse dentro de um objeto para que o Route não tente resolver a promisse, dessa forma ela será resolvida pelo Await, isso serve pra que eu possa ver o componente de carregamento funcionando. (TEMPORARIO)
