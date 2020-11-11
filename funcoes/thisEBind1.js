//This é uma forma de referenciar um objeto atual de uma execução
//This pode variar dependendo da função que é chamada

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //acessando saudacao(atributo) do objeto no qual o dono da função, ou seja, pessoa

    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //nao acessa saudacao, logo o objeto eh undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //a funcao bind retorna outra funcao que esta amarrada em pessoa
//o resultado eh uma amarração de pessoa

