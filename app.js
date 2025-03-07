let listaDeAmigos = []; // Criação da lista de amigos
let listaNaTela = document.getElementById('listaAmigos'); // Aqui vinculamos onde no HTML a lista de amigos será exibida

function adicionarAmigo() { // Função que adiciona o amigo digitado na lista de amigos

    let digitado = document.getElementById('amigo'); //A variável recebe o que foi digitado pelo usuário
    let nomeAmigo = digitado.value.trim(); // Remove espaços extras

    if (nomeAmigo === "") {
        alert('Este campo não pode ficar vazio, por favor, digite o nome do amigo!');
        return;
    }
    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Adicione um nome diferente.");
        return;
    }
    // Adiciona ao array (opcional, caso precise armazenar os nomes)
    listaDeAmigos.push(nomeAmigo);

    // Criando um novo <li> e adicionando à lista
    let novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaNaTela.appendChild(novoItem);

    digitado.value = ""; // Limpa o campo após adicionar 
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Você precisa adicionar amigos antes de sortear!");
        return;
    }

    if (listaDeAmigos.length === 1) {
        alert("Você adicionou apenas 1 amigo. Adicione mais pessoas!");
        return;
    }

    // Gera um índice aleatório dentro do tamanho da lista
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado na tela (dentro da <ul id="resultado">)
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

}

function reiniciar() {
    listaDeAmigos = []; // Limpa o array com o nome dos amigos
    listaNaTela.innerHTML = ""; // Limpa a exibição da lista na tela
    document.getElementById('resultado').innerHTML = "";// Limpa a exibição do resultado na tela
    document.getElementById('amigo').value = "";// Limpa o campo nome se houver algum digitado na tela
}