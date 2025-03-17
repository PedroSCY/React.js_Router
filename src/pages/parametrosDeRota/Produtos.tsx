import { Link, Outlet } from "react-router-dom";
import Pagina from "../../components/template/Pagina";

export default function Produtos() {
  return (
    <Pagina
      titulo="Produtos"
      descricao="Produtos disponíveis"
      className="justify-between"
    >
      <ul className="m-2 mb-4 list-disc">
        <li><Link to="/parametrosDeRota/Caderno/19.99" className="hover:underline">Caderno</Link></li>
        <li><Link to="/parametrosDeRota/Lapis/1.99" className="hover:underline">Lápis</Link></li>
        <li><Link to="/parametrosDeRota/Borracha/3.50" className="hover:underline">Borracha</Link></li>
      </ul>
      <Outlet/>
    </Pagina>
  );
}


/* Aqui passei as informações dos produtos diretamente pela URL */