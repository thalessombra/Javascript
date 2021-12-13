let bas = document.getElementById('bhaskara')
let delta = document.querySelector('div#formula')
let de =document.querySelector('div#delta')


bas.addEventListener('click', clicar)

function clicar() {
        let F =Number(window.prompt('digite o valor de a:'))
        let D =Number(window.prompt('digite o valor de b:'))
        let B =Number(window.prompt('digite o valor de c:'))
        let r =(D*D - 4*F*B )


        delta.innerHTML = ` <p>
            a equação atual é ${F}x² + ${D}x + ${B}
            = 0
        </p>`
        de.innerHTML = ` <p>o cálculo é = ${D*D} - 4 * ${F} * ${B}</p>  
        E o resultado é ${r}.`




}