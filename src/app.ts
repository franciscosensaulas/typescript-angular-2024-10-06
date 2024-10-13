function exemploVariaveis() {

    let nome: string = "Mario";
    let idade: number = 48;
    let buscandoPrincesa: boolean = true;
    let anoNascimento: number = 2024 - idade;

    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);

    if (buscandoPrincesa === true) {
        console.log('Buscando a princesa: Sim');
    } else {
        console.log('Buscando a princesa: Não');
    }

    console.log(`Ano de Nascimento ${anoNascimento}`);
}


//console.log(`buscandoPrincesa: ${buscandoPrincesa}`);

//Compilar `tsc app.ts`
//Compilar `node app.js`

// exercicio1: CRiar uma função chamada exercicioNomeCompleto, deve guardar o nome e sobrenome 
//Apresentar o nome completo

function exercicioNomeCompleto() {

    let nome: string = "Léo";
    let sobrenome: string = "Agostini";

    console.log(`Nome: ${nome} Sobrenome: ${sobrenome}`);
}

//exercicio2: Criar uma função chamada exercicioImc, deve guardar nome, peso e altura
//calcular e apresentar o imc
// apresentar qual a classificação do IMC, Ex: Obesidade II

function exercicioImc() {

    let nome: string = "Léo";
    let sobrenome: string = "Agostini";
    let idade: number = 31;
    let altura: number = 1.75;
    let calculoImc: number = idade / altura;

    console.log(`IMC: ${calculoImc}`);

    if (calculoImc >= 30) {
        console.log('Obesidade II');
    } else if (calculoImc >= 10) {
        console.log('Normal');
    } else {
        console.log("Magro");

    }
}

//exercicio3: Criar uma função chamada calcularMedia, deve guardar nota1, nota2, e nota3
//calcular média
//apresentar se está aprovado ou reprovado

function calcularMedia() {

    let nota1: number = 8;
    let nota2: number = 9;
    let nota3: number = 10;
    let media;

    media = (nota1 + nota2 + nota3) / 3;

    console.log(`Média: ${media}`);

    if (media >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}


//exemploVariaveis();
//exercicioNomeCompleto();
//exercicioImc();
//calcularMedia();

/*Operadores Relacionais:
    Igual           ===
    Menor           <
    Menor ou igual  <=
    Maior           >
    Maior ou igual  >=
    Diferente       !=

 Operadores Lógico:
   E       &&
   Ou      ||
*/

function exemploIfComE() {
    let idade: number = 19
    if (idade >= 18 && idade < 65) {
        console.log("Adulto");

    } else if (idade >= 65) {
        console.log("Idoso");

    } else {
        console.log("Criança");
    }
}

function exemploWhile() {
    let indice: number = 10;
    while (indice >= 0) {
        console.log(indice);
        //Decrementar a variável indice
        indice = indice - 1;
    }
}

function exemploFor() {
    //apresentar de 0 até 9
    for (let indice: number = 0; indice < 10; indice = indice + 1) {
        console.log(indice);

    }
}

//exemploIfComE();
//exemploWhile();

//exemploFor()

function exemploLista() {//GRUD => Create, Read, Update, Delete
    let produtos: string[] = [];
    //adicionar item na lista
    produtos.push("Batman"); // Posição 0
    produtos.push("Corringa"); // Posição 1
    produtos.push("Arlequina"); // Posição 2
    produtos.push("Lanterna Verde"); // Posição 3
    produtos.push("Lex Luthor"); // Posição 4

    //remover o último elemento da lista
    let bonecoRemovido = produtos.pop();

    //remover o Lanterna Verde
    produtos.splice(3, 1) // remover o elemento da posição 3, removendo 1 elemento

    //apresentar a quantidade de elemento da lista
    console.log(`Quantidade de produtos: ${produtos.length}`);

    //alterar um item
    produtos[1] = "Coringa"

    //apresentar os itens da lista
    console.log(`Produtos:
    1º => ${produtos[0]}
    2º => ${produtos[1]}
    3º => ${produtos[2]}
    `);
}
//exemploLista()

//exercicio 4
//Criar uma função chamada exercicioListaFrutas exercicio
// adicionar 4 frutas
// adicionar 1 legume
//adicionar 1 fruta
//adicionar Sal
//adicionar 1 fruta
//Remover Sal
//apresentar quantidade de itens
//apresentar as frutas cadastradas

function exercicioListaFrutas() {
    let produtos: string[] = [];
    //adicionar item na lista
    produtos.push("Maça"); // Posição 0
    produtos.push("Banana"); // Posição 1
    produtos.push("Morango"); // Posição 2
    produtos.push("Laranja"); // Posição 3
    produtos.push("Alface"); // Posição 4
    produtos.push("Sal"); // Posição 5
    produtos.push("Manga"); // Posição 6

    //remover o Sal
    produtos.splice(5, 1) // remover o elemento da posição 5

    //apresentar a quantidade de itens da lista
    console.log(`Quantidade de itens: ${produtos.length}`);

    //apresentar os itens da lista
    console.log(`Produtos:
    1º => ${produtos[0]}
    2º => ${produtos[1]}
    3º => ${produtos[2]}
    4º => ${produtos[3]}
    5º => ${produtos[4]}
    6º => ${produtos[5]}
    `);
}

//exercicioListaFrutas();

function exemploListaComFor() {
    let nomes: string[] = ["Pedro", "Julia", "Marcão"];
    let idades: number[] = [20, 35, 8];
    // i = i + 1;
    // i+= 1;
    // i++;

    //apresentar o nome e idade das pessoas
    for (let i = 0; i < nomes.length; i += 1) {
        let nome = nomes[i];
        let idade = idades[i];
        console.log(`${nome} tem ${idade} anos de idade`);
    }

    // apresentar as pessoas que são maiopres de idade
    for (let i = 0; i < nomes.length; i += 1) {
        let nome = nomes[i];
        let idade = idades[i];
        if (idade >= 18) {
            console.log((`${nomes} tem ${idades} anos de idade`));
        }
    }

    //soma das idades
    let soma: number = 0
    for (let i = 0; i < nomes.length; i += 1) {
        let idade = idades[i];
        soma = soma + idade;
    }
    let media = soma / nomes.length;
    console.log(`
Soma: ${soma}
Média: ${media}
`);

    // descobrir a pessoa que tem a maior idade
    let maiorIdade: number = 0;
    let nomeMaiorIdade: string = "";
    for (let i = 0; i < nomes.length; i += 1) {
        let nome = nomes[i];
        let idade = idades[i];
        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaiorIdade = nome;
        }

    }
    console.log((`${nomeMaiorIdade} tem a maior idade ${maiorIdade}`));

}

