if(op == "+"){
    total = n1 + n2;
    console.log(`O valor da soma é ${total}`);
} else if(op == "-") {
    total = n1 - n2;
    console.log(`O valor da subtração é ${total}`);
} else if(op == "*") {
    total = n1 * n2;
    console.log(`O valor da multiplicação é ${total}`);
} else if(op == "/") {
    if (n2 === 0) {
        console.log("Erro: divisão por zero não é permitida.");
    } else {
        total = n1 / n2;
        console.log(`O valor da divisão é ${total}`);
    }
} else {
    console.log("Operação inválida, operação indisponível.");
}
