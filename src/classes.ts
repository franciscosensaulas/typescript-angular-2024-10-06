class ContaPagar {
    nome: string;
    valor: number;
    dataEfetivacao?: Date; // Data de efetivação é um date opcional

    ehEfetivada(): boolean {
        // Verificar se a conta não foi paga
        if (this.dataEfetivacao === undefined)
            // Retornar que a conta não foi paga
            return false;
        // Retornar que a conta foi paga
        return true;
    }
}

class Financeiro {
    nome: string;
    valor: number;
    contasPagar: ContaPagar[];

    calcularTotalContasPagas(): number {
        let soma = 0;
        // Percorrer cada uma das contas a pagar
        for (let i = 0; i < this.contasPagar.length; i += 1) {
            // Obter a conta a pagar que está sendo percorrida
            let contaPagar = this.contasPagar[i];
            // Verificando que a conta não foi paga
            // if (contaPagar.ehEfetivada() === false)
            if (!contaPagar.ehEfetivada())
                // Essa conta não foi paga, pois não contém data de efetivação
                continue;

            // Adicionar na variável soma o valor da conta a pagar percorrida
            soma = soma + contaPagar.valor;
        }
        // Retornar o valor das contas somados
        return soma;
    }

    calcularTotalContasPendentes(): number {
        let soma: number = 0;
        for (let i = 0; i < this.contasPagar.length; i += 1) {
            let conta = this.contasPagar[i];
            // if (conta.ehEfetivada() === true)
            if (conta.ehEfetivada())
                continue
            soma += conta.valor;
        }
        return soma;
    }

    existeContasPendetes(): boolean {
        for (let i = 0; i < this.contasPagar.length; i += 1) {
            let conta = this.contasPagar[i];
            if (!conta.ehEfetivada())
                return true;
        }
        return false;
    }

    obterContasPendentes(): ContaPagar[] {
        let contasPendentes: ContaPagar[] = [];

        for (let i = 0; i < this.contasPagar.length; i += 1) {
            let conta = this.contasPagar[i];
            if (!conta.ehEfetivada())
                contasPendentes.push(conta);
        }
        return contasPendentes;
    }
}

function exemploFinanceiro() {
    // Instancinado um objeto da classe Financeiro
    let financeiro = new Financeiro();
    // Definindo valor para as propriedades
    financeiro.nome = "Francisco";
    financeiro.valor = 0;
    financeiro.contasPagar = [];

    let contaLuz = new ContaPagar();
    contaLuz.nome = "Celesc";
    contaLuz.valor = 250.94;
    contaLuz.dataEfetivacao = new Date(2024, 9, 20); // ano, mes, dia
    financeiro.contasPagar.push(contaLuz);

    let contaPlanoSaude = new ContaPagar();
    contaPlanoSaude.nome = "Unimed";
    contaPlanoSaude.valor = 1598.34;
    financeiro.contasPagar.push(contaPlanoSaude);

    let contaAgua = new ContaPagar();
    contaAgua.nome = "Samae";
    contaAgua.valor = 98.00;
    contaAgua.dataEfetivacao = new Date(2024, 9, 3);
    financeiro.contasPagar.push(contaAgua);

    let contasPendentes = financeiro.obterContasPendentes();
    console.log("Contas Pendentes:");
    for (let index = 0; index < contasPendentes.length; index++) {
        const contaPendente = contasPendentes[index];
        console.log(`\t- ${contaPendente.nome}`);
    }

    let totalContasEfetivadas = financeiro.calcularTotalContasPagas();
    let totalContasPendentes = financeiro.calcularTotalContasPendentes();
    console.log(`
Total contas efetivadas: ${totalContasEfetivadas}
Total contas pendentes: ${totalContasPendentes}
Existe contas pendentes: ${financeiro.existeContasPendetes()}
`);
}

exemploFinanceiro();