var nota = Number(prompt("Digite a sua nota:"));


if(nota < 0 || nota > 10) {
    console.log("Nota invalida")
} else if(nota < 6) {
    console.log("Reprovado")
} else {
    console.log(`Você tirou ${nota} e foi aprovado.`)
}