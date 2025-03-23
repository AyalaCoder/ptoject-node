const Todos=require("../models/Todos")

const createTodo = async(req,res)=>{
    const {title,tags,completed}=req.body
    if(!title)
       return res.status(404).json({message:'there is a detail missing'})
    const todo = await Todos.create({title,tags,completed})
    res.json(todo)

}
const getAllTodos=async (req, res) => {
    const todos = await Todos.find().lean()
    if (!todos?.length) {
    return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    }

const updateTodo= async (req, res) => {
    const {id}=req.params
    const {title, completed}= req.body

    const todo = await Todos.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'todo not found' })
    }
    if(title){
    todo.title = title}
    todo.completed = completed
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated`)
    }
const deleteTodo=async (req, res) => {
    const { id } = req.params
    const todo = await Todos.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'todo not found' })
    }
    const reply=`Todo '${todo.title}' ID ${todo.id} deleted`
    const result = await todo.deleteOne()

    res.json(reply)
    }
    module.exports = {
        createTodo,
        getAllTodos,
        updateTodo,
        deleteTodo
        }