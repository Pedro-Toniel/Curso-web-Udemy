//par nome/valor
const saudacao = 'Opa'//contexto léxico 1

function exec(){
    const saudacao = 'Falaaa'//contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 24,
    peso: 110,
    endereco: {
        logradouro:'Rua do javaScript',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)