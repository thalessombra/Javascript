let botao = document.getElementById('temp')
 let temp = document.querySelector('div#res')
 let conv = document.querySelector('div#conv')

botao.addEventListener('click', clicar)

 function clicar() {
    let C = Number(window.prompt('Digite a temperatura em C'))
      let f = (C/5 - 32/9).toFixed(2)
      let k = (C + 273.15).toFixed(2)

    



    res.innerHTML = ` <h2>a temperatura em Celsius é ${C} °C </h2>`
    conv.innerHTML = `<p> em Fahrenheit, a temperatura é ${f} °F </p> 
    em Kelvin a temperatura é ${k} K `

               

 }