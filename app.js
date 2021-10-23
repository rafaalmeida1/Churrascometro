// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

const calcular = () => {
  console.log("calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qTotalCerveja = cervejaPP(duracao) * adultos;
  let qTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<h3>Você vai precisar de:</h3>`
  resultado.innerHTML += `<p>${qTotalCarne/1000} Kg de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(qTotalCerveja/355)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(qTotalBebidas/2000)} Garrafas Pet's de 2L de Bebida</p>`
  //atribuo o '+=' pois, estou adicionando mais um, além do que já tinha
}

function carnePP(duracao) {
    if(duracao >= 6){
        return 650;
    }else{
        return 400
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
