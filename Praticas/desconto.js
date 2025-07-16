var valor = Number(prompt("Digite o valor da compra:"));

var desconto;
var total;


if (valor >= 200) {
    desconto = (20 * valor) / 100
    total = valor - desconto
    console.log(`Você recebeu ${desconto} de desconto. ${total} é o valor a ser pago`)
} else if(valor >= 100 && valor <= 199 ) {
    desconto = (10 * valor) / 100
    total = valor - desconto
    console.log(`Você recebeu ${desconto} de desconto. ${total} é o valor a ser pago`)
} else {
    console.log(`Você não recebeu nenhum desconto, ${valor} é o valor a ser pago`)
}