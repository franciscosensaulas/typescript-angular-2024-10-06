# Lista de Exercícios de TypeScript Aula 01

## Exerício 01:
- Criar uma função chamada `exercicioNomeCompleto()`, deve guardar o nome e sobrenome.
- Apresentar o nome completo

## Exercício 02:
- Criar uma função chamada `exercicioImc()`, deve guardar nome, peso e altura
- Calcular e apresentar o imc
- Apresentar qual a classificação do IMC. Ex.: Obesidade II

## Exercício 03:
- Criar uma função chamada `exercicioCalcularMedia()`, deve guardar nota 1, nota 2 e nota 3
- Calcular média
- Apresentar se está aprovado ou reprovado

## Exercício 04:
- Criar uma função chamada exercicioListaFrutas
- Adicionar 4 frutas
- Adicionar 1 Vegetal
- Adicionar 1 Fruta
- Adicionar Sal
- Adicionar 1 Fruta
- Remover o Vegetal
- Remover Sal
- Apresentar quantidade de itens
- Apresentar as frutas cadastradas

## Exercício 05
- Criar uma função `exercicioListaComForJogos()`
- Criar uma lista de jogos e outra lista de preços
- Adicionar 5 jogos na lista de jogos e 5 preços para estes jogos na lista de preços
- Apresentar todos os jogos e seus respectivos preços
- Apresentar o nome do jogo e preço do jogo que contém o maior preço
- Apresentar o nome do jogo e preço do jogo que contém o menor preço
- Apresentar a soma dos preços dos jogos
- Apresentar a lista de jogos que o preço está abaixo de 50 reais
- Apresentar a lista de jogos que o preço está entre 100 e 250 reais


## Exercício 06
- Criar uma função `exercicioCalcularFolhaPagamento`
- Declara as variáveis:
  - nome
  - valor hora
  - quantidade de horas
  - valor auxilio educação
  - valor auxilio idiomas
  - valor auxilio home office
  - desconto unimed
  - desconto uniodonto

- Criar uma função `calcularSalarioBruto`
  - calcular salário bruto que é composto por quantidade horas vezes o valor hora 
  - retornar o salario bruto
- Criar uma função `calcularSalarioLiqudido`
  - calcular salário líquido que é composto por salário bruto + auxilios - descontos
  - retornar o salário líquido
- Na função `exercicioCalcularFolhaPagamento` chamar o salário bruto e líquido
  - Apresentar salário bruto e salário líquido

## Exercício 07
- Criar uma função `exercicioVetorComFuncoes()`
  - Criar uma lista de produtos com 5 itens
  - Criar uma lista de quantidades com 5 quantidades 
  - Criar uma lista de precosUnitarios com 5 preços unitários

- Criar uma função `calcularValorProduto` que recebe como parâmetro a quantidade e preço unitário
  - Calcular o valor pago daquele produto e retornar
- Criar uma função `calcularTotalDosProdutos` que percorre a lista de produtos e apresentar a soma dos totais
  - Para cada item percorrido deve-se calcular o preço pago por produto, para tal chamar a função `calcularValorProduto`
  - Criar uma variável soma, agregando o preço pago por cada produto nela.
  - Retornar o valor da variável soma


- Modificar a função `exercicioVetorComFuncoes()`
  - Chamando a função `calcularTotalDosProdutos`


## Exercício 08
- Criar uma interface chamada Pessoa que contém as seguintes propriedades:
  - Nome
  - Ano de nascimento
  - Signo 
  - E-mail
- Criar uma função chamada exercicioPessoa que deve fazer as seguintes ações:
  - Instanciar um objeto da Pessoa preenchendo todos os dados
  - Apresentar todos os dados
  - Alterar o e-mail
  - Alterar o signo
  - Apresentar a idade da pessoa (fazer um cálculo)
  - Apresentar todos os dados
## Exercício 09
- Criar uma interface chamada Autor que contém as seguintes propriedades:
  - Nome *
  - Idade *
- Criar uma interface chamada Ator que contém as seguintes propriedades:
  - Nome *
  - Indicações *
- Criar uma interface chamada Filme que contém as seguintes propriedades:
  - Nome *
  - Duracao *
  - Categoria *
  - Orçamento *
  - Data de Lançamento *
  - Autor *
  - Ator *
  - Descrição

Instanciar dois filmes preenchendo todos os dados necessários e apresentar

* campos obrigatórios 

## Exercício 10
- Criar classe Aluno
  - Propriedades:
    - Nome
    - Apelido opcional
    - Notas lista
    - Percentual de frequancia (numero) 70
  - Métodos:
    - Calcular a média: percorrer cada uma das notas somando e depois calcular a média
    - ehAprovado:
      retornar verdadeiro caso o aluno atingir 7 de média com frequencia superior ou igual a 70%
      retornar falso caso contrário
- Criar uma classe chamada Turma que contém as seguintes propriedades:
  Propriedades:
    - Nome
    - Escola
    - Lista de Alunos
  Métodos:
    - Obter alunos aprovados
    - Obter alunos reprovados
    - Obter quantidade de alunos reprovados
    - Obter média geral da turma (depois)

Criar cinco alunos
Criar a turma, adicionando os alunos
Chamar os métodos da turma e apresentar

