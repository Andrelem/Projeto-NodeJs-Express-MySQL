const constumExpress = require("./config/constumExpress")
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabela')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        const app = constumExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
}) 
