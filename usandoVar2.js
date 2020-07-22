var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)
//exemplo de como var se comporta
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)
//como let se comporta com escopo!
//fuja do escopo global!!

