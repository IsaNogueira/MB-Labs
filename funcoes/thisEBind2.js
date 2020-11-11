function Pessoa() {
    this.idade = 0
    const self = this //self recebe diretamente a referencia de this
    //nessa linha o this é o obejto que queremos apontar

    setInterval(function (){
        /*this.*/self.idade++
        console.log(/*this.*/self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

//A funcao inteira retorna em 1s o resultado dessa funcao