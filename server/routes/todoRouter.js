const express = require('express')
const {getAlltodos, toggleTodoDone, addTodo, updateTodo, deleteTodo} = require('../controllers/todoController')

const router = express.Router()

// GET REQUEST
router.get('/todos', getAlltodos)
router.get('/todos/:id', toggleTodoDone)

// POST REQUEST
router.post('/todos',addTodo)

// PUT REQUEST
router.put('/todos/:id',updateTodo)

// DELETE REQUEST
router.delete('/todos/:id',deleteTodo)

module.exports = router