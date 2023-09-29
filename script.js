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
    
    const elementoBotaoExcluirTarefa = document.createElement('button')
    elementoBotaoExcluirTarefa.innerText = "Excluir"
    elementoBotaoExcluirTarefa.addEventListener("click", removeElementoTarefaNaListaDeTarefas)
  
    const elementoDivTarefa = document.createElement('div')
    elementoDivTarefa.appendChild(elementoParagrafoTarefa)
    elementoDivTarefa.appendChild(elementoBotaoEditarTarefa)
    elementoDivTarefa.appendChild(elementoBotaoExcluirTarefa)
    
    // Valor armazenado na constante elementoDivTarefa:
    // <div>                            <---- Elemento PAI
    //     <p>nome da tarefa</p>        <---- Elemento FILHO
    //     <button>Editar</button>      <---- Elemento FILHO
    //     <button>Excluir</button>     <---- Elemento FILHO
    // <div>

    const elementoDivListaDeTarefas = document.getElementById('div-lista-de-tarefas')
    elementoDivListaDeTarefas.appendChild(elementoDivTarefa)
}

function removeElementoTarefaNaListaDeTarefas(objetoDeEventos){
    const botaoQueFoiClicado = objetoDeEventos.target
    botaoQueFoiClicado.parentNode.remove()
}