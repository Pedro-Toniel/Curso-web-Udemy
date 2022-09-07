//novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 24,
    endereco: {
        logradouro:'Rua js',
        numero:10
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)