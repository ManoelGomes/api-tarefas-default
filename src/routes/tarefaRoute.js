const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const apiController = require('../controllers/apiController')

route.get ('/', apiController.verifica, tarefaController.listar)
route.get('/:id', tarefaController.listarPorId)
route.post('/', tarefaController.inserir)
route.put('/:id', tarefaController.alterar)
route.delete('/:id',tarefaController.deletar)

module.exports = route
