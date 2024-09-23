//Verbo + substantivo:
let corSite = "Azul"
function resetaCor(){
    corSite = "";
};
console.log(corSite);
resetaCor();
console.log(corSite);

// Passando como parametro:
let corSite2 = "Azul"
function resetaCor2(cor, tonalidade){
    corSite2 = cor + tonalidade
};
console.log(corSite2);
resetaCor2("Vermelho", " claro");
console.log(corSite2);

//EXERCICIO:
let time = "santos"
function trocaTime(time1, time2){
    time = time1 + time2
};
console.log(time);
trocaTime("são paulo", " flamengo");
console.log(time);