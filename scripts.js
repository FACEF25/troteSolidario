function validarCampos() {
    // Obtendo os valores dos campos
    let mascote = document.getElementById("mascote").value;
    let homenagem = document.getElementById("homenagem").value;
    let leite = document.getElementById("leite").value;
    let kit = document.getElementById("kit").value;
    let suplemento = document.getElementById("suplemento").value;
    let sangue = document.getElementById("sangue").value;
    let animacao = document.getElementById("animacao").value;
    let audiovisual = document.getElementById("audiovisual").value;
    let acao = document.getElementById("acao").value;

    // Verificando se algum campo necessário está vazio
    if (mascote === "" || homenagem === "" || leite === "" || kit === "" || suplemento === "" ||
        sangue === "" || animacao === "" || audiovisual === "" || acao === "") {
        alert("Existem campos obrigatórios que não foram preenchidos. Por favor, verifique.");
        return false; // Impede o envio do formulário
    }

    // Caso todos os campos estejam preenchidos, permite o envio
    return true;
}

function calcular() {
    // Validar os campos antes de calcular
    if (!validarCampos()) {
        return; // Se os campos não forem válidos, interrompe o cálculo
    }

    // Criando as variáveis
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue;
    let arroz5, arroz1, feijao2, feijao1, macarrao, oleo, animacao, audiovisual, acao;

    // Adicionais / alimentos avulsos
    arroz5 = Number(document.getElementById("arroz5").value);
    arroz1 = Number(document.getElementById("arroz1").value);
    feijao1 = Number(document.getElementById("feijao1").value);
    feijao2 = Number(document.getElementById("feijao2").value);
    macarrao = Number(document.getElementById("macarrao").value);
    oleo = Number(document.getElementById("oleo").value);
    mascote = Number(document.getElementById("mascote").value);
    homenagem = Number(document.getElementById("homenagem").value);
    leite = Number(document.getElementById("leite").value);
    kit = Number(document.getElementById("kit").value);
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("sangue").value);
    animacao = Number(document.getElementById("animacao").value);
    audiovisual = Number(document.getElementById("audiovisual").value);
    acao = Number(document.getElementById("acao").value);

    // Calcular a soma parcial
    soma = mascote + homenagem + animacao + audiovisual + acao + (2 * leite);

    // Soma dos alimentos avulsos
    soma += (arroz5 * 5) + (arroz1 * 1) + (feijao2 * 2) + (feijao1 * 1) + (macarrao * 0.5) + (oleo * 1);

    // Calcular a pontuação considerando metas de kit e suplemento
    equipe = document.getElementById("equipe").value;

    if (equipe == "Laranja") {
        // Verifica kit e suplemento
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 && suplemento >= 39) {
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 && suplemento >= 25) {
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        }
        // Verifica sangue
        if (sangue >= 49) {
            soma = soma + 2500 + ((sangue - 49) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    } else if (equipe == "Preta") {
        // Verifica kit e suplemento
        if (kit >= 103 && suplemento >= 52) {
            soma = soma + 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if (kit >= 82 && suplemento >= 42) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        }
        // Verifica sangue
        if (sangue >= 52) {
            soma = soma + 2500 + ((sangue - 52) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    } else if (equipe == "Roxa") {
        // Verifica kit e suplemento
        if (kit >= 102 && suplemento >= 51) {
            soma = soma + 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if (kit >= 82 && suplemento >= 41) {
            soma = soma + 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if (kit >= 51 && suplemento >= 26) {
            soma = soma + 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 && suplemento >= 10) {
            soma = soma + 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        }
        // Verifica sangue
        if (sangue >= 51) {
            soma = soma + 2500 + ((sangue - 51) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    } else if (equipe == "Verde") {
        // Verifica kit e suplemento
        if (kit >= 88 && suplemento >= 44) {
            soma = soma + 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if (kit >= 70 && suplemento >= 35) {
            soma = soma + 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 44 && suplemento >= 22) {
            soma = soma + 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if (kit >= 18 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        }
        // Verifica sangue
        if (sangue >= 44) {
            soma = soma + 2500 + ((sangue - 44) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    } else { // equipe vermelha
        // Verifica kit e suplemento
        if (kit >= 93 && suplemento >= 47) {
            soma = soma + 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if (kit >= 74 && suplemento >= 38) {
            soma = soma + 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 && suplemento >= 24) {
            soma = soma + 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 && suplemento >= 9) {
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        }
        // Verifica sangue
        if (sangue >= 47) {
            soma = soma + 2500 + ((sangue - 47) * 20);
        } else {
            soma = soma + (sangue * 20);
        }
    }

        // Exibe o resultado em um alert
        alert("A soma é: " + soma);
    }
    