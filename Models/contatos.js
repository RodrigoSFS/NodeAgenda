const { Sequelize } = require('./db')
const db = require('./db')
const Contatos = db.connection.define('contatos', {
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
        
},{timestamps: false})


module.exports = Contatos