var n1 = Number(prompt("Digite o primeiro valor:"))
var n2 = Number(prompt("Digite o segundo valor:"))


if (n1 === n2 ) {
    console.log(`Os números ${n1} e ${n2} são iguais.`)
} else if(n1 > n2) { 
    console.log(`O número ${n1} é maior que o número ${n2}`)
} else {
    console.log(`O número ${n2} é maior que o número ${n1}`)
}