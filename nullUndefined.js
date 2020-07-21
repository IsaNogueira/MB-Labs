let valor //nao atribua nada
console.log(valor)
//imprime undefined
//é diferente de vc não decretar uma variavel

valor = null
//null significa que ela n tem nenhum endereço que aponte para ela
//ausencia de valor

console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // nao defina desse jeito
console.log(!!produto.preco)
//caso queira tirar o atributo de uma var, use delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
//apenas testes para saber como pode fazer uma atribuição certa
