// Tipos Primitivos
// Tipo number
// Tipos numero

// Variaveis 
// Nome que identifica espaço na memoria que se refere a uma valor

// const -> Não muda após sua definição
// var -> Pode mudar após sua definição

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

// Javascript identifica que se trata de tipos numericos e realiza a operação
const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const smultiplicação = primeiroNumero + segundoNumero;
const divisao = primeiroNumero - segundoNumero;

// comando console.log apresenta o valor
console.log("Soma: " + soma)
console.log("Subtração: " + soma)
console.log("Multiplicação: " + soma)
console.log("Divisão: " + soma)

// Not a Number: Erro causado ao se tentar realizar uma operação matemática com algo que não é matematico
const texto = "Teste"
const textoSoma = soma + texto
console.log('Texto + Soma = ' + textoSoma * soma)


