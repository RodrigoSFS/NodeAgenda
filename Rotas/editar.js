const express = require('express')
const router = express.Router()
const Contatos = require('../Models/contatos')
var id

router.get('/editar/:id', (req, res) => {
    res.render('editar')
    id = req.params.id
    return id
})

editarCadastro()

function editarCadastro() {

    router.post('/editado', (req, res) => {
        Contatos.update({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            telefone: req.body.telefone,
            email: req.body.email
        }, {
            where: { id: id }
        }).then(() => {
            res.redirect('/lista')
        }).catch((erro) => {
            res.send('Não foi possível editar...' + erro)
        })
    })

}

module.exports = router;