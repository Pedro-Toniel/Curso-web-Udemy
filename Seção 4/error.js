function tratarErrorELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.nome.toUpperCase()) 
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Pedro'}
imprimirNomeGritando(obj)