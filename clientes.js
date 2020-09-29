const informacoesClientes = [
    {
        cpf: "111222333-01", 
        nome: "Vânia",
    }
]

const conteudoLinha =  `
<tr>
<td>${informacoesClientes[0].cpf}</td>
<td>${informacoesClientes[0].nome}</td>
<td></td>
</tr>
`

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

corpoTabela.innerHTML = conteudoLinha;