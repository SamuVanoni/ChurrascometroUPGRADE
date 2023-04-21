
let inputAdultosTT = document.getElementById("adultosTT");
let inputAdultos = document.getElementById("adultos");
let inputSucoAdultos = document.getElementById("sucoAdultos");
let inputCriancas = document.getElementById("criancas");
let inputSucoCriancas = document.getElementById("sucoCriancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultosTT = inputAdultosTT.value;
    let adultos = inputAdultos.value;
    let sucoAdultos = inputSucoAdultos.value;
    let criancas = inputCriancas.value;
    let sucoCriancas = inputSucoCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let frango = frangoPP(duracao);
    let linguica = linguicaPP(duracao);
    let paoComAlho = paoComAlhoPP(duracao);
    let queijo = queijoPP(duracao);
    let refrigerante = refriPP(duracao);
    let cerveja = cervejaPP(duracao);
    let suco = sucoPP(duracao);

    let qtdTotalCarne = carne * adultosTT + (carne / 2 * criancas);
    let qtdTotalFrango = frango * adultosTT + (frango / 2 * criancas);
    let qtdTotalLinguica = linguica * adultosTT + (linguica / 2 * criancas);
    let qtdTotalPaoComAlho = paoComAlho * adultosTT + (paoComAlho / 2 * criancas);
    let qtdTotalQueijo = queijo * adultosTT + (queijo / 2 * criancas);
    let qtdTotalRefri = refrigerante * ((adultosTT - adultos) - sucoAdultos) + (refrigerante / 2 * (criancas - sucoCriancas));
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalSuco = suco * sucoAdultos + (suco * sucoCriancas);

    resultado.innerHTML = `<p> <img src="./images/bife.png" width="25px"> ${Math.ceil(qtdTotalCarne / 1000)}Kg de carne</p>`
    resultado.innerHTML += `<p> <img src="./images/frango.png" width="25px"> ${Math.ceil(qtdTotalFrango / 1000)}Kg de frango</p>`
    resultado.innerHTML += `<p> <img src="./images/linguica.png" width="25px"> ${Math.ceil(qtdTotalLinguica / 1000)}Kg de linguiça</p>`
    resultado.innerHTML += `<p> <img src="./images/paoComAlho.png" width="25px"> ${Math.ceil(qtdTotalPaoComAlho / 4)} pacotes de pão com alho</p>`
    resultado.innerHTML += `<p> <img src="./images/queijo.png" width="25px"> ${Math.ceil(qtdTotalQueijo / 4)} pacotes de queijo</p>`
    resultado.innerHTML += `<p> <img src="./images/refri.png" width="25px"> ${Math.ceil(qtdTotalRefri / 2000)}garrafas de refri</p>`
    resultado.innerHTML += `<p> <img src="./images/cerveja.png" width="25px"> ${qtdTotalCerveja}latas de cerveja</p>`
    resultado.innerHTML += `<p> <img src="./images/suco.png" width="25px"> ${Math.ceil(qtdTotalSuco / 1000)}litros de suco</p>`

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
        return 100;
    } else if (duracao > 3){
        return 150;
    } else if (duracao > 6){
        return 200;
    } else if (duracao > 9){
        return 250;
    }
}

function linguicaPP(duracao){

    if(duracao <= 3){
        return 100;
    } else if (duracao > 3){
        return 150;
    } else if (duracao > 6){
        return 200;
    } else if (duracao > 9){
        return 250;
    }
}

function paoComAlhoPP(duracao){

    if(duracao <= 3){
        return 1.5;
    } else if (duracao > 3){
        return 2.5;
    } else if (duracao > 6){
        return 3.5;
    } else if (duracao > 9){
        return 4.5;
    }
}

function queijoPP(duracao){

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

function sucoPP(duracao){

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

function creditos(){
    alert('<a href="https://www.flaticon.com/br/icones-gratis/bife" title="bife ícones">Bife ícones criados por Febrian Hidayat - Flaticon</a><a href="https://www.flaticon.com/free-icons/baguette" title="baguette icons">Baguette icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/cheese" title="cheese icons">Cheese icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/coke" title="coke icons">Coke icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/drink" title="drink icons">Drink icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/tequila" title="tequila icons">Tequila icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/meat" title="meat icons">Meat icons created by Freepik - Flaticon</a>');
}