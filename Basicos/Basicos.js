
/*
VARIAVEIL LET:
*/
let idade = 5;
console.log(idade);

// VARIAVEL CONST(CONSTANTE): Diferente da let, o valor da variavel é constante (não pode mudar)
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

// TIPOS PRIMITIVOS:
let nome = 'Rafael'; //String
let idade1 = 25; // number
let estaAprovado = true; // boolean
let sobrenome; // Undefined 
let corSelecionado = null; // Redefinir um valor

// O javascript é uma linguagem totalmente dinamica.

//OBJETOS:
let pessoa = {
    nome: 'Rafael'
};
console.log(pessoa)

//ARRAYS: conjunto de dados que pode ser acessado por um indice
//EX:
let familia = [26,245,50,17];
//como eu acesso um deles?
console.log(familia[2]);
//COMO EU VEJO O TAMANHO DA ARRAY?
console.log(familia.length);

//Loops principais:
//O laço de repetição faz com que ele repita quantas vezes for menor que santos.
let santos = 10

for(let i = 0; i < santos; i++){
    console.log("Maior time do mundo")
}

//Condicionais:
if(santos > flamengo){
    console.log("O santos é o maior clube do mundo")
}
else if (flamengo > gremio){
    console.log("Time pipoqueiro")
}
else{
    console.log(vasco)
}




