class Tabelas {
    init(conexao) {
        this.conexao = conexao
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE Atendimentos IF NOT EXISTS (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20),servico varchar(20) NOT NULL,data datetime NOT NULL,dataCriacao datetime NOT NULL, status varchar(20) NOT NULL,observacoes text, PRIMARY KEY(id))'

        this.conexao.query()
    }
}

module.exports = new Tabelas