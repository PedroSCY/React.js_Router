/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Pagina from '../../components/template/Pagina'
import { Link, useRouteLoaderData } from 'react-router-dom'

export default function Editar() {

  const dados: any = useRouteLoaderData("loaderRotaPai")

  const [nome, setNome] = useState(dados.nome)
  const [idade, setIdade] = useState(dados.idade)

  return (
    <Pagina titulo='Editar'>
      <div className="flex flex-col gap-2 pb-8">
        <label className="-mb-1 text-sm font-medium text-gray-400" htmlFor="nome">Nome:</label>
        <input id="nome" type="text" value={nome} onInput={(e: any) => setNome(e.target.value)} className='p-2 m-2 text-black bg-zinc-200 rounded-md'/>
        
        <label className="-mb-1 text-sm font-medium text-gray-400" htmlFor="idade">Idade:</label>
        <input id="idade" type="number" value={idade} onInput={(e: any) => setIdade(+e.target.value)} className='p-2 m-2 text-black bg-zinc-200 rounded-md'/>
      </div>
        <Link to=".." className='hover:underline hover:text-orange-500'>Voltar</Link>
    </Pagina>
  )
}
