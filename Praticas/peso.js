var peso = Number(prompt("Digite o peso"));

if(peso < 50) {
    console.log(`Você está abaixo do peso com exatos ${peso} KG.`)
} else if( peso >= 50 && peso <= 80) {
    console.log(`Você está com o peso ideal com exatamente ${peso} KG.`)
} else {
    console.log(`Você está acima do peso com ${peso} KG.`)
}