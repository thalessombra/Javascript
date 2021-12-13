let botao = (window.prompt('Qual a cotação do dolar atual?'))

let real = document.getElementById('conv')
let res = document.querySelector('div#res')
let dolar = document.querySelector('div#real')

real.addEventListener('click',pressionar)

function pressionar() {
    let R = Number(window.prompt('quanto vc tem na carteira?'))
    let D = (R/6.5).toFixed(2)


    res.innerHTML = ` <h2>o valor em reais de ${R}, 
                     da para gastar ${D} dolares</h2> `

}