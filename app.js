function exemploVariaveis() {
    var nome = "Mario";
    var idade = 48;
    var buscandoPrincesa = true;
    var anoNascimento = 2024 - idade;
    console.log("Nome: ".concat(nome));
    console.log("Idade: ".concat(idade));
    if (buscandoPrincesa === true) {
        console.log("Buscando a princesa: Sim");
    }
    else {
        console.log("Buscando a princesa: N\u00E3o");
    }
    console.log("Ano de nascimento ".concat(anoNascimento));
}
/*
    Operadores Relacionais:
    Igual           ===
    Menor           <
    Menor ou igual  <=
    Maior           >
    Maior ou igual  >=
    Diferente       !=
 
Operadores Lógicos
    E       &&
    Ou      ||
*/
function exemploIfComE() {
    var idade = 65;
    if (idade >= 18 && idade < 65) {
        console.log("Adulto");
    }
    else if (idade >= 65) {
        console.log("Idoso");
    }
    else {
        console.log("Criança");
    }
}
function exemploWhile() {
    var indice = 10;
    while (indice >= 0) {
        console.log(indice);
        // Decrementar a variável indice
        indice = indice - 1;
    }
}
function exemploFor() {
    // Apresentar de 0 até 9
    for (var indice = 0; indice < 10; indice = indice + 1) {
        console.log(indice);
    }
}
function exemploLista() {
    var produtos = [];
    // Adicionar item na lista
    produtos.push("Batman"); // Posição 0
    produtos.push("Corringa"); // Posição 1
    produtos.push("Arlequina"); // Posição 2
    produtos.push("Lanterna Verde"); // Posição 3
    produtos.push("Lex Luthor");
    // Remover o último elemento da lista
    var bonecoRemovido = produtos.pop();
    // Remover o Lanterna Verde da posição 3
    produtos.splice(3, 1); // Remover o elemento da posição 3, removendo 1 elemento
    // Apresentar a quantidade de elementos da lista
    console.log("Quantidade de produtos: ".concat(produtos.length));
    // Alterar um item
    produtos[1] = "Coringa";
    // Apresentar os itens da lista
    console.log("\nProdutos:\n1\u00BA => ".concat(produtos[0], " \n2\u00BA => ").concat(produtos[1], " \n3\u00BA => ").concat(produtos[2], " \n        "));
}
function exemploListaComFor() {
    var nomes = ["Pedro", "Julia", "Marcão"];
    var idades = [20, 35, 8];
    // i = i + 1;
    // i += 1;
    // i++;
    // Apresentar o nome e idade das pessoas
    for (var i = 0; i < nomes.length; i += 1) {
        var nome = nomes[i];
        var idade = idades[i];
        console.log("".concat(nome, " tem ").concat(idade, " anos de idade"));
    }
    // Apresentar as pessoas que são maiores de idade
    console.log("\n\nMaiores de idade: ");
    for (var i = 0; i < nomes.length; i += 1) {
        var nome = nomes[i];
        var idade = idades[i];
        if (idade >= 18) {
            console.log("".concat(nome, " tem ").concat(idade, " anos de idade"));
        }
    }
}
exemploListaComFor();
