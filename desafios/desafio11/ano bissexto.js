let ano = window.document.getElementById('ano')

let bi = window.document.querySelector('div#bi')

let nao = window.document.querySelector('div#nao')

ano.addEventListener('click',clicar)

function clicar() {
    let ani = Number(window.prompt('digite o ano'))
    if (ani % 4 == 0   && ani % 100  != 0 || ani % 400 == 0 ) { 
        bi.innerHTML = `<h2>o ano de ${ani} é bissexto &#x2714; </h2> ` 
    }  
    else  {
        nao.innerHTML = ` <h2>ano de ${ani} não é bissexto &#x274C; </h2>`
    }
}