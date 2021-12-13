let preço = document.getElementById('custo')
let antes = document.querySelector('div#antes')
let depois = document.querySelector('div#depois')

preço.addEventListener('click', clicar)

function clicar() {
    let p =Number.parseFloat(window.prompt('digite o valor antigo do produto'))

    let d = Number.parseFloat(window.prompt('digite o valor atual do produto'))

    let m = (d - p)
    let c = (m * d/100)

   if( d > p ) { antes.innerHTML = `<h2> o valor antigo do produto era ${p} reais, atualmente ele custa ${d} reais
    o preço mudou em ${m} reais e houve um aumento  de  ${c}% </h2> ` } else {

    depois.innerHTML = ` <h2>  o valor antigo do produto era ${p} reais, atualmente ele custa ${d} reais
     o preço mudou em ${m} reais e houve um desconto de ${c}%</h2>  ` }
}