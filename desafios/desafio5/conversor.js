
  let bt = document.getElementById('bt')
  let res = document.querySelector('div#res')
  let conv = document.querySelector('div#conversao')
  bt.addEventListener('click', clicar)

  
  function clicar() {
      let M = Number(window.prompt('digite o valor em m'))
      let km = (M / 1000).toFixed(3)
      let hm = (M / 100).toFixed(3)
      let dam = (M / 10).toFixed(3)
      let dm = (M * 10)
      let cm = (M * 100)
      let mm = (M * 1000)

      res.innerHTML = `<h2> a distância  de ${M}m corresponde a ... </h2>`
     conv.innerHTML  = ` <p> ${km} km </p>`
                       `<p>${hm} hm </p>`
                       `<p> ${dam} dam </p>`
                       `<p> ${dm} dm </p>`
                       ` <p>${cm}  cm</p>`
                       ` <p>${mm} mm</p> `


  }


  

        
        
       