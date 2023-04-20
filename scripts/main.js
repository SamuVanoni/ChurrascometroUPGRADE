/* Adultos totais, Adultos que vão beber, Crianças, Duração

Carne, Frango, Linguiça, Pão com alho, Queijo
Refrigerante, Álcool, Suco

Duração 1 valor de 1h-3h
Outro de 3h-6h, 6h-9h, 9h-12h+

1 pessoa
150g, 50g, 50g, 1, 2
500ml, 4latas, 500ml
*/

let inputAdultosTT = document.getElementById("adultosTT");
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputSuco = document.getElementById("suco");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultosTT = inputAdultosTT.value;
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let suco = inputSuco.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let frango = frangoPP(duracao);
    let linguica = linguicaPP(duracao);
    let paoComAlho = paoComAlhoPP(duracao);
    let queijo = queijoPP(duracao);
    let refrigerante = refriPP(duracao);
    let cerveja = cervejaPP(duracao);

    let qtdTotalCarne = carne * adultosTT + (carne / 2 * criancas);
    let qtdTotalFrango = frango * adultosTT + (frango / 2 * criancas);
    let qtdTotalLinguica = linguica * adultosTT + (linguica / 2 * criancas);
    let qtdTotalPaoComAlho = paoComAlho * adultosTT + (paoComAlho / 2 * criancas);
    let qtdTotalQueijo = queijo * adultosTT + (queijo / 2 * criancas);
    let qtdTotalRefri = refrigerante * adultosTT + (refrigerante / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalSuco = 500 * suco;

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${qtdTotalFrango / 1000}Kg de frango</p>`
    resultado.innerHTML += `<p>${qtdTotalLinguica / 1000}Kg de linguiça</p>`
    resultado.innerHTML += `<p>${qtdTotalPaoComAlho / 1000}Kg de pão com alho</p>`
    resultado.innerHTML += `<p>${qtdTotalQueijo / 4} pacotes de queijo</p>`
    resultado.innerHTML += `<p>${qtdTotalRefri / 2000}garrafas de refri</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}latas de cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalSuco / 1000}litros de suco</p>`

}

function carnePP(duracao){

    if(duracao <= 3){
        return 250;
    } else if (duracao > 3){
        return 350;
    } else if (duracao > 6){
        return 450;
    } else if (duracao > 9){
        return 550;
    }
}

function frangoPP(duracao){

    if(duracao <= 3){
        return 50;
    } else if (duracao > 3){
        return 75;
    } else if (duracao > 6){
        return 100;
    } else if (duracao > 9){
        return 125;
    }
}

function linguicaPP(duracao){

    if(duracao <= 3){
        return 50;
    } else if (duracao > 3){
        return 75;
    } else if (duracao > 6){
        return 100;
    } else if (duracao > 9){
        return 125;
    }
}

function paoComAlhoPP(duracao){

    if(duracao <= 3){
        return 1;
    } else if (duracao > 3){
        return 2;
    } else if (duracao > 6){
        return 3;
    } else if (duracao > 9){
        return 4;
    }
}

function queijoPP(duracao){

    if(duracao <= 3){
        return 2;
    } else if (duracao > 3){
        return 4;
    } else if (duracao > 6){
        return 6;
    } else if (duracao > 9){
        return 8;
    }
}

function refriPP(duracao){

    if(duracao <= 3){
        return 500;
    } else if (duracao > 3){
        return 750;
    } else if (duracao > 6){
        return 1000;
    } else if (duracao > 9){
        return 1250;
    }
}

function cervejaPP(duracao){

    if(duracao <= 3){
        return 4;
    } else if (duracao > 3){
        return 6;
    } else if (duracao > 6){
        return 8;
    } else if (duracao > 9){
        return 10;
    }
}