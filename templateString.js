const nome = 'Isabella'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}!
`
console.log(concatenacao,template)

// esse exemplo é o mais prático para utilização de concatenação
// Você pode utilizar em quebras de linhas, por menos comuns que sejam
//Apenas utiliza ` `

console.log(`1+1=${1+1}`)

const up = texto => texto.toUpperCase() 
//Ignore a função arrow, foque na função string 
console.log(`Ei...${up('cuidado')}!`)