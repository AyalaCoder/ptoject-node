const express=require("express")
const router=express.Router()
const todoController=require("../controllers/todoController")

router.get('/get',todoController.getAllTodos)
router.put('/update/:id',todoController.updateTodo)
router.post('/create',todoController.createTodo)
router.delete('/delete/:id',todoController.deleteTodo)

module.exports=router