const mysql = require('mysql')

const conexao = mysql.createConnection({
    host:'localhost',
    port:3307,
    user:'root',
    password:'2004',
    database:'agenda-petshop'
})

module.exports = conexao