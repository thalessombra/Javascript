
let desc = document.getElementById('de')
let dev = document.querySelector('div#res')
let dar = document.querySelector('div#desconto')

desc.addEventListener('click', clicar)

function clicar () {
     let V = (window.prompt('digite o nome do produto'))
     let M = Number(window.prompt('digite o valor do produto'))
     let Des =(M * 10/100).toFixed(2)

    dev.innerHTML = ` <h2>o valor de ${V} é ${M} reais</h2> `
    dar.innerHTML = ` <p>o desconto  é de ${Des} reais </p>`
}