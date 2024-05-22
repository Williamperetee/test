import { useState } from "react";
import { Filme } from "../../App";

//Recebe a lista de filmes via props em uma interface
interface FormularioPros {
    aoSubmeter: (filme: Filme) => void
}

export const Formulario = ({ aoSubmeter }: FormularioPros) => {

    //Uso do hook useState para alterar o estado da aplicação
    //Uso do hook useState para alterar o estado da lista
    const [filme, setFilme] = useState<Filme>({ nome: "", anoDeLancamento: "" })

    //Função que adiciona filmes à lista
    function adicionarFilme(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        aoSubmeter(filme)
    }

    //Variável aplicada ao botão para verificar se está desabilitado ou habilitado
    const podeAdicionar = filme.nome && filme.anoDeLancamento;

    return (
        <form onSubmit={adicionarFilme}>
            <input
                type="text"
                placeholder="Insira o nome do filme"
                value={filme.nome}
                onChange={evento => setFilme({ ...filme, nome: evento.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Digite o ano de lançamento"
                value={filme.anoDeLancamento}
                onChange={evento => setFilme({ ...filme, anoDeLancamento: evento.target.value })}
                required
            />
            <button
                disabled={!podeAdicionar}
                type="submit"
            >
                Adicionar
            </button>
        </form>
    )
}