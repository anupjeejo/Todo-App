const express = require("express")
const router = express.Router()
const { getToDo, addToDo, deleteToDo, updateToDo, activeToDo } = require("../controllers/ToDoController")

router.get('/getTodo', getToDo)
router.post('/addTodo', addToDo)
router.post('/deleteTodo', deleteToDo)
router.put('/activeToDo', activeToDo)

module.exports = router