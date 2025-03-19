import { Link, useRouteLoaderData } from 'react-router-dom'
import Pagina from '../../components/template/Pagina'

export default function Exibir() {
    const dados = useRouteLoaderData("loaderRotaPai")
    // console.log(dados)
    const desc = `${dados.nome} tem ${dados.idade} anos.`
  return (
    <Pagina titulo='Exibir' descricao={desc}>
        <Link to="/usandoLoaderDeOutraRota/editar" className='hover:underline hover:text-orange-500'>Editar</Link>
    </Pagina>
  )
}

// O useLoaderData recupera os dados da rota atual, então pra recuperar os dados de outra rota, é necessário usar o useRouteLoaderData, passando o id da rota pai como parâmetro, e sim é necessario passar o id da rota pai, pois o useRouteLoaderData precisa saber de qual rota pai ele deve recuperar os dados.