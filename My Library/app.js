
class Livro{
    constructor(nome,autor,editora,categoria,descrição){
        this.nome = nome;
        this.autor = autor;
        this.editora = editora;
        this.categoria = categoria;
        this.descrição = descrição;
    }

    validarDados() {
        for(let i in this) {
			if(this[i] == undefined || this[i] == '' || this[i] == null) {
				return false
			}
		}
		return true
    }
}

class Bd{
    constructor(){
         this.livros = JSON.parse(localStorage.getItem('livros')) || [];
    }
    gravar(l){
        this.livros.push(l);
        localStorage.setItem('livros',JSON.stringify(this.livros));
    }
    recuperarRegistros(){
        return JSON.parse(localStorage.getItem('livros'));
    }

    pesquisar(livro){
        let livrosFiltrados = Array();
        livrosFiltrados = this.livros;

        livrosFiltrados = livrosFiltrados.filter(function(l){
            let achou = false;
            for(let i in l){
                if(l[i] == livro[i]){
                    achou = true;
                }
            }
            return achou;
        })

        return livrosFiltrados;
    }
}

var bd = new Bd();



function cadastrarLivro(){
    let nome = document.getElementById('nome');
    let autor = document.getElementById('autor');
    let editora = document.getElementById('editora');
    let categoria = document.getElementById('categoria');
    let descricao = document.getElementById('descricao');

    let livro = new Livro(nome.value, autor.value, editora.value, categoria.value, descricao.value);

    
    if(livro.validarDados()){
        bd.gravar(livro);
        document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
	document.getElementById('modal_titulo_div').className = 'modal-header text-success'
	document.getElementById('modal_conteudo').innerHTML = 'Livro foi cadastrada com sucesso!'
	document.getElementById('modal_btn').innerHTML = 'Voltar'
	document.getElementById('modal_btn').className = 'btn btn-success'
        //dialog de sucesso
	$('#modalRegistraLivro').modal('show') 

        nome.value = '';
        autor.value = '';
        editora.value = '';
        categoria.value = '';
        descricao.value = '';
    } 
    else {
		
	document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
	document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
	document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
	document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
	document.getElementById('modal_btn').className = 'btn btn-danger'

	//dialog de erro
	$('#modalRegistraLivro').modal('show') 
	}  
}

function carregarLivros(listaLivros = Array(), filtro = false){
    if(listaLivros.length == 0 && filtro == false){
          listaLivros = bd.recuperarRegistros();
    }

    let tabelaConteudo = document.getElementById('listaLivros');
    tabelaConteudo.innerHTML = '';

   

    listaLivros.forEach(function(l){
        var linha = tabelaConteudo.insertRow(0);

        linha.insertCell(0).innerHTML = l.nome; 
        linha.insertCell(1).innerHTML = l.autor; 
        linha.insertCell(2).innerHTML = l.editora; 
        linha.insertCell(3).innerHTML = l.categoria;
        linha.insertCell(4).innerHTML = l.descrição;

    });
}

function pesquisarLivros(){

    let nome = document.getElementById('nome');
    let autor = document.getElementById('autor');
    let editora = document.getElementById('editora');
    let categoria = document.getElementById('categoria');
    let descricao = document.getElementById('descricao');

    let livro = new Livro(nome.value,autor.value,editora.value,categoria.value,descricao.value);

    const livrosFiltrados = bd.pesquisar(livro);

    carregarLivros(livrosFiltrados,true);

}



