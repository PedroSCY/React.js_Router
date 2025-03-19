import Pagina from "../../components/template/Pagina";
import { useLoaderData } from "react-router-dom";

export default function Consulta() {
  const info = useLoaderData();

  return (
    <Pagina titulo="Resultado da consulta">
      <strong>{info.title}</strong>
    </Pagina>
  );
}

export async function loaderConsulta() {
    const resposta =  await fetch(`https://fakestoreapi.com/products/1`)

    // const resp = new Response("olá da response", {
    //     status: 200})
    
    // throw new Response("Houve um problema")

    return resposta;
}


// Response é uma "Resposta", geralmente usada para representar a resposta de um servidor a uma solicitação. Ela é um objeto que contem além do seu conteudo (O que você foi buscar) informações sobre a solicitação (status, headers, etc). 
// É possivel criar responses customizadas, que podemos usar por exemplo para validar dados da resposta de uma requisição. 