//exemploListaComFor();

//------------------------------------------------------------------------------------------------------

// Exercicio 5
/*Criar uma função  exercicioListaComForJogos()
criar uma lista de jogos e outra lista de preços 
adicionar 5 jogos na lista
*/
function exercicioListaComForJogos() {
    let nomesJogos: string[] = ["GTA", "Mario", "Call of Duty", "Far Cry", "Resident Evil"];
    let precosJogos: number[] = [450, 350, 250, 180, 50];

    //apresentar jogos e preços
    for (let i = 0; i < nomesJogos.length; i += 1) {
        let nome = nomesJogos[i];
        let preco = precosJogos[i];
        console.log(`O jogo ${nome} tem o valor de ${preco} reais`);

    }

    // apresentar o jogo que tem o maior valor
    for (let i = 0; i < nomesJogos.length; i += 1) {
        let nome = nomesJogos[i];
        let preco = precosJogos[i];
        if (preco >= 50) {
            console.log((`${nome} tem o valor de ${preco}`));

        }
    }

    //soma dos preços dos jogos
    let soma: number = 0
    for (let i = 0; i < nomesJogos.length; i += 1) {
        let preco = precosJogos[i];
        soma = soma + preco;
    }
    let media = soma / nomesJogos.length;
    console.log(`
    Soma: ${soma}
    `);

    // descobrir o maior preço
    let maiorPreco: number = 0;
    let nomeMaiorPreco: string = "";
    for (let i = 0; i < nomesJogos.length; i += 1) {
        let nome = nomesJogos[i];
        let preco = precosJogos[i];
        if (preco > maiorPreco) {
            maiorPreco = preco;
            nomeMaiorPreco = nome;
        }
    }
    console.log((`${nomeMaiorPreco} tem o maior preco ${maiorPreco}`));

    // descobrir o menor preço
    let menorPreco: number = 999;
    let nomeMenorPreco: string = "";
    for (let i = 0; i < nomesJogos.length; i += 1) {
        let nome = nomesJogos[i];
        let preco = precosJogos[i];
        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenorPreco = nome;
        }
    }
    console.log((`${nomeMenorPreco} tem o menor preco ${menorPreco}`));
}
//exercicioListaComForJogos();


