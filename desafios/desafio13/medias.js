let media = document.getElementById('media')
let aprovado = document.querySelector('div#medias')
let reprovado = document.querySelector('div#aprovado')

media.addEventListener('click', clicar)

function clicar() {
    let aprov =Number(window.prompt('qual a sua primeira nota?'))

    let reprov =Number(window.prompt('qual a sua segunda nota?'))

    let m = ((aprov + reprov) / 2)

    if(m < 3 ) {
        aprovado.innerHTML = ` <p>sua média somando ${aprov} e ${reprov} é ${m}, voce está reprovado</p> `

    }  else if (m >=3  && m < 6 ) { 
         aprovado.innerHTML+= ` <p>voce está de recuperação,sua média foi ${m}</p>`

    } else  {
          reprovado.innerHTML = ` <p>sua média foi ${m} voce esta aprovado</p> `
    }
}