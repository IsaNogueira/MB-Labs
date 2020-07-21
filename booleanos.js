let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Tudo isso são valores verdadeiros

console.log('os falsos...')
console.log(!!0) //string vazia...
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || 'epa' || 123))

let nome = 'Lucas'

console.log(nome || 'desconhecido')

//Tudo isso foi para ver quais variaveis são true or false, e como utilizamos elas.


