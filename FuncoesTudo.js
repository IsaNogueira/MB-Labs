//funcao sem retorno
function iimprimirSoma(a, b)
{
    console.log(a + b)
}

iimprimirSoma(2, 3)
//Basicamente essa funcao faz a soma

iimprimirSoma(2) //vc pode fazer isso pois js permite e retorna NaN

//funcao com retorno
function ssoma(a, b = 0)
{
    return a + b
}

console.log(ssoma(2 , 3))
console.log(ssoma()) // nao passando nada imprime NaN

//Funcao 2

//Armazenando uma funcao em uma variavel/const

const imprimirSoma = function  (a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma funcao arrow em uma variavel/const
//transformando o exemplo de cima em uma arrow function

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')