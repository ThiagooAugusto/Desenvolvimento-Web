// DOM CACHING
const buttonModalCompra = document.getElementById('modal-compra');
const buttonModalBaixa = document.getElementById('modal-baixa');
const buttonModalPerda = document.getElementById('modal-perda');
const buttonModalEditar = document.getElementById('modal-editar');

const tabelaCompra = document.getElementById('tabelaCompra');
const tabelaBaixa = document.getElementById('tabelaBaixa');
const tabelaPerda = document.getElementById('tabelaPerda');

let compraField = document.getElementById("compraField");
let valor_compra_Field = document.getElementById("valor_compra_Field");
let data_compra_Field = document.getElementById("data_compra_Field");

let baixaField = document.getElementById("baixaField");
let valor_baixa_Field = document.getElementById("valor_baixa_Field");
let data_baixa_Field = document.getElementById("data_baixa_Field");

let perdaField = document.getElementById("perdaField");
let valor_perda_Field = document.getElementById("valor_perda_Field");
let data_perda_Field = document.getElementById("data_perda_Field");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

// const botaoCompra = document.getElementById('botaoCompra');
// const botaoBaixa = document.getElementById('botaoBaixa');
// const botaoPerda = document.getElementById('botaoPerda');


// REGEX
const dateCheck = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const moneyCheck = /^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/g;



function addRow(tabela, input1, input2, input3) {
    let row = tabela.insertRow();
    row.id = "newTr";

    const parent = document.getElementById("newTr");
    parent.appendChild(document.createElement("th"));
    
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);

    cell4.className = "td-default";
    cell4.id = "pai";
    const celulaPAI = document.getElementById("pai");

    
    cell1.id = 'compra';
    cell2.id = 'valor';
    cell3.id = 'data';

    cell1 = document.getElementById('compra');
    cell2 = document.getElementById('valor');
    cell3 = document.getElementById('data');

    cell1.textContent = input1;
    cell2.textContent = input2;
    cell3.textContent = input3;

    cell1.removeAttribute('id');
    cell2.removeAttribute('id');
    cell3.removeAttribute('id');
    row.removeAttribute('id');

    addButtons(celulaPAI);
}

function addButtons(id) {
    let i = Math.random() * 100;
    let novoHtml = `<button class='btn btn-primary btn-sm' id='editar ${i}' data-toggle="modal" data-target="#modal4" onclick='returnDOM (${i})' title='Editar' ><i class='fas fas fa-edit'></i></button><button class='btn btn-danger btn-sm btn-delete' id='deletar ${i}' onclick='exclui(${i})' title='Excluir' ><i class='fas fa-trash'></i></button>`;
    id.innerHTML = novoHtml;
    id.removeAttribute('id'); 
}

function validateInputs(input1, input2, input3) {
    if (input1.length < 1 || input2.length < 1) {
        console.log(input1,input2,input3);
        alert('Todos os campos devem ser preenchidos!');
       return false;
    } else if (!input3.match(dateCheck)) {
        alert('O campo data não está no formato válido: DD/MM/AAAA');
        return false;
    } else if (!input2.match(moneyCheck)) {
        alert('O campo valor não está no formato válido: R$XXXX,XX ou R$XXX.XXX,XX');
        return false;
    } else return true;
}

function exclui(i) {
    let element = document.getElementById(`deletar ${i}`);
    let parent = element.parentNode;
    let row = parent.parentNode;
    row.remove();
}

let dom;
function returnDOM(i) {
    let element = document.getElementById(`editar ${i}`);
    dom = element;
}

function editar() {
    let parent = dom.parentNode;
    let row = parent.parentNode;
    let cells = row.childNodes;
    editarModal(cells);
}

function editarModal(cells) {
    let validacao = validateInputs(input1.value, input2.value, input3.value);
    if (validacao) {
        cells[1].textContent = input1.value;
        cells[2].textContent = input2.value;
        cells[3].textContent = input3.value;
        buttonModalEditar.setAttribute('data-dimiss', 'modal');
    }
}

function compra() {
    let validacao = validateInputs(compraField.value, valor_compra_Field.value, data_compra_Field.value);
    if (validacao) {
        addRow(tabelaCompra, compraField.value, valor_compra_Field.value, data_compra_Field.value);
        buttonModalCompra.setAttribute('data-dismiss','modal');
    }
}

function baixa() {
    let validacao = validateInputs(baixaField.value, valor_baixa_Field.value, data_baixa_Field.value);
    if (validacao) {
        addRow(tabelaBaixa, baixaField.value, valor_baixa_Field.value, data_baixa_Field.value);
        buttonModalBaixa.setAttribute('data-dismiss','modal');
    }
}

function perda() {
    let validacao = validateInputs(perdaField.value, valor_perda_Field.value, data_perda_Field.value);
    if (validacao) {
        addRow(tabelaPerda, perdaField.value, valor_perda_Field.value, data_perda_Field.value);
        buttonModalPerda.setAttribute('data-dismiss','modal');
    }
}


buttonModalCompra.addEventListener('click', function () {
    compra()});
buttonModalBaixa.addEventListener('click', function () {
    baixa()});
buttonModalPerda.addEventListener('click', function () {
    perda()});
buttonModalEditar.addEventListener('click', function () {
    editar()});