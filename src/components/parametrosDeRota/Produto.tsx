import { Link, useParams } from "react-router-dom";

export default function Produto() {

    const {nome, preco} = useParams()

  return (
    <div className="rounded-md p-7">
      <Link
        to=".."
        className={`bg-zinc-400 text-white text-center p-2 m-2 block rounded w-full hover:bg-orange-500`}
      >
        Voltar
      </Link>
      <span className="text-2xl">{nome} custa {preco}</span>
    </div>
  );
}

/* No produto eu extraio as informações na url com o hook useParams */
/* Tambem é possivel voltar ao ultimo modulo da URL semelhante ao terminal com dois pontos ".." */
