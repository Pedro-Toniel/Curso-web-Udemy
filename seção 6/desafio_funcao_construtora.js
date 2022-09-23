class Pessoa {
    constructor(nome) {
        this.nome = nome 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Pedro')
p1.falar()


// Função construtora

function Pessoa1(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa1('Pedro Toniel')
p2.falar()