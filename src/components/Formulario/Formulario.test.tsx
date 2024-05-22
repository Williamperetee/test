import { render } from "@testing-library/react"
import { Formulario } from "./Formulario"
import userEvent from "@testing-library/user-event"

describe("no formulário", () => {
    const mockAoSubmeter = jest.fn();

    test('se os campos estiverem vazios, o botão deve estar desabilitado', () => {

        //ARRANGE - organiza os elementos em variáveis

        //Importa as funções e renderiza o componente Formulario
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter} />)

        //Busca os inputs pelo texto no placeholder
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')

        //Buscao botão pela função
        const botaoAdicionar = getByRole('button');

        //ASSERT - cria hipóteses para serem testadas   

        //Verifica se os elementos estão na página
        expect(inputNome).toBeInTheDocument()
        expect(inputAnoDeLancamento).toBeInTheDocument()

        //Verifica se o botão está desabilitado
        expect(botaoAdicionar).toBeDisabled()
    })

    test('se os inputs estiverem vazios, o botão deve estar habilitado', async () => {
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter} />)

        //ARRANGE - organiza os elementos em variáveis
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button');

        //ACT - simula a execução de ações

        //Simula de forma assíncrona a inserção de text dentro do input
        await userEvent.type(inputNome, 'Interestelar')
        await userEvent.type(inputAnoDeLancamento, '2014')

        //Simula de forma assíncrona o evento de click
        await userEvent.click(botaoAdicionar)

        //ASSERT - cria hipóteses para serem testadas

        //Verifica se o botão está habilitado
        expect(botaoAdicionar).toBeEnabled()
    })
})