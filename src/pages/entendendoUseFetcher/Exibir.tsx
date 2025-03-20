import { useActionData } from 'react-router-dom'
import Pagina from '../../components/template/Pagina'


export default function Exibir() {
    const {ok, nome, idade} = useActionData()
  return (
    <Pagina titulo='Dados inseridos no formulário'>
      {ok ? (
        <p className='text-xl my-10'>{nome} tem {idade} anos</p>
      ) : (
        <p className='text-xl my-10'>Houve um problema.</p>
      )}
    </Pagina>
  )
}

// Aqui eu uso o useActionData para acessar os dados que foram retornados pela função actionFormulario, que foi chamada ao submeter o formulário. E esses dados são exibidos na tela.

//************************************************************************ */

export async function actionFormulario({request}) {
  const dadosFormulario = await request.formData();
  const dadosParaSalvar = {nome: dadosFormulario.get("nome"), idade: dadosFormulario.get("idade")};
  const resposta = salvar(dadosParaSalvar)
  return resposta;
}

function salvar(dados) {
  // Simulando uma persistência de dados
  const dadosFinais = {nome: dados.nome? dados.nome : "Desconhecido", idade: dados.idade};
  return {ok: true, ...dadosFinais}
}