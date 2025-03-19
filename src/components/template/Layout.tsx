/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuPrincipal from "./MenuPrincipal";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Flex from "./Flex";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  titulo?: string;
  subtitulo?: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex h-full w-full
            bg-zinc-900 text-white
        `}
    >
      <MenuPrincipal />
      <Flex col className={`flex-1 p-5`}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>
          <Outlet /> {/* O componente Outlet substitui o seu conteudo pela element da rota aninhada ativa*/}
        </Conteudo>
      </Flex>
    </div>
  );
}
