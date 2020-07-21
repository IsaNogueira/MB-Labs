const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.832
const avaliacao2 = 4.567

const total = avaliacao1*peso1+avaliacao2*peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))

//metodo toFixed serve para colocar virgula na sua casa decimal
//parecido com o .2f do C para passar duas casas para floatnumber

console.log(media.toString())

//metodo toString transforma sua variavel em string ou retorna o valor original

console.log(media.toString(2))

//quando passamos o toString com o valor 2, ele transforma seu numero em binario

console.log(typeof media)

//tipo typeof declara o tipo da sua variavel


