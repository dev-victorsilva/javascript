//Dada a variável temperatura (em °C), mostre no console:
//"Está quente" se for acima de 30,
//"Está agradável" se estiver entre 15 e 30,
//"Está frio" se for abaixo de 15.

var temperatura;

if (temperatura > 30) {
    console.log("Quente");
} else if (temperatura >= 15 && temperatura <= 30) {
    console.log("Agradável");
} else {
    console.log("Frio");
}