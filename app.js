//Imports
const express = require('express')
const app = express();
const Sequelize = require('sequelize')
const db = require('./Models/db.js')
const handlebars = require('express-handlebars')
const Contatos = require('./Models/contatos.js')

//Config express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Config handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Iniciando servidor e conexão com DB
iniciar()
db.conectarDB()

//Rotas
const rotaHome = require('./Rotas/home.js')
app.use(rotaHome)

const rotaCadastro = require('./Rotas/cadastro.js');
app.use(rotaCadastro)

criarContato()

const rotaLista = require('./Rotas/lista.js')
 app.use(rotaLista)

 const rotaEditar = require('./Rotas/editar.js')
 app.use(rotaEditar)

function iniciar() {
    app.listen(3333, () => { console.log("O servidor abriu!") });
}
    
function criarContato(){
    app.post('/enviado', (req, res) => {
        Contatos.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            telefone: req.body.telefone,
            email: req.body.email
        })
        res.render('cadastro')
    })
}

module.exports = { handlebars }
