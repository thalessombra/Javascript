
let b = document.getElementById('re')
let d=document.querySelector('div#sal')
let e =document.querySelector('div#des')

b.addEventListener('click',ajustar)

function ajustar() {
    let c=(window.prompt('meu nome é'))
    let s=Number(window.prompt('qual seu salário?'))
    let r = (s * 10/100)
    let t =(s + r).toFixed(2)

    d.innerHTML = ` <h2>${c} é um bom trabalhador, ele recebe ${s} reais e vai ter um aumento de 10% que vai ser  um total de ${r} reais</h2> `
    e.innerHTML = `<p>Agora ${c} recebe ${t} reais</p>`




}


