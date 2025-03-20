import { IconActivity, IconClock, IconDirectionSign, IconExchange, IconFileAlert, IconLayoutNavbarCollapse, IconLoader, IconLocation, IconMenu, IconRefreshAlert, IconRoute, IconRouteOff, IconSearch, IconShare, IconX } from "@tabler/icons-react";
import { MenuItem } from "../../data/models/MenuItem";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import Flex from "./Flex";
import { useState } from "react";

const itens: MenuItem[] = [
    {titulo: "Tipos de Links", url:"/tiposDeLinks", icone:<IconLayoutNavbarCollapse/>},
    {titulo: "Navegação com NavLink", url:"/navegacaoComNavLink", icone:<IconDirectionSign/>},
    {titulo: "Página 404", url:"/pagina404", icone:<IconFileAlert/>},
    {titulo: "Parâmetros de Rota", url:"/parametrosDeRota", icone:<IconRoute/>},
    {titulo: "Parâmetros de Busca", url:"/parametrosDeBusca", icone:<IconSearch/>},
    {titulo: "Entendendo useLocation", url:"/entendendoUseLocation", icone:<IconLocation/>},
    {titulo: "Entendendo Actions", url:"/entendendoActions", icone:<IconActivity/>},
    {titulo: "Entendendo Loaders", url:"/entendendoLoaders", icone:<IconLoader/>},
    {titulo: "Lidando Com erros do Loader", url:"/lidandoComErrosDoLoader", icone:<IconRefreshAlert/>},
    {titulo: "Entendendo Loaders Com Response", url:"/entendendoLoadersComResponse", icone:<IconRefreshAlert/>},
    {titulo: "Entendendo UseRouteError", url:"/entendendoUseRouteError", icone:<IconRouteOff/>},
    {titulo: "Usando Loader de Outra Rota", url:"/usandoLoaderDeOutraRota", icone:<IconShare/>},
    {titulo: "Adicionando Carregamento", url:"/adicionandoCarregamento", icone:<IconClock/>},
    {titulo: "Entendendo useFetcher", url:"/entendendoUseFetcher", icone:<IconExchange/>},
];

export default function MenuPrincipal() {
    const [mini, setMini] = useState(false);

    function renderizarItens() {
        return itens.map((item: MenuItem) => (
            <MenuPrincipalItem key={item.titulo} icone={item.icone} titulo={item.titulo} url={item.url} mini={mini} />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={() => setMini(!mini)}>
                    {mini ? <IconMenu /> : <IconX />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarItens()}</nav>
        </aside>
    );
}
