interface Aluno {
    nome: string,
    idade: number,
    cidade: string
}
function exemploAlunos() {
    // let nomeLeo: string = "Leo";
    // let idadeLeo: number = 31;
    // let cidadeLeo: string = "Timbó";
    let leo: Aluno = {
        nome: "Leo",
        idade: 31,
        cidade: "Timbó"
    }
    let lucas: Aluno = {
        nome: "lucas",
        idade: 22,
        cidade: "Blumenau"
    }
    let pedro: Aluno = {
        nome: "Pedro",
        idade: 22,
        cidade: "Indaial"
    }
    console.log(`Dados: ${leo.nome}\nIdade: ${leo.idade}\nCidade: ${leo.cidade}`)
}

interface Colaborador { 
    nome: string,
    cpf: string,
    quantidadeHoras: number,
    valorHora: number,
    descricao: string,
    auxilioEducacao?: number // Propriedade opcional
}

function exemploColaborador(){
    let joana: Colaborador = {
        nome: "Joana",
        cpf: "123.456.789-10",
        quantidadeHoras: 180,
        valorHora: 45.40,
        descricao: "Lutadora"
    }
    // joana.auxilioEducacao = 1000;

    let salarioJoana = joana.quantidadeHoras * joana.valorHora;
    if (joana.auxilioEducacao != undefined){
        salarioJoana += joana.auxilioEducacao;
    }

    console.log(`Salário Joana: ${salarioJoana}`)
}


interface Endereco { 
    uf: string,
    cidade: string,
    bairro: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento?: string
}

interface Cliente {
    nome: string,
    cpf: string,
    endereco: Endereco,
    cartaoCredito: CartaoCredito,
}

interface CartaoCredito {
    numero: string,
    codigoVerificao: number,
    nome: string,
    anoValidade: number,
    mesValidade: number,
}

function exemploClientes(){
    let cliente1: Cliente = {
        nome: "Luiz Kevin Isaac Moreira",
        cpf: "068.559.745-89",
        endereco: {
            uf: "GO",
            cidade: "Itumbiara",
            bairro: "Jardim América",
            logradouro: "Rua Manoel Paulino de Araújo",
            cep: "75523-300",
            numero: "315"
        },
        cartaoCredito: {
            numero: "2019 2010 2910 3882",
            mesValidade: 12,
            anoValidade: 2028,
            codigoVerificao: 718,
            nome: "Luiz Moreira"
        }
    }
    console.log(`Nome: ${cliente1.nome}
CPF: ${cliente1.cpf}
Endereço:
    UF: ${cliente1.endereco.uf}
    Cidade: ${cliente1.endereco.cidade}
    Bairro: ${cliente1.endereco.bairro}
    CEP: ${cliente1.endereco.cep}
    Logradouro: ${cliente1.endereco.logradouro}
    Número: ${cliente1.endereco.numero}
Cartão Crédito: ${cliente1.cartaoCredito.numero}
        `)
}

function exemploAlunosLista(){ 
    let alunos: Aluno[] = [];
    
    let pedro: Aluno = {
        nome: "Pedro",
        idade: 50,
        cidade: "Timbó"
    }
    alunos.push(pedro); // Armazenado na posição 0
    alunos.push({
        nome: "Isa",
        cidade: "Timbó",
        idade: 23
    }); // Armazenado na posição 1
    alunos.push({
        nome: "Julia",
        cidade: "Blumenau",
        idade: 33
    }); // Armazenado na posição 2

    // Alterar a cidade da Isa
    alunos[1].cidade = "Taió";

    console.log(`Quantidade de alunos: ${alunos.length}
Aluno: ${alunos[0].nome}
    Idade: ${alunos[0].idade}
    Cidade: ${alunos[0].cidade}

Aluno: ${alunos[1].nome}
    Idade: ${alunos[1].idade}
    Cidade: ${alunos[1].cidade}

Aluno: ${alunos[2].nome}
    Idade: ${alunos[2].idade}
    Cidade: ${alunos[2].cidade}
    `);
}



exemploAlunosLista();
