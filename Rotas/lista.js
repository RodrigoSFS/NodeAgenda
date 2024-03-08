const express = require('express')
const router = express.Router()
const Contatos = require('../Models/contatos.js')

listarContatosOrdenados()
apagarContato()
buscarContato()

function listarContatosOrdenados() {
    router.get('/lista', (req, res) => {

        Contatos.findAll({
            order: [
                ['nome', 'ASC']
            ]
        }).then((contatos) => {
            res.render('lista', { contatos: contatos })
        }).catch((erro) => {
            res.send('Não foi possível listar os contatos...' + erro)
        })
    })
}

function apagarContato() {
    router.get('/apagar/:id', (req, res) => {
        Contatos.destroy({
            where: { 'id': req.params.id }
        }).then(() => {
            res.redirect('/lista')
        }).catch((erro) => {
            res.send('Não foi possível apagar...' + erro)
        })
    })
}

function buscarContato() {
    router.post('/busca', (req, res) => {
        Contatos.findAll({ 
            where: { 'nome' : req.body.campo }
        }).then((contatos) => {
            res.render('busca', { contatos: contatos })
        }).catch((erro) => {
            res.send('Não foi possível fazer a busca...' + erro)
        })
    })

}

module.exports = router