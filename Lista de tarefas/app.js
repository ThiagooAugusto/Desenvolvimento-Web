var inputTarefa = document.getElementById('tarefaInput');
var listaTarefas = document.getElementById('listaTarefas');

//pegar tarefas do banco ou criar array
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

carregarTarefas();

function adicionarTarefa(){
    var textoTarefa = inputTarefa.value.trim();

    if(textoTarefa === ''){
        alert('Digite algo!');
        return;
    }

    var tarefa = {texto: textoTarefa, estado: false};
    tarefas.push(tarefa);
    carregarTarefas();
    salvarTarefas();
    inputTarefa.value = '';
}

function carregarTarefas(){
    listaTarefas.innerHTML = '';
    tarefas.forEach(function(tarefa,index){
        var li = document.createElement("li");
        li.innerText = tarefa.texto;
        li.className = 'list-group-item';

        if(tarefa.estado){
            li.className += " completado";
        }

        li.addEventListener("click",function(){
            mudaEstado(index);
        });

        listaTarefas.appendChild(li);
    });
}

function mudaEstado(index){
    tarefas[index].estado = !tarefas[index].estado;
    carregarTarefas();
    salvarTarefas();
}

//salvar tarefas no banco de dados
function salvarTarefas(){
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}

