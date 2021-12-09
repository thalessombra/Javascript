/*
let amigo = {nome:'Joao', 
sexo:'M',
peso:80.3, 
emagrecer(p){
    console.log('Emagreceu')
    this.peso -= p

}
}
amigo.emagrecer(5)

console.log( `${ amigo.nome} pesa ${amigo.peso} kg`)
*/
let pessoa = { nome:'Rodrigo',
sexo:'M',
altura: 1.75,
crescer (a){
    console.log('cresceu')
    this.altura += a
} }
 pessoa.crescer(0.020)
console.log(` ${pessoa.nome} tem ${pessoa.altura} cm `)




