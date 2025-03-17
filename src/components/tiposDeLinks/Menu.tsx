import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
    const  formatacao = `text-lg font-bold text-zinc-300 py-2 px-4 mx-4 rounded-md hover:bg-zinc-800 hover:text-orange-500`;
  return (
    <nav className='mb-6 flex'>
        <a className={formatacao} href='/tiposDeLinks'>Inicio - a</a>
        <Link className={formatacao} to='/tiposDeLinks/sobre'>Sobre - Link</Link>
        <NavLink  className={formatacao}to='/tiposDeLinks/contato'>Contato - NavLink</NavLink>
    </nav>
  )
}


/* A diferença entre as tags a, Link e NavLink é que a tag a é um link comum, o Link é um link que não recarrega a página e o NavLink é um link que não recarrega a página e que pode ser estilizado de acordo com o estado do link, como por exemplo, quando o link está ativo.
*/