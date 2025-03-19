import Pagina from "../../components/template/Pagina";
import { Link, useLoaderData } from "react-router-dom";

export default function VisualizarProduto() {


    const {title, description, price} = useLoaderData()

  return (
    <Pagina titulo={title}>
      <p className="w-full m-2 text-center overflow-x-auto max-h-48">
        {description}
      </p>
      <p className="font-semibold text-center m-2">R${price}</p>
      <button
        className={`bg-zinc-700 text-white p2 w-full rounded-md hover:bg-orange-500`}
      >
        <Link to="..">Voltar</Link>
      </button>
    </Pagina>
  );
}

export async function pegarProduto({params}) {
  return await fetch(`https://fakestoreapi.com/products/${params.id}`)
}

// Aqui me perguntei como passaria os parametros para o loader, dai lembrei que tanto o loader quando a action recebem um objeto com informações, uma delas é o params que contem os parametros da rota.
// Dessa forma eu dispenso mais uma vez o uso de hooks como useParams, e useEffect.
