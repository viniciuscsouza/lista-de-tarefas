// SELECIONA OS SELETORES

function pegarInput(){
    // Acessa classe document e busca elemento pelo id
    var inputElement = document.getElementById("input-produto")
    // Imprime o valor do elemento encontrado
    console.log(inputElement.value)
    // Cria linha produto
    criaLinhaProduto(inputElement.value)
    // Apaga o valor do elemento encontrado
    inputElement.value = ''
    // Move o foco para o elemento encontrado
    inputElement.focus()
}

// MANIPULAÇÃO DO DOM

function criaLinhaProduto(nomeDoProduto){
    // Cria elemento linha com todos os elementos internos
    var linhaProduto = document.createElement('tr')
    
    var celulaProdutoNumero = document.createElement('td')
    celulaProdutoNumero.innerText = Math.floor(Math.random() * 100000)

    var celulaProdutoItem = document.createElement('td')
    var celulaProdutoEditar = document.createElement('td')
    
    var botaoEditar = document.createElement('button')
    botaoEditar.type = "button"
    botaoEditar.className = "btn"
    botaoEditar.addEventListener('click', editaProduto)

    var iconeEditar = document.createElement('span')
    iconeEditar.className = "material-icons"
    iconeEditar.innerText = "mode_edit"
    
    var celulaProdutoExcluir = document.createElement('td')
    
    var botaoExcluir = document.createElement('button')
    botaoExcluir.type = "button"
    botaoExcluir.className = "btn"

    var iconeExcluir = document.createElement('span')
    iconeExcluir.className = "material-icons"
    iconeExcluir.innerText = "delete"

    // TODO - implementar sequência numeração item
    // celulaProdutoNumero

    // Adiciona valor na celula item
    celulaProdutoItem.innerHTML = nomeDoProduto

    // ------------INICIO CÉLULA EDITAR -----------------//
    // Anexa o ícone editar ao elemento botão editar
    botaoEditar.appendChild(iconeEditar)
    // Anexa o botão editar ao elemento célula editar
    celulaProdutoEditar.appendChild(botaoEditar)
    // ------------  FIM CÉLULA EDITAR  -----------------//

    // ------------INICIO CÉLULA EXCLUIR -----------------//
    // Anexa o ícone excluir ao elemento botão excluir
    botaoExcluir.appendChild(iconeExcluir)
    // Anexa o botão excluir ao elemento célula excluir
    celulaProdutoExcluir.appendChild(botaoExcluir)
    // ------------  FIM CÉLULA EXCLUIR  -----------------//

    // Anexa todas as células ao elemento linha
    linhaProduto.appendChild(celulaProdutoNumero)
    linhaProduto.appendChild(celulaProdutoItem)
    linhaProduto.appendChild(celulaProdutoEditar)
    linhaProduto.appendChild(celulaProdutoExcluir)

    // Buscar o tbody
    var elementoTBody = document.getElementById('registro-produto')
    // Anexa a linha produto ao tbody
    elementoTBody.appendChild(linhaProduto)
}

// EVENTOS

function editaProduto(objetoDeEventos){
    var elementoButtonOrSpan = objetoDeEventos.target
    var elementoTd

    if (elementoButtonOrSpan.tagName === 'BUTTON'){
        elementoTd = elementoButtonOrSpan.parentNode
    }else{
        elementoTd = elementoButtonOrSpan.parentNode.parentNode
    }

    var elementoTdPreviousSibling = elementoTd.previousSibling
    var elementoInput = criaEntradaDeTexto(elementoTdPreviousSibling.innerText)
    
    elementoTdPreviousSibling.innerText = ''
    elementoTdPreviousSibling.appendChild(elementoInput)

}

function criaEntradaDeTexto(textoAtual){
    var container = document.createElement('div')
    var entradaDeTexto = document.createElement('input')
    entradaDeTexto.value = textoAtual
    var botaoConfirmar = document.createElement('button')
    botaoConfirmar.innerText = '✔️'
    var botaoCancelar = document.createElement('button')
    botaoCancelar.innerText = '❌'

    container.appendChild(entradaDeTexto)
    container.appendChild(botaoConfirmar)
    container.appendChild(botaoCancelar)

    return container
}