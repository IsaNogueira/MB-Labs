const funcs =[]

for (var i = 0; i<10; i++)
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Criando essa função com retorno vazio, pegamos o valor da posição funcs
//com o Var vemos que não temos escopo, logo ele pega o ultimo numero da posição

const funcs =[]

for (let i = 0; i<10; i++) //apenas trocamos var por let
{
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//Caso usemos o Let, o escopo fica funcional e pega-se as posiçao do bloco
