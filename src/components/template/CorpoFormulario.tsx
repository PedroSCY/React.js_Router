/* eslint-disable @typescript-eslint/no-explicit-any */

interface CorpoFormularioProps {
    nome: string;
    setNome: (s: string) => any;
    idade: number;
    setIdade: (n: number) => any;
}

export default function CorpoFormulario(props: CorpoFormularioProps) {
    return (
        <>
            <label htmlFor="nome" className="mt-5 mb-2">
                Qual o seu nome?
            </label>
            <input
                type="text"
                name="nome"
                value={props.nome}
                onChange={(e) => props.setNome(e.target.value)}
                className="p-2 text-center text-black bg-zinc-200 rounded-md"
            />
            <label htmlFor="idade" className="mt-5 mb-2">
                Quantos anos você tem?
            </label>
            <input
                type="number"
                name="idade"
                value={props.idade}
                onChange={(e) => props.setIdade(+e.target.value)}
                className="p-2 text-center text-black bg-zinc-200 rounded-md"
            />
            <button
                className={`bg-zinc-700 mt-6 p-2 rounded-md 
                    hover:bg-orange-700 hover:text-white`}
                type="submit"
            >
                Enviar
            </button>
        </>
    );
}
