const Atendimento = require('../models/atendimentos')
const constumExpress = require("../config/constumExpress")

constumExpress
module.exports = app => { 
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
    
        Atendimento.adiciona(atendimento, res)
    
    })
}