/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouteError } from 'react-router-dom'
import Pagina from '../../components/template/Pagina'

export default function ErroDeRota(props) {
  const erro:any = useRouteError()
  const mensagem = erro.data ? erro.data : erro.message
  return (
    <Pagina titulo='Houve um problema' descricao={mensagem} links={props.links}></Pagina>
  )
}

// O hook useRouteError é utilizado para capturar erros de rota. Ele retorna o erro que foi lançado na rota.
// Para acessar a mensagem do erro de uma response, usamos a propriedade data do erro. "erro.data"
// Para acessar a mensagem do erro de um erro comum, usamos a propriedade message do erro. "erro.message"