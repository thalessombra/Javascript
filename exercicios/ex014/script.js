function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = ` Agora são ${hora} horas. `
if(hora >= 0 && hora <=12 ){
    //bom dia
    img.src = "pexels-quang-nguyen-vinh-3355788.jpg"
    document.body.style.background = '#e2cd9F'
} else if (hora >=12 && hora <18) {
    //boa tarde
    img.src = "pexels-george-desipris-858241.jpg"
    document.body.style.background = '#b9846f'
} else {
    //boa noite
    img.src = "pexels-kaique-rocha-105229.jpg"
    document.body.style.background = '#515154'
}

}