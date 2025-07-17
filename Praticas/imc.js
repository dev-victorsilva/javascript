var peso = Number(prompt("Digite o seu peso:"))
var altura = Number(prompt("Digite sua altura"))
var imc;

imc = peso / (altura * altura)

if(imc < 18.5) {
    console.log("Você esta abaixo do peso")

} else if(imc >= 18.5 && imc <= 24.9) {
    console.log("Você está com peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso.")
} else {
    console.log("Você está com obesidade.")
}