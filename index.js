let mes = document.querySelector("#mes");
let dia = document.querySelector("#dia");
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`;
}
// Preencher os dias de acordo com o mes selecionado
for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`;
}

function descobrirNome(){
    let nome = "";
    if(mes.value == "Jan"){
        nome = "Pedrinho"
    } else if(mes.value == "Fev"){
        nome = "Betão"
    } else if(mes.value == "Mar"){
        nome = "Paulinho"
    } else if(mes.value == "Abr"){
        nome = "Léozinho"
    } else if(mes.value == "Mai"){
        nome = "Fernando"
    } else if(mes.value == "Jun"){
        nome = "Arlindo"
    } else if(mes.value == "Jul"){
        nome = "Jorginho"
    } else if(mes.value == "Ago"){
        nome = "Carlão"
    } else if(mes.value == "Set"){
        nome = "Fabinho"
    } else if(mes.value == "Out"){
        nome = "Elias"
    } else if(mes.value == "Nov"){
        nome = "Marcão"
    } else if(mes.value == "Dez"){
        nome = "Tião"
    }
    // Completar os meses

    if(dia.value == 1){
        nome += " Treina Bumbum"
    } else if(dia.value == 2){
        nome += " Mata Frango"
    } else if(dia.value == 3){
        nome += " Do shape Zuado"
    } else if(dia.value == 4){
        nome += " Dos Whey"
    } else if(dia.value == 5){
        nome += " Pegador da Academia"
    } else if(dia.value == 6){
        nome += " Taradão da Academoa"
    } else if(dia.value == 7){
        nome += " Do Ciclo Eterno"
    } else if(dia.value == 8){
        nome += " Natural"
    } else if(dia.value == 9){
        nome += " Frangilino"
    } else if(dia.value == 10){
        nome += " Dos 50cm de braço"
    } else if(dia.value == 11){
        nome += " Do GH"
    } else if(dia.value == 12){
        nome += " Da Luvinha"
    } else if(dia.value == 13){
        nome += " Do Stano"
    } else if(dia.value == 14){
        nome += " Relidão"
    } else if(dia.value == 15){
        nome += " Pança de Verme"
    } else if(dia.value == 16){
        nome += " Anomalia"
    } else if(dia.value == 17){
        nome += " Peidorreiro"
    } else if(dia.value == 18){
        nome += " Perna Fina"
    } else if(dia.value == 19){
        nome += " Maromba Raiz"
    } else if(dia.value == 20){
        nome += " Maromba Nutella"
    } else if(dia.value == 21){
        nome += " Que não Treina Perna"
    } else if(dia.value == 22){
        nome += " Que se Acha Grande"
    } else if(dia.value == 23){
        nome += " Das Paradinhas"
    } else if(dia.value == 24){
        nome += " Das Trembo"
    } else if(dia.value == 25){
        nome += " Das Marmita"
    } else if(dia.value == 26){
        nome += " Serigão"
    } else if(dia.value == 27){
        nome += " Bodybuilder"
    } else if(dia.value == 28){
        nome += " Dos Venenos"
    } else if(dia.value == 29){
        nome += " Dos Ferros"
    } else if(dia.value == 30){
        nome += " Sem Panturilha"
    } else if(dia.value == 31){
        nome += " Peito de Pombo"
    }
    // Completar os dias

    alert(`Seu nome é: ${nome}`)
}