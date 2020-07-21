//Vamos conhecer a API da String!

const escola = "Vida"

console.log(escola.charAt(3))

//Metodo .charAt retorna a letra da posição escolhida
//Lembrando que contamos de 0 a 10 
//Entao se vc quer a terceira letra, temos 0,1,2 (2 eh a terceira letra)

console.log(escola.charCodeAt(3))
//metodo .charCodeAt  retorna o valor da posição escolhida na tabela Ascii

console.log(escola.indexOf(2))

console.log(escola.substring(1))

//substring ele retorna o resto da palavra depois da posição que escolheu

console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))

//Concatenou sua variavel

console.log(escola.replace(3, 'e'))
//.replace substitui a posição que vc escolheu pela letra que vc quer

console.log('Ana,Maria,Pedro'.split(','))

//.split transforma em array com separação
