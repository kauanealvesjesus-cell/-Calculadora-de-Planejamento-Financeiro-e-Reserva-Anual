
function calcular() {

    // Pegando os valores digitados pelo usuário

    let salario = Number(document.getElementById("salario").value);

    let aumento = Number(document.getElementById("aumento").value) / 100;

    let reserva = Number(document.getElementById("reserva").value) / 100;

    let rendimento = Number(document.getElementById("rendimento").value) / 100;

    let anos = Number(document.getElementById("anos").value);

    // Verificando se os valores são válidos

    if (
        !Number.isFinite(salario) ||
        !Number.isFinite(aumento) ||
        !Number.isFinite(reserva) ||
        !Number.isFinite(rendimento) ||
        !Number.isInteger(anos) ||
        salario < 0 ||
        aumento < 0 ||
        reserva < 0 ||
        rendimento < 0 ||
        anos < 1 ||
        anos > 100
    ) {
        alert("Por favor, informe valores válidos!");
        return;
    }

    // Criando variáveis para os cálculos

    let valorInicial = 0;

    let valorFinal = 0;

    let conteudoTabela = "";

    // Formatando os valores em reais

    const formatoReal = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Repetindo os cálculos para cada ano

    for (let ano = 1; ano <= anos; ano++) {

        // Calculando a reserva anual

        let reservaAnual = salario * reserva;

        // Calculando o rendimento

        let valorRendimento = valorInicial * rendimento;

        // Calculando o valor final

        valorFinal = valorInicial + valorRendimento + reservaAnual;

        // Adicionando uma linha na tabela

        conteudoTabela += `
            <tr>
                <td>${ano}</td>
                <td>${formatoReal.format(salario)}</td>
                <td>${formatoReal.format(reservaAnual)}</td>
                <td>${formatoReal.format(valorInicial)}</td>
                <td>${formatoReal.format(valorRendimento)}</td>
                <td><strong>${formatoReal.format(valorFinal)}</strong></td>
            </tr>
        `;

        // O valor final passa a ser o inicial do próximo ano

        valorInicial = valorFinal;

        // Aplicando o aumento anual do salário

        salario = salario * (1 + aumento);
    }

    // Mostrando os resultados na página

    document.getElementById("tabela").innerHTML = conteudoTabela;

    document.getElementById("total").textContent =
        formatoReal.format(valorFinal);

}

// Executando o cálculo ao abrir a página

calcular();
