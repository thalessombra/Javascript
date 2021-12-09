function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) { window.alert('[Erro]')

    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }

        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >=0 && idade < 9) {
                img.setAttribute('src', 'foto-bebe-m.png')
                //bebe,criança
            } else if (idade < 20){


              img.setAttribute('src', 'foto-jovem-m.png') 
            //jovem
            } else if ( idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
                //adulto

            } else if(idade > 50) {
                img.setAttribute('src', 'foto-idoso-m.png')
                //idoso
            }
        
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade < 9) {
                img.setAttribute('src', 'foto-bebe-f.png')
                //bebe,criança
            } else if (idade < 20){
                img.setAttribute('src', 'foto-jovem-f.png')

            //jovem
            } else if ( idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')   
                 //adulto
            } else if (idade > 50) {
                img.setAttribute('src', 'foto-idoso-f.png')
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = ` detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
