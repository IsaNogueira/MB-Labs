function soma1(a,b,c) 
{
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3))

// se a for diferente de undefined (operador ternario)
//caso seja diferente ele pega o proprio valor de a
//e se a for igual undefined (nao passou o valor de a) a = 1

function soma2(a , b , c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1  //dentro de arguments tem o valor de indice 1? se nao, pegue 1
    c = isNaN(c) ? 1 : c  //se nao for um numero ele pega um valor padrao, e se for um numero ele pega o valor passado como padrao (c)
    return a+b+c
}
 
console.log(soma2(),soma2(3),soma2(1, 2, 3),soma2(0, 0, 0))

//se quiser usar o es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1, 2, 3),soma3(0, 0, 0))