// Função que tem 2 parâmetros do tipo number, que retorna a soma deste parâmetros
function somar(numero1: number, numero2: number) {
    let soma = numero1 + numero2;
    return soma;
}

function calculadora() {
    let numero1 = 19;
    let numero2 = 2;
    // chamando a função somar passando o número 1 e numero 2, armazendando a soma na variavel resultado
    let resultado: number = somar(numero1, numero2);
    console.log(`Resultado: ${resultado}`);

}

//Função com retorno do tipo number, com dois parâmetros
function calcularIMC(peso: number, altura: number): number {
    let imc = peso / (altura * altura); // peso dividido por altura²
    return imc;
}

function exemploComFuncao() {
    let nome1 = "Pedro";
    let altura1 = 1.80;
    let peso1 = 120;
    let imc1: number = calcularIMC(peso1, altura1);

    let nome2 = "Maria";
    let altura2 = 1.73;
    let peso2 = 85;
    let imc2: number = calcularIMC(peso2, altura2);
    console.log(`
    Paciente: ${nome1} possui o imc ${imc1}
    Paciente: ${nome2} possui o imc ${imc2}
    `);
}

//exemploComFuncao();

//------------------------------------------------------------------------------------------
//exercicio 06

// Função para calcular salário bruto
function calcularSalarioBruto(valorHora: number, quantidadeHoras: number): number {
    const salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto;
}

// Função para calcular salário líquido
function calcularSalarioLiquido(salarioBruto: number, auxilioEducacao: number, auxilioIdiomas: number, auxilioHomeOffice: number, descontoUnimed: number, descontoUniodonto: number
): number {
    const salarioLiquido = salarioBruto + auxilioEducacao + auxilioIdiomas + auxilioHomeOffice - descontoUnimed - descontoUniodonto;
    return salarioLiquido;
}

// Função principal
function exercicioCalcularFolhaPagamento() {
    // Declaração das variáveis
    const nome = "João";
    const valorHora = 50;
    const quantidadeHoras = 160;
    const auxilioEducacao = 300;
    const auxilioIdiomas = 200;
    const auxilioHomeOffice = 150;
    const descontoUnimed = 100;
    const descontoUniodonto = 50;

    // Calculando salário bruto
    const salarioBruto = calcularSalarioBruto(valorHora, quantidadeHoras);
    console.log(`Salário Bruto de ${nome}: R$ ${salarioBruto.toFixed(2)}`);

    // Calculando salário líquido
    const salarioLiquido = calcularSalarioLiquido(salarioBruto, auxilioEducacao, auxilioIdiomas, auxilioHomeOffice, descontoUnimed, descontoUniodonto);
    console.log(`Salário Líquido de ${nome}: R$ ${salarioLiquido.toFixed(2)}`);
}

// Chamando a função principal
//exercicioCalcularFolhaPagamento();

//---------------------------------------------------------------------------------------------
//exercicio07
// Função para calcular o valor pago de um produto
function calcularValorProduto(quantidade: number, precoUnitario: number): number {
    return quantidade * precoUnitario;
}

// Função para calcular o valor total de todos os produtos
function calcularTotalDosProdutos(
    produtos: string[],
    quantidades: number[],
    precosUnitarios: number[]
): number {
    let soma = 0;

    for (let i = 0; i < produtos.length; i++) {
        const valorProduto = calcularValorProduto(quantidades[i], precosUnitarios[i]);
        console.log(`Produto: ${produtos[i]}, Quantidade: ${quantidades[i]}, Valor Total: R$ ${valorProduto.toFixed(2)}`);
        soma += valorProduto;
    }

    return soma;
}

// Função principal
function exercicioVetorComFuncoes() {
    // Lista de produtos
    const produtos = ["Arroz", "Feijão", "Macarrão", "Óleo", "Açúcar"];
    // Lista de quantidades
    const quantidades = [2, 1, 3, 2, 4];
    // Lista de preços unitários
    const precosUnitarios = [20, 10, 5, 8, 3];

    // Chamando a função calcularTotalDosProdutos
    const total = calcularTotalDosProdutos(produtos, quantidades, precosUnitarios);

    console.log(`Valor total dos produtos: R$ ${total.toFixed(2)}`);
}

// Chamando a função principal
exercicioVetorComFuncoes();