let contador = 0
const botao = document.querySelector('#botao')
const paragrafo = document.querySelector('#contador')

botao.addEventListener('click', function () {
    contador++
    paragrafo.innerText = `Você clicou ${contador} vezes.`
})