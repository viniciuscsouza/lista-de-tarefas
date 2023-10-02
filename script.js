function pegarValorDeInputTarefa(){
    const elementoInputTarefa = document.getElementById('input-tarefa')
    const nomeDaTarefa = elementoInputTarefa.value

    if (nomeDaTarefa === "" || nomeDaTarefa === undefined){
        alert('Digite o nome da tarefa!')
    }else{
        elementoInputTarefa.value = ""
        elementoInputTarefa.focus()    
        criaElementoTarefaNaListaDeTarefas(nomeDaTarefa)
    }
}

function criaElementoTarefaNaListaDeTarefas(parametroNomeDaTarefa){
    
    const elementoParagrafoTarefa = document.createElement('p') // Cria isso: <p>"innerText"</p>
    elementoParagrafoTarefa.innerText = parametroNomeDaTarefa
    
    const elementoBotaoEditarTarefa = document.createElement('button')
    elementoBotaoEditarTarefa.innerText = "Editar"
    elementoBotaoEditarTarefa.className = "waves-effect waves-light btn-small"
    elementoBotaoEditarTarefa.addEventListener("click", editaElementoTarefaNaListaDeTarefas)
    
    const elementoBotaoExcluirTarefa = document.createElement('button')
    elementoBotaoExcluirTarefa.innerText = "Excluir"
    elementoBotaoExcluirTarefa.className = "waves-effect waves-light btn-small red darken-2"
    elementoBotaoExcluirTarefa.addEventListener("click", removeElementoTarefaNaListaDeTarefas)
  
    const elementoDivTarefa = document.createElement('div')
    elementoDivTarefa.appendChild(elementoParagrafoTarefa)
    elementoDivTarefa.appendChild(elementoBotaoEditarTarefa)
    elementoDivTarefa.appendChild(elementoBotaoExcluirTarefa)
    
    const elementoDivListaDeTarefas = document.getElementById('div-lista-de-tarefas')
    elementoDivListaDeTarefas.appendChild(elementoDivTarefa)
}

function removeElementoTarefaNaListaDeTarefas(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    botaoQueFoiClicado.parentNode.remove()
}

function editaElementoTarefaNaListaDeTarefas(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    const paragrafoDaTarefa = botaoQueFoiClicado.previousSibling
    const textoInternoDoParagrafo = paragrafoDaTarefa.innerText
    botaoQueFoiClicado.parentNode.remove()
    const elementoInputTarefa = document.getElementById('input-tarefa')
    elementoInputTarefa.value = textoInternoDoParagrafo
}   elementoInputTarefa.focus()