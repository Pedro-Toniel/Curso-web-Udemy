//closure é o escopo criado quandouma função é declarada
//ese escopo permite a função acessar e manipular váriaveis externas à função

//contexto lexico em ação!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())